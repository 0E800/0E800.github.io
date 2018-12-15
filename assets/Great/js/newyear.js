"use strict";
var _createClass = function () {
	function o(e, t) {
		for (var n = 0; n < t.length; n++) {
			var o = t[n];
			o.enumerable = o.enumerable || !1,
			o.configurable = !0,
			"value" in o && (o.writable = !0),
			Object.defineProperty(e, o.key, o)
		}
	}
	return function (e, t, n) {
		return t && o(e.prototype, t),
		n && o(e, n),
		e
	}
}
();
function _classCallCheck(e, t) {
	if (!(e instanceof t))
		throw new TypeError("Cannot call a class as a function")
}
var Balls = function () {
	function n(e, t) {
		_classCallCheck(this, n),
		this.context = e,
		this.buffer = t
	}
	return _createClass(n, [{
				key: "setup",
				value: function () {
					this.gainNode = this.context.createGain(),
					this.source = this.context.createBufferSource(),
					this.source.buffer = this.buffer,
					this.source.connect(this.gainNode),
					this.gainNode.connect(this.context.destination),
					this.gainNode.gain.setValueAtTime(1, this.context.currentTime)
				}
			}, {
				key: "play",
				value: function () {
					this.setup(),
					this.source.start(this.context.currentTime)
				}
			}, {
				key: "stop",
				value: function () {
					var e = this.context.currentTime + 1;
					this.gainNode.gain.exponentialRampToValueAtTime(.1, e),
					this.source.stop(e)
				}
			}
		]),
	n
}
(), Buffer = function () {
	function n(e, t) {
		_classCallCheck(this, n),
		this.context = e,
		this.urls = t,
		this.buffer = []
	}
	return _createClass(n, [{
				key: "loadSound",
				value: function (e, t) {
					var n = new XMLHttpRequest;
					n.open("get", e, !0),
					n.responseType = "arraybuffer";
					var o = this;
					n.onload = function () {
						o.context.decodeAudioData(n.response, function (e) {
							o.buffer[t] = e,
							t == o.urls.length - 1 && o.loaded()
						})
					},
					n.send()
				}
			}, {
				key: "getBuffer",
				value: function () {
					var n = this;
					this.urls.forEach(function (e, t) {
						n.loadSound(e, t)
					})
				}
			}, {
				key: "loaded",
				value: function () {
					_loaded = !0
				}
			}, {
				key: "getSound",
				value: function (e) {
					return this.buffer[e]
				}
			}
		]),
	n
}
(), balls = null, preset = 0, _loaded = !1, path = "https://0e800.github.io/assets/Great/images/audio/", sounds = [path + "sound1.mp3", path + "sound2.mp3", path + "sound3.mp3", path + "sound4.mp3", path + "sound5.mp3", path + "sound6.mp3", path + "sound7.mp3", path + "sound8.mp3", path + "sound9.mp3", path + "sound10.mp3", path + "sound11.mp3", path + "sound12.mp3", path + "sound13.mp3", path + "sound14.mp3", path + "sound15.mp3", path + "sound16.mp3", path + "sound17.mp3", path + "sound18.mp3", path + "sound19.mp3", path + "sound20.mp3", path + "sound21.mp3", path + "sound22.mp3", path + "sound23.mp3", path + "sound24.mp3", path + "sound25.mp3", path + "sound26.mp3", path + "sound27.mp3", path + "sound28.mp3", path + "sound29.mp3", path + "sound30.mp3", path + "sound31.mp3", path + "sound32.mp3", path + "sound33.mp3", path + "sound34.mp3", path + "sound35.mp3", path + "sound36.mp3"], context = new(window.AudioContext || window.webkitAudioContext);
function playBalls() {
	var e = parseInt(this.dataset.note) + preset;
	(balls = new Balls(context, buffer.getSound(e))).play()
}
function stopBalls() {
	balls.stop()
}
var buffer = new Buffer(context, sounds), ballsSound = buffer.getBuffer(), buttons = document.querySelectorAll(".b-ball_bounce");
function ballBounce(e) {
	var t = e;
	-1 < e.className.indexOf("bounce") || toggleBounce(t)
}
function toggleBounce(e) {
	e.classList.add("bounce"),
	setTimeout(function () {
		e.classList.remove("bounce"),
		e.classList.add("bounce1"),
		setTimeout(function () {
			e.classList.remove("bounce1"),
			e.classList.add("bounce2"),
			setTimeout(function () {
				e.classList.remove("bounce2"),
				e.classList.add("bounce3"),
				setTimeout(function () {
					e.classList.remove("bounce3")
				}, 300)
			}, 300)
		}, 300)
	}, 300)
}
buttons.forEach(function (e) {
	e.addEventListener("mouseenter", playBalls.bind(e)),
	e.addEventListener("mouseleave", stopBalls)
});
for (var array1 = document.querySelectorAll(".b-ball_bounce"), array2 = document.querySelectorAll(".b-ball_bounce .b-ball__right"), i = 0; i < array1.length; i++)
	array1[i].addEventListener("mouseenter", function () {
		ballBounce(this)
	});
for (i = 0; i < array2.length; i++)
	array2[i].addEventListener("mouseenter", function () {
		ballBounce(this)
	});
for (var l = ["49", "50", "51", "52", "53", "54", "55", "56", "57", "48", "189", "187", "81", "87", "69", "82", "84", "89", "85", "73", "79", "80", "219", "221", "65", "83", "68", "70", "71", "72", "74", "75", "76", "186", "222", "220"], k = ["90", "88", "67", "86", "66", "78", "77", "188", "190", "191"], a = {}, e = 0, c = l.length; e < c; e++)
	a[l[e]] = e;
for (var _e = 0, _c = k.length; _e < _c; _e++)
	a[k[_e]] = _e;
/*document.addEventListener("keydown", function (e) {
	e.target;
	if (e.which in a) {
		var t = parseInt(a[e.which]);
		(balls = new Balls(context, buffer.getSound(t))).play(),
		toggleBounce(document.querySelector('[data-note="' + t + '"]'))
	}
});*/
