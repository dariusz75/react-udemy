'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
			return this.name + ' is ' + this.age + ' years old';
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
	}, {
		key: 'getDescription',
		value: function getDescription() {
			var studentDescription = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);

			if (this.hasMajor()) {
				studentDescription = studentDescription + (' and he is ' + this.major + ' Developer.');
			}

			return studentDescription;
		}
	}]);

	return Student;
}(Person);

//Challenge


var Traveler = function (_Student) {
	_inherits(Traveler, _Student);

	function Traveler(name, age, major, homeLocation) {
		_classCallCheck(this, Traveler);

		var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age, major));

		_this2.homeLocation = homeLocation;
		return _this2;
	}

	_createClass(Traveler, [{
		key: 'hasHomeLocation',
		value: function hasHomeLocation() {
			return !!this.homeLocation;
		}
	}, {
		key: 'getGretting',
		value: function getGretting() {
			var travellerGretting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getGretting', this).call(this);

			if (this.hasHomeLocation()) {
				travellerGretting = travellerGretting + (' I come from ' + this.homeLocation + '.');
			}

			return travellerGretting;
		}
	}]);

	return Traveler;
}(Student);

var me = new Student('Dariusz', 20, 'Front End');
console.log(me.getDescription());
//console.log(me.getDescription());
//const other = new Student();
//console.log(other);

var challenge = new Traveler('John', 30, 'PHP', 'London');
console.log(challenge.getGretting());

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

/*
Kilka uwag odnosnie klas

class Student extends Person - extends Person odpowiada za dziedziczenie z klasy Person

constructor(name, age, major) - w konstruktorze musimy podac ktore wlasciwosci obiektu klasy dziedziczymy. 
W naszym przypadku sa to name i age. major to nowoprzypisana wlasciwosc do obiektu klasy Person.

super(name, age); - Aby moc korzystac z dziedziczenia musimy wykonac jeszcze jedna operacje, 
uzyc metody super ktora udostepni nam wskazane wlasciwosci obiektu klasy Person.



hasMajor() {
		return !!this.major;
	}

Metode hasMajor utworzylismy w celu sprawdzenia czy wlasciwosc major posiada wartosc.
Metoda zwroci true albo false.


getDescription() {	
		let studentDescription = super.getDescription();

		if (this.hasMajor()) {
			studentDescription = studentDescription + ` and he is ${this.major} Developer.`
		}

			return studentDescription;
	}

Metoda getDescription klasy Student dziedziczy z klasy rodzica, czyli z klasy Person automatycznie 
poniewaz klasa Student dziedziczy z Person.
let studentDescription = super.getDescription(); - Aby uzyskac dostep do metody getDescription klasy Person 
uzywamy metody super() i przypisujemy wartosc do zmiennej let studentDescription.
W ten sposob metoda getDescription() klasy Student zwraca dokladnie te sama wartosc 
ktora zwraca metoda getDescription() klasy Person.


if (this.hasMajor()) {
			studentDescription = studentDescription + ` and he is ${this.major} Developer.`
		}

W przypadku kiedy obiekt Student posiada wlasciwosc major ktora posiada wartosc, 
chcemy aby nasza zmienna studentDescription zostala zmodywikowana w sposob podany powyzej.

*/
