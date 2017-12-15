
class IndecisionApp extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Action />
				<Options />
				<AddOption />
			</div>
		);
	} 
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>Title</h1>
				<h2>Subtitle...</h2>
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
				<h3>Options component here</h3>
				<Option />
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
				<h3>Option component here</h3>
			</div>
		);
	}
}




const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);