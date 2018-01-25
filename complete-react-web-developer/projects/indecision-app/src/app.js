
class IndecisionApp extends React.Component {
	render() {
		const title = 'Header title from props';
		const subtitle = 'Header subtitle from props';
		const options = ['Option 1', 'Option 2', 'Option 3'];
		const optionsB = ['OptionB 1', 'OptionB 2', 'OptionB 3'];

		return (
			<div>
				<Header title={title} subtitle={subtitle}/>
				<Action />
				<Options  options={options}/>
				<AddOption optionsB={optionsB}/>
			</div>
		);
	} 
}

class Header extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<h1>Header Component</h1>
				<p>{this.props.title}</p>
				<p>{this.props.subtitle}</p>
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
		console.log(this.props);
		return (
			<div>
				<h3>Options component here - {this.props.options.length} options avaliable.</h3>
				{
					this.props.options.map(function(optionFromArray){
						return (
							<p key={optionFromArray}>{optionFromArray}</p>
						);
					})
				}
				
			</div>
		);
	}
}



class AddOption extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<h3>Add Option component here</h3>
				<p>{this.props.optionsB}</p>
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