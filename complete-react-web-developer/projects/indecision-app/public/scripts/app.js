'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component1 = function (_React$Component) {
	_inherits(Component1, _React$Component);

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
					'h1',
					null,
					'Component 1'
				),
				React.createElement(
					'h3',
					null,
					this.props.subtitle1
				)
			);
		}
	}]);

	return Component1;
}(React.Component);

var Component2 = function (_React$Component2) {
	_inherits(Component2, _React$Component2);

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
					'h1',
					null,
					'Component 2'
				),
				React.createElement(
					'h3',
					null,
					this.props.subtitle2
				)
			);
		}
	}]);

	return Component2;
}(React.Component);

var Component3 = function (_React$Component3) {
	_inherits(Component3, _React$Component3);

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
					'h1',
					null,
					'Component 3'
				),
				React.createElement(
					'h3',
					null,
					'Hello ',
					this.props.personName,
					'!'
				)
			);
		}
	}]);

	return Component3;
}(React.Component);

var IndecisionApp = function (_React$Component4) {
	_inherits(IndecisionApp, _React$Component4);

	function IndecisionApp() {
		_classCallCheck(this, IndecisionApp);

		return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
	}

	_createClass(IndecisionApp, [{
		key: 'render',
		value: function render() {
			var subtitle2 = 'Subtitle 2';
			var name = 'Mark';

			return React.createElement(
				'div',
				null,
				React.createElement(Component1, { subtitle1: 'Subtitle 1' }),
				React.createElement(Component2, { subtitle2: subtitle2 }),
				React.createElement(Component3, { personName: name })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);

/*
Właściwości (props) są używane do przekazywania dodatkowych danych do komponentów.
Właściwości są definiowane jako atrybuty elementów HTML.

*/
