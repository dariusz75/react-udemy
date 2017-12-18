
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
	
	handlePick() {
		console.log('Done!');
	}

	render() {
		return (
			<div>
				<button onClick={this.handlePick}>Tasks to do</button>
			</div>
		);
	}
}


class Options extends React.Component {
	constructor(props) {
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
	}

	handleRemoveAll() {
		console.log(this.props.options);
	}

	render() {
		return (
			<div>
				{
					this.props.options.map(function(optionFromArray){
						return (<p key={optionFromArray}>{optionFromArray}</p>);
					})
				}
				<button onClick={this.handleRemoveAll}>Romove All</button>
			</div>
		);
	}
}


class AddOption extends React.Component {

	handleAddOption(e) {
		e.preventDefault();

		const option = e.target.elements.option.value.trim();

		if (option) {
			console.log('option!');
		}
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option"/>
					<button>Add Option</button>
				</form>
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