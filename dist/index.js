'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var TEntrust = function () {
	function TEntrust(wrap) {
		classCallCheck(this, TEntrust);

		if (!wrap) throw new Error("listner element is not defined");
		this.$el = document.getElementById(wrap);
		this.event = "click";
		this.callback = null;
	}

	createClass(TEntrust, [{
		key: "listen",
		value: function listen(event, callback) {
			var localEvent = void 0;
			if (!event) {
				localEvent = "click";
				console.warn("default event is click");
			} else {
				localEvent = event;
			}
			this.event = localEvent;
			this.callback = callback;

			this.$el.addEventListener(this.event, callback);
			return this;
		}
	}, {
		key: "click",
		value: function click(callback) {
			return this.listen("click", callback);
		}
	}, {
		key: "mousemove",
		value: function mousemove(callback) {
			return this.listen("mousemove", callback);
		}
	}, {
		key: "scroll",
		value: function scroll(callback) {
			return this.listen("scroll", callback);
		}
	}, {
		key: "getName",
		value: function getName(e, currnetTagName) {
			var current = void 0,
			    currentEntrust = void 0;
			if (currnetTagName) {
				current = e.target.closest(currnetTagName);

				if (!current) return null;
				if (!this.$el.contains(current)) return null;

				currentEntrust = current.dataset.entrust;
				return currentEntrust || null;
			}

			current = e.target.dataset.entrust;
			currentEntrust = current.dataset.entrust;
			return currentEntrust || null;
		}
	}, {
		key: "destory",
		value: function destory() {
			this.$el.removeEventListener(this.event, this.callback);
		}
	}]);
	return TEntrust;
}();

module.exports = TEntrust;
