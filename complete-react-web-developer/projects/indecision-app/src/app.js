console.log('application is running');

class Person {
	constructor (name, age) {
		this.name = name || 'Person unknown';
		this.age = age || 0;
	}
	getGretting() {
		//return 'Hi My name is ' + this.name + ' !';
		return `Hi! I'm ${this.name}!`;
	}
	getDescription() {		
			return `${this.name} is ${this.age} years old`;
	}
}


class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major || 'Not decided';
	}
	hasMajor() {
		return !!this.major;
	}
	getDescription() {	
		let studentDescription = super.getDescription();

		if (this.hasMajor()) {
			studentDescription = studentDescription + ` and he is ${this.major} Developer.`
		}

			return studentDescription;
	}
}

//Challenge
class Traveler extends Student {
	constructor(name, age, major, homeLocation) {
		super(name, age, major);
		this.homeLocation = homeLocation;
	}
	hasHomeLocation() {
		return !!this.homeLocation;
	}
	getGretting() {
		let travellerGretting = super.getGretting();

		if (this.hasHomeLocation()) {
			travellerGretting = travellerGretting + ` I come from ${this.homeLocation}.`
		} 

		return travellerGretting;
	}
}

const me = new Student('Dariusz', 20, 'Front End');
console.log(me.getDescription());
//console.log(me.getDescription());
//const other = new Student();
//console.log(other);

const challenge = new Traveler('John', 30, 'PHP', 'London');
console.log(challenge.getGretting());




const appRoot = document.getElementById('app');

const render = () => {

	const template = (
			<h1>Please check the console.</h1>		
	);

	ReactDOM.render(template, appRoot); 
}

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