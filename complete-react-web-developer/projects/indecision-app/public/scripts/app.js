'use strict';

var template = React.createElement(
                    'div',
                    null,
                    React.createElement(
                                        'p',
                                        null,
                                        'Hello World!'
                    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
