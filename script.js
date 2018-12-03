new Vue({
	el: '#countDownTimer',
	data() {
		return {
			weddingDay: new Date(2017, 3, 8, 12).getTime(),
			now: Date.now()
		}
	},
	created() {
		setInterval(() => {
			this.now = Date.now()
		}, 1000)
	},
	computed: {
		time() {
			const delta = this.weddingDay - this.now
			return {
				seconds: Math.floor((delta / 1000) % 60) + 1,
				minutes: Math.floor((delta / 1000 / 60) % 60) + 1,
				hours: Math.floor((delta / (1000 * 60 * 60)) % 24) + 1,
				days: Math.floor(delta / (1000 * 60 * 60 * 24)) + 1
			}
		}
	}
})

document.querySelector('#submit-now').addEventListener('click', event => {
	document.querySelector('body').classList.add('submitted')
})
