'use strict';

console.log('application is running');

var app = {
	title: 'Toggle Button',
	options: []
};

var onToggleButton = function onToggleButton() {
	console.log('test');
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
			{ disabled: false, onClick: onToggleButton },
			'Show info'
		)
	);

	ReactDOM.render(template, appRoot);
};

render();

/* 
Zadaniem tego cwiczenia jest 

*/
