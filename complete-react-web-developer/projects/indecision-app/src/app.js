console.log('application is running');


const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in your hands',
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;
	let keyValue = 0;
	;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		keyValue = keyValue +1;
		render();
	}
	console.log(app.options);
}

const onRemoveAll = () => {
	app.options = [];
	console.log(app.options);
	render();
}


const appRoot = document.getElementById('app');


const render = () => {

	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Your options' : 'No options'}</p>
			<p>{app.options.length}</p>
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				{
					app.options.map(function(option){
						return (<li key={option}>{option}</li>);
					})
				}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot); 
}

render();

