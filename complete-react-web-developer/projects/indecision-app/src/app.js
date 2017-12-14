console.log('application is running');


const app = {
	title: 'Toggle Button',
	options: []
};


const onToggleButton = () => {
	console.log('test');
	render();
}


const appRoot = document.getElementById('app');


const render = () => {

	const template = (
		<div>
			<h1>{app.title}</h1>
			<button disabled={false} onClick={onToggleButton}>Show info</button>
		</div>
	);

	ReactDOM.render(template, appRoot); 
}

render();



/* 
Zadaniem tego cwiczenia jest 

*/