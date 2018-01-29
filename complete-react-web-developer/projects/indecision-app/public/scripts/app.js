'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp() {
		_classCallCheck(this, IndecisionApp);

		return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
	}

	_createClass(IndecisionApp, [{
		key: 'render',
		value: function render() {

			var candidateFirstName = 'George';
			var candidatesurname = 'Smith';
			var testResult = 'passed';
			var opionsList = ['Option 1', 'Option 2', 'Option 3'];
			var liElement = opionsList.map(function (option) {
				return React.createElement(
					'li',
					{ key: option },
					option
				);
			});

			return React.createElement(
				'div',
				null,
				React.createElement(Component1, { firstName: candidateFirstName }),
				React.createElement(Component2, { surname: candidatesurname }),
				React.createElement(Component3, { status: 'Student' }),
				React.createElement(TestComponent, { test: testResult }),
				React.createElement(FinalMessage, { firstName: candidateFirstName, surname: candidatesurname, status: 'Student', test: testResult }),
				React.createElement(Options, { liElement: liElement })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

var Component1 = function (_React$Component2) {
	_inherits(Component1, _React$Component2);

	function Component1() {
		_classCallCheck(this, Component1);

		return _possibleConstructorReturn(this, (Component1.__proto__ || Object.getPrototypeOf(Component1)).apply(this, arguments));
	}

	_createClass(Component1, [{
		key: 'render',
		value: function render() {

			return React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					null,
					'First Name: ',
					this.props.firstName
				),
				React.createElement(
					'h3',
					null,
					this.props.test
				)
			);
		}
	}]);

	return Component1;
}(React.Component);

var Component2 = function (_React$Component3) {
	_inherits(Component2, _React$Component3);

	function Component2() {
		_classCallCheck(this, Component2);

		return _possibleConstructorReturn(this, (Component2.__proto__ || Object.getPrototypeOf(Component2)).apply(this, arguments));
	}

	_createClass(Component2, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					null,
					'Surname: ',
					this.props.surname
				)
			);
		}
	}]);

	return Component2;
}(React.Component);

var Component3 = function (_React$Component4) {
	_inherits(Component3, _React$Component4);

	function Component3() {
		_classCallCheck(this, Component3);

		return _possibleConstructorReturn(this, (Component3.__proto__ || Object.getPrototypeOf(Component3)).apply(this, arguments));
	}

	_createClass(Component3, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					null,
					'Status: ',
					this.props.status
				)
			);
		}
	}]);

	return Component3;
}(React.Component);

var TestComponent = function (_React$Component5) {
	_inherits(TestComponent, _React$Component5);

	function TestComponent() {
		_classCallCheck(this, TestComponent);

		return _possibleConstructorReturn(this, (TestComponent.__proto__ || Object.getPrototypeOf(TestComponent)).apply(this, arguments));
	}

	_createClass(TestComponent, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'h2',
				null,
				'Test result: ',
				this.props.test
			);
		}
	}]);

	return TestComponent;
}(React.Component);

var FinalMessage = function (_React$Component6) {
	_inherits(FinalMessage, _React$Component6);

	function FinalMessage() {
		_classCallCheck(this, FinalMessage);

		return _possibleConstructorReturn(this, (FinalMessage.__proto__ || Object.getPrototypeOf(FinalMessage)).apply(this, arguments));
	}

	_createClass(FinalMessage, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'p',
				null,
				this.props.status,
				' ',
				this.props.firstName,
				' ',
				this.props.surname,
				' ',
				this.props.test,
				' the exam.\''
			);
		}
	}]);

	return FinalMessage;
}(React.Component);

var Options = function (_React$Component7) {
	_inherits(Options, _React$Component7);

	function Options() {
		_classCallCheck(this, Options);

		return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
	}

	_createClass(Options, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'ol',
				null,
				this.props.liElement
			);
		}
	}]);

	return Options;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);

/*
Właściwości (props) są używane do przekazywania danych do komponentów.
Właściwości są definiowane jako atrybuty elementów HTML.

*/
