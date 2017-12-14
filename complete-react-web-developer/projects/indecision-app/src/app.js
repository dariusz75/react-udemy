console.log('application is running');

let visible = false;

const onToggleButton = () => {
	visible = !visible;
	render();
};



const appRoot = document.getElementById('app');

const render = () => {

	const template = (
		<div>
			<h1>Info Toggle</h1>
			<button onClick={onToggleButton}>{visible ? 'Hide Info' : 'Show Info'}</button>
			{visible && (<p>This is info text</p>)}
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