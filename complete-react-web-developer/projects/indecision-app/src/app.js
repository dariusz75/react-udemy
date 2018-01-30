class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	handleAddOne() {
		console.log('Add 1');
	}

	handleMinusOne() {
		console.log('Minus 1');
	}

	handleReset() {
		console.log('Reset');
	}


	render() {
		return (
			<div>
				<h1>Count: </h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>Reset</button>
			</div>
		);
	}
}




const appRoot = document.getElementById('app');
ReactDOM.render(<Counter />, appRoot);