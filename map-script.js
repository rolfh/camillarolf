var frimurerlosjenMarkerOpen = false
var banksalenMarkerOpen = false

function initMap() {
	var map = new google.maps.Map(document.querySelector('#google-map'), {
		center: { lat: 63.430817224313884, lng: 10.39981640321048 },
		zoom: 16,
		styles: mapStyling
	})

	/* --------------- */

	banksalenMarker = new google.maps.Marker({
		map: map,
		title: 'Festen: Banksalen',
		position: { lat: 63.43050049999999, lng: 10.399656899999968 }
	})
	var banksalenWindow = new google.maps.InfoWindow({
		content:
			'<h3 class="name">Festen: Banksalen</h3><a class="webpage" href="www.banksalen.no">www.banksalen.no</a>'
	})
	banksalenMarker.addListener('click', function() {
		banksalenWindow.open(map, banksalenMarker)
	})
	banksalenMarker.addListener('click', function() {
		if (banksalenMarkerOpen) {
			banksalenWindow.open(map, banksalenMarker)
			frimurerlosjenWindow.close()
			banksalenMarkerOpen = false
		} else {
			banksalenWindow.close()
			banksalenMarkerOpen = true
		}
	})

	/* --------------- */

	frimurerlosjenMarker = new google.maps.Marker({
		map: map,
		title: 'Vielsen: Frimurerlosjen',
		position: { lat: 63.430091, lng: 10.399735 }
	})
	var frimurerlosjenWindow = new google.maps.InfoWindow({
		content:
			'<h3>Vielsen: Frimurerlosjen</h3><a class="webpage" href="www.logentrondheim.no">www.logentrondheim.no</a>'
	})
	frimurerlosjenMarker.addListener('click', function() {
		if (frimurerlosjenMarkerOpen) {
			frimurerlosjenWindow.open(map, frimurerlosjenMarker)
			banksalenWindow.close()
			frimurerlosjenMarkerOpen = false
		} else {
			frimurerlosjenWindow.close()
			frimurerlosjenMarkerOpen = true
		}
	})
}
