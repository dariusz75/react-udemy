console.log('application is running');


const app = {
	title: 'Toggle Button',
	options: ['Show info', 'Hide Info'],
	infoText: ['This is an info text'],
	infoDiv: []
};


const placeInfo = () => {
	if(app.infoDiv.length === 0) {
		app.infoDiv.push(app.infoText[0]);
		console.log(app.infoDiv);
	} else {
		app.infoDiv = [];
	}
	render();
}



const appRoot = document.getElementById('app');


const render = () => {

	const template = (
		<div>
			<h1>{app.title}</h1>
			<button onClick={placeInfo}>{app.infoDiv.length > 0 ? 'Hide Info' : 'Show Info'}</button>
			<p>{app.infoDiv}</p>
		</div>
	);

	ReactDOM.render(template, appRoot); 
}

render();



/* 
Zadaniem tego cwiczenia jest:

1. Wyswietlenie lub schowanie tekstu po nacisnieciu przycisku.
2. Zmiana tekstu przycisku w zaleznosci od stanu wyswietlanej informacji.

*/