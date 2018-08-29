console.log('application is running');


const app = {
	title: 'Indecision App',
	options: [],
	option: ''
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;
	let keyValue = 0;
	;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		keyValue = keyValue + 1;
		render();
	}
	console.log(app.options);
}

const onMakeDecision = () => {
	const rand = Math.floor(Math.random() * app.options.length);
	const option = app.options[rand];
	app.option = option;
	console.log(option);
	render();
}

const onRemoveAll = () => {
	app.options = [];
	app.option = '';
	console.log(app.options);
	render();
}

const appRoot = document.getElementById('app');

const render = () => {

	const template = (
		<div>
			<h1>{app.title}</h1>
			<p>{app.options.length > 0 ? 'Your options' : 'No options'}</p>
			<p>{app.options.length}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				{
					app.options.map(function (option) {
						return (<li key={option}>{option}</li>);
					})
				}
			</ol>
			<p>I should do: {app.option}</p>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
}

render();



/* 
Zadaniem tego cwiczenia jest wyswietlenie listy wartosci tablicy jako zbior elementow <ul>
Wykonamy to za pomoca wbudowanej metody map()

Nasz kod wygladal bedzie nastepujaco:
<ol>
	{
		app.options.map(function(option){
			return (<li key={option}>{option}</li>);
		})
	}
</ol>

Gdzie:
app.options.map - metoda map zostaje uruchomiona na tablicy options, ktora znajduje sie w obiekcie app.

Metoda map() itteruje przez tablice i zwraca nowa tablice z tymi samymi wartosciami lub z wartosciami zmodyfikowanymi w podany przez nas sposob.
Sposob modyfikacji okreslamy w funkcji ktora jest parametrem metody map()
W naszym przypadku jest to:

function(option){
	return (<li key={option}>{option}</li>);
}

Gdzie:
parametr 'option' to dowolna nazwa do ktorej przypiszemy wartosc elementu tablicy.

Jak widzimy w powyzszymm przykladzie, funkcja zwraca element <li> posiadajacy wartosc elementu tablicy.
Chcac zapetlic dzialane funkcji i zwrot wszystkich wartosci tablicy, musimy okreslic atrybut 'key' z unikalna wartoscia.
Jest to wewnetrzny wymog Reacta.
W naszym przykladzie przypisujemy wartosc elementu tablicy. 
To rozwiazanie nie jest wlasciwe poniewaz tablica moze zawierac elementy o takich samych wartosciach.
Do naszego cwiczenia, jednak, wystarczy.





##################### objasnienia poprzedniego cwiczenia #########################

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