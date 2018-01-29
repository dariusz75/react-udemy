
class IndecisionApp extends React.Component {
	render() {
		const siteTitle = 'Events and Methods';
		const siteSubtitle = 'Please check the console.';
		const options = ['Option 1', 'Option 2', 'Option 3'];

		return (
			<div>
				<Header title={siteTitle} subtitle={siteSubtitle}/>
				<Action />
				<Options  options={options}/>
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
	
	handlePick() {
		console.log('Task!');
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

	handleRemoveAll() {
		console.log('Remove all!');
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<h3>Options component here - {this.props.options.length} options avaliable.</h3>
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
		} else {
			console.log('Please enter a value');
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