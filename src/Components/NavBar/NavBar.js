import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ({ cartProducts }) => {
    const [productQuantity, setProductQuantity] = useState(0);

    useEffect(() => {
        if (cartProducts.length === 0) {
            setProductQuantity(0);
        } else {
            cartProducts.forEach((prod) => {
                setProductQuantity(productQuantity + prod.quantity);
            });
        }
    }, [cartProducts]);

    return (
        <nav className="NavBar">
            <div>
                <Link to="/">
                    <h3>La Perfumeria</h3>
                </Link>
            </div>

            <div>
                <Link to="/cart">
                    <CartWidget quantity={productQuantity} />
                </Link>
            </div>
        </nav>
    );
};
export default NavBar;
