class IndecisionApp extends React.Component {

	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.state = {
			options: ['Option 1', 'Option 2', 'Option 3']
		};
	}

	handleDeleteOptions() {
		this.setState(() => {
			return {
				options: []
			};
		});
	}

	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		
		console.log(option);
	}

	render() {
		const title = 'Temp title';
		const subtitle = 'Temp subtitle';

		return (
			<div>
				<Header title={title} subtitle={subtitle}/>
				<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
				<Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
				<AddOption />
			</div>
		);
	} 
}

class Header extends React.Component {
	render() {
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
				<button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>Tasks to do</button>
			</div>
		);
	}
}

class Options extends React.Component {

	render() {
		return (
			<div>
				<h3>Options component here - {this.props.options.length} options avaliable.</h3>
				{
					this.props.options.map(function(optionFromArray){
						return (<p key={optionFromArray}>{optionFromArray}</p>);
					})
				}
				<button onClick={this.props.handleDeleteOptions}>Romove All</button>
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