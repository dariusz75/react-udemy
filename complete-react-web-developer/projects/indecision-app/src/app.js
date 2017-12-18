
class VisibilityToggle extends React.Component {

	constructor(props) {
		super(props);
		this.handleVisibilityTogle = this.handleVisibilityTogle.bind(this);
		this.state = {
			visibility: false
		};
	}

	handleVisibilityTogle() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			};
		});
		
	}	

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleVisibilityTogle}>{this.state.visibility ? 'Hide Info' : 'Show Info'}</button>
				{this.state.visibility && ( <h2>Info panel placed</h2> )}
			</div>
			);
	}
}


const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, appRoot);

