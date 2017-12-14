'use strict';

console.log('application is running');

var app = {
	title: 'Form Example',
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();

	var option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
	console.log(app.options);
};

var onRemoveAll = function onRemoveAll() {
	app.options = [];
	console.log(app.options);
	render();
};

var appRoot = document.getElementById('app');

var render = function render() {

	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		React.createElement(
			'p',
			null,
			app.options.length > 0 ? 'Number of elements entered:' : 'No elements in array'
		),
		React.createElement(
			'p',
			null,
			app.options.length
		),
		React.createElement(
			'button',
			{ onClick: onRemoveAll },
			'Remove All'
		),
		React.createElement(
			'ol',
			null,
			React.createElement(
				'li',
				null,
				'Item one'
			),
			React.createElement(
				'li',
				null,
				'Item two'
			)
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);

	ReactDOM.render(template, appRoot);
};

render();

/* 
Aby 'ozywic' nasza forme uzyjemy zdarzenia onSubmit i za jego pomoca odwolamy sie do funkcji onFormSubmit.
Nie wywolujemy funkcji a jedynie odwolujemy sie do niej.

e.preventDefault() w funkcji sluzy do zignorowania zachowania domyslnego zdarzenia onSubmit.
Dzieki temu zdarzeniowi mozemy przypisac wlasny kod.

W pierwszej kolejnosci chcemy pobrac dane jezeli jakies zostana wprowadzone przez urzytkownika.
posluzy nam do tego nastepujacy kod:
const option = e.target.elements.option.value;

gdzie:
const option - jest stala przechowujaca wartosc podana przez urzytkownika

e.target - odnosi sie do elementu na ktorym nasze zdzrzenie rozpoczyna dzialanie (w naszym przypadku element form)

e.target.elements - odpowiada za dostep do wszystkich elementow formy posiadajacych wlasciwosc 'name'

e.target.elements.option - odwolanie do elementu formy z atrybutem name="option" (w naszym przypadku jest to okno input)

const option = e.target.elements.option.value - pobranie wartosci z okna input i przypisanie jej do stalej option

--------------------------------------------------------------------------------------------------------------------------------

Nastepnie w naszej funkcji onFormSubmit deklarujemy if statement.

if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
	console.log(app.options);
}

Gdzie:
if(option) - jezeli zostala wprowadzona  wartosc 

app.options.push(option) - dodajemy ja do tablicy options znajdujacej sie w obiekcie app

e.target.elements.option.value = '' - usuwamy wartosc z okna input po wprowadzeniu jej do tablicy

render() - odpowiada za ponowne renderowanie strony

*/
