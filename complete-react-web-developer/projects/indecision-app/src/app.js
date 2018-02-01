class IndecisionApp extends React.Component {

	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleLogArray = this.handleLogArray.bind(this);
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
		
		console.log(randomNum);
		console.log(option);
	}

	handleLogArray () {
		const optionsArray = this.state.options;
		console.log(optionsArray);
	}

	render() {
		const pageTitle = 'Temp title';
		const pageSubtitle = 'Temp subtitle';

		return (
			<div>
				<Header title={pageTitle} subtitle={pageSubtitle}/>
				<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
				<Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
				<AddOption />
				<LogArray handleLogArray={this.handleLogArray}/>
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
			console.log(option);
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

class LogArray extends React.Component {
	render() {
		return (
					<button onClick={this.props.handleLogArray}>Console Log array</button>
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

/*
Zaczynamy od zdefiniowania stanu options komponentu IndecisionApp przypisujac mu tablice z trzema wartosciami.
this.state = {
			options: ['Option 1', 'Option 2', 'Option 3']
		};

Deklarujemy wlasciwosc options w komponencie IndecisionApp podczas 
renderowania zagniezdzonego komponentu <Options />
<Options options={this.state.options} />

Zwracamy elementy tabliy stanu options w komponencie Options
{
	this.props.options.map(function(optionFromArray){
		return (<p key={optionFromArray}>{optionFromArray}</p>);
	})
}




*/