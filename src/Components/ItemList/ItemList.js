import Item from '../Item/Item';

const ItemList = ({ products, categoryid }) => {
    if (products.length === 0) {
        return <h3>No hay productos</h3>;
    }

    return (
        <ul>
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </ul>
    );
};
export default ItemList;
