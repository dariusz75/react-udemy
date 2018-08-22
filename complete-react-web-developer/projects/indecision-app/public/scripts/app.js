'use strict';

var user = {
  name: 'Mike',
  age: 28,
  location: 'New York'
};

function getLocationOne(location) {
  if (location) {
    return location;
  } else {
    return 'Unknown';
  }
}

function getLocationTwo(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var templateOne = React.createElement(
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
    getLocationOne(user.location)
  )
);

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
  getLocationTwo(user.location)
);

var templateThree = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  user.age > 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocationTwo(user.location)
);

var templateFour = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Persona non grata'
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age ? user.age : 'Unnown'
  ),
  getLocationTwo(user.location)
);

var templateFive = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Persona non grata'
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age && user.age >= 18 ? user.age : 'Under 18'
  ),
  getLocationTwo(user.location)
);

var challengeData = {
  title: 'Challenger',
  subtitle: 'Challenge accepted!',
  options: ['Challenge One', 'Challenge Two']
};

var challengeTemplate = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    challengeData.title
  ),
  challengeData.subtitle && React.createElement(
    'p',
    null,
    challengeData.subtitle
  ),
  React.createElement(
    'p',
    null,
    challengeData.options.length > 0 ? 'Here are your options' : 'No options'
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(challengeTemplate, appRoot);
