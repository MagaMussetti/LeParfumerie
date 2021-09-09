// import logo from './logo.svg';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import Counter from './Components/Counter/Counter';

function App() {
    return (
        <div className="App">
            <header>
                <NavBar />
            </header>
            <ItemListContainer greeting="Bienvenidos a nuestro catalogo" />
            <Counter inicial={0} max={5} />
        </div>
    );
}

export default App;
