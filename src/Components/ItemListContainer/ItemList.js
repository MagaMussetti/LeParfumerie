import Item from '../Item/Item.js';

const ItemList = ({ perfume }) => {
    return (
        <div>
            {perfume.map((prod) => {
                return <Item key={prod.id} />;
            })}
        </div>
    );
};

export default ItemList;
