'use strict';

// Template created as JSX - JavaScript XML
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'This is JSX!'
	),
	React.createElement(
		'p',
		null,
		'This is some info'
	)
);

// Template created as JSX expression
var user = {
	name: 'Mike',
	age: 27,
	location: 'New York'
};

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name
	),
	React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		user.location
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
