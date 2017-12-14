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
			return `${this.name} is ${this.age} years old.`;
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
}


class Traveler extends Person {
	constructor(name, age, homeLocaton) {
		super(name, age);
		this.homeLocaton = homeLocaton;
	}
	getGretting() {
		
	}
}

const me = new Student('Dariusz', 20, 'Front End');
console.log(me);
console.log(me.getDescription());
const other = new Student();
//console.log(other);






const appRoot = document.getElementById('app');

const render = () => {

	const template = (
			<h1>Please check the console.</h1>		
	);

	ReactDOM.render(template, appRoot); 
}

render();


