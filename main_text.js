class ScrambleTheText {
	constructor(el) {
		this.el = el
		this.chars = 'M!<>1-_9E\\8/[H]{}6—=+*^?#________'
		this.update = this.update.bind(this)
	}
	
	setText(newText) {
		var oldText = this.el.innerText
		var length = Math.max(oldText.length, newText.length)
		var promise = new Promise((resolve) => this.resolve = resolve)
		
		this.queue = []
		for (let i = 0; i < length; i++) {
			var from = oldText[i] || ''
			var to = newText[i] || ''
			var start = Math.floor(Math.random() * 40)
			var end = start + Math.floor(Math.random() * 40)
			this.queue.push({ from, to, start, end })
		}
		cancelAnimationFrame(this.frameRequest)
		this.frame = 0
		this.update()
		return promise
	}
	
	update() {
		let output = ''
		let complete = 0
		for (let i = 0, n = this.queue.length; i < n; i++) {
			let { from, to, start, end, char } = this.queue[i]
			if (this.frame >= end) {
				complete++
				output += to
			} else if (this.frame >= start) {
				if (!char || Math.random() < 0.28) {
					char = this.randomChar()
					this.queue[i].char = char
				}
				output += `<span class="dummy">${char}</span>`
			} else {
				output += from
			}
		}
		this.el.innerHTML = output
		if (complete === this.queue.length) {
			this.resolve()
		} else {
			this.frameRequest = requestAnimationFrame(this.update)
			this.frame++
		}
	}
	
	randomChar() {
		return this.chars[Math.floor(Math.random() * this.chars.length)]
	}
}

// Usage Demo
var mySkills = [
	'I am Jenny Seulki Oh',
	'I love Web Developement',
	'I am creative',
	'I am idealistic',
	'I love coding',
	'I love beautiful things',
	"Let's make beautiful things, ", "together!"
	
	
]

var el = document.querySelector('.knowledge')
var fx = new ScrambleTheText(el)

let counter = 0
var next = () => {
	fx.setText(mySkills[counter]).then(() => {
		setTimeout(next, 1500)
	})
	counter = (counter + 1) % mySkills.length
}
next()