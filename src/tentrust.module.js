class TEntrust {
	constructor(wrap) {
		if (!wrap) throw new Error("listner element is not defined")
		this.$el = document.getElementById(wrap)
		this.event = "click"
		this.callback = null
	}
	listen(event, callback) {
		let localEvent
		if (!event) {
			localEvent = "click"
			console.warn("default event is click")
		} else {
			localEvent = event
		}
		this.event = localEvent
		this.callback = callback

		this.$el.addEventListener(this.event, callback)
		return this
	}
	getName(e, currnetTagName) {
		if (!e) throw new Error("event is not defined")
		let current, currentEntrust
		if (currnetTagName) {
			current = e.target.closest(currnetTagName)

			if (!current) return null
			if (!this.$el.contains(current)) return null

			currentEntrust = current.dataset.entrust
			return currentEntrust || null
		}

		current = e.target.dataset.entrust
		currentEntrust = current.dataset.entrust
		return currentEntrust || null
	}

	destory() {
		this.$el.removeEventListener(this.event, this.callback)
	}
}

<<<<<<< HEAD:tentrust.module.js
module.exports = TEntrust
=======
export default TEntrust
>>>>>>> feature-rollup:src/tentrust.module.js
