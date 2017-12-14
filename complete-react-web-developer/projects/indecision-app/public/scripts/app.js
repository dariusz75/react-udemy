'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('application is running');

var Person = function () {
	function Person(name, age) {
		_classCallCheck(this, Person);

		this.name = name || 'Person unknown';
		this.age = age || 0;
	}

	_createClass(Person, [{
		key: 'getGretting',
		value: function getGretting() {
			//return 'Hi My name is ' + this.name + ' !';
			return 'Hi! I\'m ' + this.name + '!';
		}
	}, {
		key: 'getDescription',
		value: function getDescription() {
			return this.name + ' is ' + this.age + ' years old.';
		}
	}]);

	return Person;
}();

var me = new Person('Dariusz', 20);
console.log(me.getGretting());
console.log(me.getDescription());
var other = new Person();
console.log(other.getDescription());

var appRoot = document.getElementById('app');

var render = function render() {

	var template = React.createElement(
		'h1',
		null,
		'Please check the console.'
	);

	ReactDOM.render(template, appRoot);
};

render();
