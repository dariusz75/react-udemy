'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Student = function (_Person) {
	_inherits(Student, _Person);

	function Student(name, age, major) {
		_classCallCheck(this, Student);

		var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

		_this.major = major || 'Not decided';
		return _this;
	}

	_createClass(Student, [{
		key: 'hasMajor',
		value: function hasMajor() {
			return !!this.major;
		}
	}]);

	return Student;
}(Person);

var Traveler = function (_Person2) {
	_inherits(Traveler, _Person2);

	function Traveler(name, age, homeLocaton) {
		_classCallCheck(this, Traveler);

		var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

		_this2.homeLocaton = homeLocaton;
		return _this2;
	}

	_createClass(Traveler, [{
		key: 'getGretting',
		value: function getGretting() {}
	}]);

	return Traveler;
}(Person);

var me = new Student('Dariusz', 20, 'Front End');
console.log(me);
console.log(me.getDescription());
var other = new Student();
//console.log(other);


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
