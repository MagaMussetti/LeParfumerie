// import logo from './logo.svg';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import Counter from './Components/Counter/Counter';
import ItemList from './Components/ItemListContainer/ItemList';

function App() {
    return (
        <div className="App">
            <header>
                <NavBar />
            </header>
            <ItemListContainer greeting="Bienvenidos a nuestro catalogo" />
            <Counter />
            <ItemList />
        </div>
    );
}

export default App;
