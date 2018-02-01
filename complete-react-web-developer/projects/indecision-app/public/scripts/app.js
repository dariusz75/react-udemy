'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
W tym cwiczeniu wyrenderujemy wiadomosc na ekran oraz zbudujemy przycisk ze zmiennym tekstem, w zaleznosci od stanu wyswietlanej wiadomosci
*/

var VisibilityToggle = function (_React$Component) {
	_inherits(VisibilityToggle, _React$Component);

	function VisibilityToggle(props) {
		_classCallCheck(this, VisibilityToggle);

		var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

		_this.handleVisibilityTogle = _this.handleVisibilityTogle.bind(_this);
		_this.state = {
			visibility: false
		};
		return _this;
	}

	_createClass(VisibilityToggle, [{
		key: 'handleVisibilityTogle',
		value: function handleVisibilityTogle() {
			this.setState(function (prevState) {
				return {
					visibility: !prevState.visibility
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Visibility Toggle'
				),
				React.createElement(
					'button',
					{ onClick: this.handleVisibilityTogle },
					this.state.visibility ? 'Hide Info' : 'Show Info'
				),
				this.state.visibility && React.createElement(
					'h2',
					null,
					'Info panel placed'
				)
			);
		}
	}]);

	return VisibilityToggle;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(VisibilityToggle, null), appRoot);

/*
Zaczynamy od zadeklarowania metody, ktora nazwiemy handleVisibilityTogle.

Nastepnie utworzymy konstruktor za pomoca ktorego bedziemy mieli dostep do wlasciwosci obiektu props 
i bedziemy mogli nimi manipulowac.
W naszym przypadku interesuje nas manipulowanie stanem, czyli interesuje nas dostep do wlasciwosci state 
obiektu props.

Nastepnie wlasciwosci state przypisujemy obiekt, ktorym w naszym przypadku jest 
state = {
			visibility: false
		};

visibility: false - odpowiada za stan domyslny komponentu wyswietlajacego informacje na ekranie.


Za wyswietlenie odpowiedniego tekstu w przycisku, odpowiada ponizszy kod:
<button onClick={this.handleVisibilityTogle}>{this.state.visibility ? 'Hide Info' : 'Show Info'}</button>

Gdzie:
{this.state.visibility ? 'Hide Info' : 'Show Info'} - odpowiada za logike wyswietlania 

Natomiast:
onClick={this.handleVisibilityTogle} - odpowiada za wywolanie zdarzenia renderowania komponentu z tekstem, przez zmiane jego stanu.

Za zmiane stanu odpowiada funkcja
handleVisibilityTogle() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			};
		});


Aby calosc zadzialala, musimy wykonac ostatni krok.
this.handleVisibilityTogle = this.handleVisibilityTogle.bind(this);


*/
