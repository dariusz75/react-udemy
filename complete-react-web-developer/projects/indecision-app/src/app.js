class Component1 extends React.Component {
	render() {
		return (
			<div>
				<h1>Component 1</h1>
				<h3>{this.props.subtitle1}</h3>
			</div>
		);
	} 
}


class Component2 extends React.Component {
	render() {
		return (
			<div>
				<h1>Component 2</h1>
				<h3>{this.props.subtitle2}</h3>
			</div>
		);
	}
}


class Component3 extends React.Component {
	render() {
		return (
			<div>
				<h1>Component 3</h1>
				<h3>Hello {this.props.personName}!</h3>
			</div>
		);
	}
}


class IndecisionApp extends React.Component {
	render() {
		let subtitle2 = 'Subtitle 2';
		let name = 'Mark'

		return (
			<div>
				<Component1 subtitle1='Subtitle 1'/>
				<Component2 subtitle2={subtitle2}/>
				<Component3 personName={name}/>
			</div>
		);
	} 
}

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);

/*
Właściwości (props) są używane do przekazywania dodatkowych danych do komponentów.
Właściwości są definiowane jako atrybuty elementów HTML.

*/