import { useState } from 'react';

const Counter = ({ product, productsAdded, addProdFunction }) => {
    const [quantity, setQuantity] = useState(0);

    const onAdd = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const onRemove = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const onAddtoCart = () => {
        const newProduct = {
            ...product,
            quantity: quantity,
        };
        addProdFunction([...productsAdded, newProduct]);
    };

    return (
        <div align="center">
            <table>
                <tbody>
                    <tr>
                        <td align="left">
                            <button className="Button" onClick={() => onRemove()}>
                                -
                            </button>
                        </td>
                        <td align="center" style={{ fontSize: '20px' }}>
                            {quantity}
                        </td>
                        <td align="right">
                            <button className="Button" onClick={() => onAdd()}>
                                +
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" colSpan="5">
                            <button className="Button" onClick={() => onAddtoCart()}>
                                Agregar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default Counter;
