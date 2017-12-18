class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0
		};
	}

	handleAddOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}

	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			};
		});
	}

	handleReset() {
		this.setState(() => {
			return {
				count: 0
			};
		});
	}


	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>Reset</button>
			</div>
		);
	}
}



const appRoot = document.getElementById('app');
ReactDOM.render(<Counter />, appRoot);



/*
this.state - odpowiada za stan komponentu.

Ponizej ustawiamy stan wlasciwosci count = 0. Jest to nasze ustawienie domyslne stanu komponentu.
this.state = {
			count: 0
		};    
Referujemy do niego za pomoca ponizszego kodu:
<h1>Count: {this.state.count}</h1>

Chcac zmienic wartosc renderowana przez komponent na ekranie, musimy zmienic stan komponentu.
Niestety nie wystarczy jedynie zmiana wartosci wlasciwosci count.
Musimy posluzyc sie metoda setState()
W naszym przypadku wyglada ona nastepujaco:

this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});

Gdzie:
setState() podiera argument prevState ktory pochodzi ze specyfikacji Reacta i jak nazwa wskazuje, odpowiada za posiadanie poprzedniego stanu komponentu
Nastepnie funkcja zwraca poprzednia wartosc wlasciwosci count powiekszona o 1



		
*/