var $countDownTimer,
	$days,
	$hours,
	$minutes,
	$seconds,
	thisTime,
	lastTime = Date.now(),
	weddingDate = new Date(2017, 3, 8, 12),
	willRun = true,
	downArrowBounceInterval,
	$logoSvg,
	$sectionHeader,
	sectionHeaderOriginalTop,
	$checkBoxes

$(function() {
	$countDownTimer = $('#countDownTimer')
	$days = $countDownTimer.find('#days')
	$hours = $countDownTimer.find('#hours')
	$minutes = $countDownTimer.find('#minutes')
	$seconds = $countDownTimer.find('#seconds')
	$sectionHeader = $('.section-header')
	$logoSvg = $('#logo-svg')
	logoSvgInitialTop = parseInt($logoSvg.css('top'))
	$checkBoxes = $('#inputja-jeg-er-med, #inputnei-jeg-kan-ikke-vaere-med')

	$checkBoxes.eq(0).prop('checked', true)
	$checkBoxes
		.eq(0)
		.siblings()
		.prop('checked', true)
	$checkBoxes
		.eq(0)
		.parent()
		.addClass('active')
	$checkBoxes.on('click', function() {
		$checkBoxes.parent().removeClass('active')
		$checkBoxes.removeProp('checked')
		$checkBoxes.siblings().removeProp('checked')

		$(this)
			.parent()
			.addClass('active')
		$(this).prop('checked', true)
		$(this)
			.siblings()
			.prop('checked', true)
	})
	$('.checkbox')
		.parent()
		.addClass('checkboxParent')
	$('.checkboxParent')
		.eq(1)
		.addClass('lastCheckBox')

	$('.google-map, .section-header').css('height', window.innerHeight)

	$('#credit-edwin, #downArrow').appendTo('.section-header')
	$('#downArrow').on('click', function() {
		$('.article240').velocity('scroll', {
			duration: 2000,
			easing: 'spring'
		})
		$(this).css('display', 'none')
	})

	updateTimer()
	setInterval(() => {
		updateTimer()
	}, 1000)

	downArrowBounceInterval = setInterval(function() {
		$('#downArrow').velocity('callout.bounce', 1000)
	}, 3000)

	if ($(window).scrollTop() > 0) {
		clearInterval(downArrowBounceInterval)
		$('#downArrow').css('display', 'none')
	}
})

window.addEventListener('scroll', function() {
	clearInterval(downArrowBounceInterval)
	$('#downArrow').css('display', 'none')
	/*
    var wScroll = $(this).scrollTop()
    if (wScroll <= window.innerHeight) {
        $sectionHeader.css('background-position-y', wScroll * 0.525)
        $logoSvg.css('top', logoSvgInitialTop + wScroll * 0.6)
    }
    */
})

function remainingTime(endtime) {
	//var t = Date.parse(endtime) - Date.parse(new Date())
	var t = Date.parse(endtime) - Date.now(),
		seconds = Math.floor((t / 1000) % 60) + 1,
		minutes = Math.floor((t / 1000 / 60) % 60) + 1,
		hours = Math.floor((t / (1000 * 60 * 60)) % 24) + 1,
		days = Math.floor(t / (1000 * 60 * 60 * 24)) + 1

	return {
		// 'total': t,
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds
	}
}

function updateTimer() {
	if (willRun) {
		thisTime = remainingTime(weddingDate)
		$days.text(thisTime.days)
		$hours.text(thisTime.hours)
		$minutes.text(thisTime.minutes)
		$seconds.text(thisTime.seconds)
		willRun = false
	} else {
		lastTime = thisTime
		thisTime = remainingTime(weddingDate)
		if (!(thisTime.days === lastTime.days)) {
			$days.text(thisTime.days)
		}
		if (!(thisTime.hours === lastTime.hours)) {
			$hours.text(thisTime.hours)
		}
		if (!(thisTime.minutes === lastTime.minutes)) {
			$minutes.text(thisTime.minutes)
		}
		if (!(thisTime.seconds === lastTime.seconds)) {
			$seconds.text(thisTime.seconds)
		}
	}
}
