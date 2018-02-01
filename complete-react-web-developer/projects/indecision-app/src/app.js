
/*
W tym cwiczeniu wyrenderujemy wiadomosc na ekran oraz zbudujemy przycisk ze zmiennym tekstem, w zaleznosci od stanu wyswietlanej wiadomosci
*/

class VisibilityToggle extends React.Component {

	constructor(props) {
		super(props);
		this.handleVisibilityTogle = this.handleVisibilityTogle.bind(this);
		this.state = {
			visibility: false
		};
	}

	handleVisibilityTogle() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			};
		});
		
	}	

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleVisibilityTogle}>{this.state.visibility ? 'Hide Info' : 'Show Info'}</button>
				{this.state.visibility && ( <h2>Info panel placed</h2> )}
			</div>
			);
	}
}


const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, appRoot);

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