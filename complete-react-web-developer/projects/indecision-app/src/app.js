
class VisibilityToggle extends React.Component {

	constructor(props) {
		super(props);
		this.handleVisibilityTogle = this.handleVisibilityTogle.bind(this);
		this.state = {
			buttonText: 'Show Info',
			info: 0
		};
	}

	handleVisibilityTogle() {
		if (this.state.buttonText === 'Show Info') {
			this.setState(() => {
			return {
				buttonText: 'Hide Info',
				info: 1
			};
		});
		} else {
			this.setState(() => {
			return {
				buttonText: 'Show Info',
				info: 0
			};
		});
		}
		
	}	

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleVisibilityTogle}>{this.state.buttonText}</button>
				<h2 >{this.state.info === 0 ? '': 'Info panel placed' }</h2>
			</div>
			);
	}
}


const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, appRoot);

