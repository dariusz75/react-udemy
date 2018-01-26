
class IndecisionApp extends React.Component {
	render() {
		let actionTitle = 'Action Title from variable';

		return (
			<div>
				<Header title1='Header Title'/>
				<Action title2={actionTitle}/>
			</div>
		);
	} 
}


class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>Header Component</h1>
				<h3>{this.props.title1}</h3>
			</div>
		);
	} 
}


class Action extends React.Component {
	render() {
		return (
			<div>
				<h1>Action Component</h1>
				<h3>{this.props.title2}</h3>
			</div>
		);
	}
}



const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);