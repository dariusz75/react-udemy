class IndecisionApp extends React.Component {
	render() {
	
		let candidateFirstName = 'George';
		let candidatesurname = 'Smith';
		let testResult = 'passed';

		return (
			<div>
				<Component1 firstName={candidateFirstName}/>
				<Component2 surname={candidatesurname}/>
				<Component3 status={'Student'}/>
				<TestComponent test={testResult}/>
				<FinalMessage firstName={candidateFirstName} surname={candidatesurname} status={'Student'} test={testResult}/>
			</div>
		);
	} 
}


class Component1 extends React.Component {
	render() {
		
		return (
			<div>
				<h2>First Name: {this.props.firstName}</h2>
				<h3>{this.props.test}</h3>
			</div>
		);
	} 
}


class Component2 extends React.Component {
	render() {
		return (
			<div>
				<h2>Surname: {this.props.surname}</h2>
			</div>
		);
	}
}


class Component3 extends React.Component {
	render() {
		return (
			<div>
				<h2>Status: {this.props.status}</h2>
			</div>
		);
	}
}

class TestComponent extends React.Component {
	render() {
		return (
			<h2>Test result: {this.props.test}</h2>
		);
	}
}

class FinalMessage extends React.Component {
	render() {
		return (
			<p>{this.props.status} {this.props.firstName} {this.props.surname} {this.props.test} the exam.'</p>
		);
	}
}


const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);

/*
Właściwości (props) są używane do przekazywania danych do komponentów.
Właściwości są definiowane jako atrybuty elementów HTML.

*/