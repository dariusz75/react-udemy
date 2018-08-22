
var user = {
  name: 'Mike',
  age: 28,
  location: 'New York'
}

function getLocationOne(location) {
  if (location) {
    return location;
  } else {
    return 'Unknown';
  }
}

function getLocationTwo(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}


var templateOne = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocationOne(user.location)}</p>
  </div>
);


var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    {getLocationTwo(user.location)}
  </div>
);


var templateThree = (
  <div>
    <h1>{user.name}</h1>
    {user.age > 18 && <p>Age: {user.age}</p>}
    {getLocationTwo(user.location)}
  </div>
);


var templateFour = (
  <div>
    <h1>{user.name ? user.name : 'Persona non grata'}</h1>
    <p>Age: {user.age ? user.age : 'Unnown'}</p>
    {getLocationTwo(user.location)}
  </div>
);


var templateFive = (
  <div>
    <h1>{user.name ? user.name : 'Persona non grata'}</h1>
    <p>Age: {user.age && user.age >= 18 ? user.age : 'Under 18'}</p>
    {getLocationTwo(user.location)}
  </div>
);




var challengeData = {
  title: 'Challenger',
  subtitle: 'Challenge accepted!',
  options: ['Challenge One', 'Challenge Two']
};

var challengeTemplate = (
  <div>
    <h1>{challengeData.title}</h1>
    {challengeData.subtitle && <p>{challengeData.subtitle}</p>}
    <p>{challengeData.options.length > 0 ? 'Here are your options' : 'No options'}</p>
  </div>
);




var appRoot = document.getElementById('app');
ReactDOM.render(challengeTemplate, appRoot);