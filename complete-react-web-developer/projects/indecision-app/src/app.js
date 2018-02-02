class IndecisionApp extends React.Component {

	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleLogArray = this.handleLogArray.bind(this);
		this.state = {
			options: [],
			pageTitle: 'Header 2',
			pageSubtitle: 'Text from state'
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

handleAddOption(option) {
		this.setState((prevState) => {
			return {
				options: prevState.options.concat([option])
			};
		});
	}


	handleLogArray () {
		const optionsArray = this.state.options;

		console.log(optionsArray);
	}

	render() {
		const pageTitle = 'Header 1';
		const pageSubtitle = 'Text from props';

		return (
			<div>
				<Header title={pageTitle} subtitle={pageSubtitle}/>
				<Header title={this.state.pageTitle} subtitle={this.state.pageSubtitle}/>
				<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
				<Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
				<AddOption handleAddOption={this.handleAddOption}/>
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
				<h3>{this.props.subtitle}</h3>
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
				<h3>Options component</h3> 
				<h4>Avaliable options: {this.props.options.length}</h4>
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
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
	}

	handleAddOption(e) {
		e.preventDefault();

		const option = e.target.elements.option.value.trim();

		if (option) {
			this.props.handleAddOption(option);
		} else {
			console.log('no option');
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

