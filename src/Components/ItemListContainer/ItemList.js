import Item from '../Item/Item.js';

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((prod) => {
                return <Item key={prod.id} />;
            })}
        </div>
    );
};

export default ItemList;
