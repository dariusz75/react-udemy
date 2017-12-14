'use strict';

console.log('application is running');

var visible = false;

var onToggleButton = function onToggleButton() {
	visible = !visible;
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
			'Info Toggle'
		),
		React.createElement(
			'button',
			{ onClick: onToggleButton },
			visible ? 'Hide Info' : 'Show Info'
		),
		visible && React.createElement(
			'p',
			null,
			'This is info text'
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
