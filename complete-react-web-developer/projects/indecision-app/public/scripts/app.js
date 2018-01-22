'use strict';

console.log('application is running');

var app = {
	title: 'Toggle Button',
	options: ['Show info', 'Hide Info'],
	infoText: ['This is an info text'],
	infoDiv: []
};

var placeInfo = function placeInfo() {
	if (app.infoDiv.length === 0) {
		app.infoDiv.push(app.infoText[0]);
		console.log(app.infoDiv);
	} else {
		app.infoDiv = [];
	}
	render();
};

var appRoot = document.getElementById('app');

var render = function render() {

	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		React.createElement(
			'button',
			{ onClick: placeInfo },
			app.infoDiv.length > 0 ? 'Hide Info' : 'Show Info'
		),
		React.createElement(
			'p',
			null,
			app.infoDiv
		)
	);

	ReactDOM.render(template, appRoot);
};

render();

/* 
Zadaniem tego cwiczenia jest:

1. Wyswietlenie lub schowanie tekstu po nacisnieciu przycisku.
2. Zmiana tekstu przycisku w zaleznosci od stanu wyswietlanej informacji.

*/
