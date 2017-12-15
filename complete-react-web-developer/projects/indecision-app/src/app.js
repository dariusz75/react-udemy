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

const jsx = (
	<div>
		<Header />
		<Action />
		<Options />
		<AddOption />
	</div>
	);

const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);