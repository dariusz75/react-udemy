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


const me = new Person('Dariusz', 20);
console.log(me.getGretting());
console.log(me.getDescription());
const other = new Person();
console.log(other.getDescription());






const appRoot = document.getElementById('app');

const render = () => {

	const template = (
			<h1>Please check the console.</h1>		
	);

	ReactDOM.render(template, appRoot); 
}

render();


