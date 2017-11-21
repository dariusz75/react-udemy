// Template created as JSX - JavaScript XML
var template = (
	<div>
		<h1>This is JSX!</h1>
		<p>This is some info</p>
	</div>
);


// Template created as JSX expression
var user = {
	name: 'Mike',
	age: 27,
	location: 'New York'
}

var templateTwo = (
	<div>
		<h1>{user.name}</h1>
		<p>Age: {user.age}</p>
		<p>Location: {user.location}</p>
	</div>
);

var appRoot = document.getElementById('app');


ReactDOM.render(templateTwo, appRoot);