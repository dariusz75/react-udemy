'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
		_this.handlePick = _this.handlePick.bind(_this);
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.handleLogArray = _this.handleLogArray.bind(_this);
		_this.state = {
			options: [],
			pageTitle: 'Header 2',
			pageSubtitle: 'Text from state'
		};
		return _this;
	}

	_createClass(IndecisionApp, [{
		key: 'handleDeleteOptions',
		value: function handleDeleteOptions() {
			this.setState(function () {
				return {
					options: []
				};
			});
		}
	}, {
		key: 'handlePick',
		value: function handlePick() {
			var randomNum = Math.floor(Math.random() * this.state.options.length);
			var option = this.state.options[randomNum];

			console.log(randomNum);
			console.log(option);
		}
	}, {
		key: 'handleAddOption',
		value: function handleAddOption(option) {
			this.setState(function (prevState) {
				return {
					options: prevState.options.concat([option])
				};
			});
		}
	}, {
		key: 'handleLogArray',
		value: function handleLogArray() {
			var optionsArray = this.state.options;

			console.log(optionsArray);
		}
	}, {
		key: 'render',
		value: function render() {
			var pageTitle = 'Header 1';
			var pageSubtitle = 'Text from props';

			return React.createElement(
				'div',
				null,
				React.createElement(Header, { title: pageTitle, subtitle: pageSubtitle }),
				React.createElement(Header, { title: this.state.pageTitle, subtitle: this.state.pageSubtitle }),
				React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
				React.createElement(Options, { options: this.state.options, handleDeleteOptions: this.handleDeleteOptions }),
				React.createElement(AddOption, { handleAddOption: this.handleAddOption }),
				React.createElement(LogArray, { handleLogArray: this.handleLogArray })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			props.title
		),
		React.createElement(
			'h3',
			null,
			props.subtitle
		)
	);
};

var Action = function Action(props) {

	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: props.handlePick, disabled: !props.hasOptions },
			'Tasks to do'
		)
	);
};

var Options = function Options(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h3',
			null,
			'Options component'
		),
		React.createElement(
			'h4',
			null,
			'Avaliable options: ',
			props.options.length
		),
		props.options.map(function (optionFromArray) {
			return React.createElement(
				'p',
				{ key: optionFromArray },
				optionFromArray
			);
		}),
		React.createElement(
			'button',
			{ onClick: props.handleDeleteOptions },
			'Romove All'
		)
	);
};

var AddOption = function (_React$Component2) {
	_inherits(AddOption, _React$Component2);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this2.handleAddOption = _this2.handleAddOption.bind(_this2);
		return _this2;
	}

	_createClass(AddOption, [{
		key: 'handleAddOption',
		value: function handleAddOption(e) {
			e.preventDefault();

			var option = e.target.elements.option.value.trim();

			if (option) {
				this.props.handleAddOption(option);
			} else {
				console.log('no option');
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'form',
					{ onSubmit: this.handleAddOption },
					React.createElement('input', { type: 'text', name: 'option' }),
					React.createElement(
						'button',
						null,
						'Add Option'
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

var LogArray = function (_React$Component3) {
	_inherits(LogArray, _React$Component3);

	function LogArray() {
		_classCallCheck(this, LogArray);

		return _possibleConstructorReturn(this, (LogArray.__proto__ || Object.getPrototypeOf(LogArray)).apply(this, arguments));
	}

	_createClass(LogArray, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'button',
				{ onClick: this.props.handleLogArray },
				'Console Log array'
			);
		}
	}]);

	return LogArray;
}(React.Component);

var Option = function Option(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h3',
			null,
			'Option component here...'
		)
	);
};

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);
