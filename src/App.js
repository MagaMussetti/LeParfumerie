import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { useState } from 'react';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getCategories } from './products';
import Cart from './Components/Cart/Cart';

const App = () => {
    const [cartProducts, setCartProduct] = useState([]);

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar categories={getCategories()} cartProducts={cartProducts} />
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer />
                    </Route>
                    <Route path="/category/:categoryid">
                        <ItemListContainer />
                    </Route>
                    <Route path="/item/:itemid">
                        <ItemDetailContainer productsAdded={cartProducts} addProdFunction={setCartProduct} />
                    </Route>
                    <Route path="/cart">
                        <Cart productsAdded={cartProducts} addProdFunction={setCartProduct} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
