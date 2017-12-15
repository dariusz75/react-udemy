
class IndecisionApp extends React.Component {
	render() {
		const title = 'Temp title';
		const subtitle = 'Temp subtitle';
		const options = ['Option 1', 'Option 2', 'Option 3'];

		return (
			<div>
				<Header title={title} subtitle={subtitle}/>
				<Action />
				<Options  options={options}/>
				<AddOption />
			</div>
		);
	} 
}

class Header extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	} 
}

class Action extends React.Component {
	render() {
		return (
			<div>
				<button>Tasks to do</button>
			</div>
		);
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				<h3>Options component here{this.props.options.length}</h3>
				{
					this.props.options.map(function(optionFromArray){
						return (<p key={optionFromArray}>{optionFromArray}</p>);
					})
				}
				
			</div>
		);
	}
}



class AddOption extends React.Component {
	render() {
		return (
			<div>
				<h3>Add Option component here</h3>
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				<h3>Option component here...</h3>
			</div>
		);
	}
}




const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);