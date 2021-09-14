import { useEffect } from 'react';
import Item from '../item/item';

function ItemList() {
    const [Item] = useEffect(() => { 
        const Items = getItems() Item.then(result => { 
        const prod = result.find(prod => prod.id === Item) setProductDetail(produ) })}

    new Promise((resolve) => {
        setTimeout(() => resolve(Item), 2000);
                {Item.map((item) => {
                    return (
                        <div>
                            <ul>
                                <li style={{ color: 'Black' }} key={item.id}>
                                    {item.marca}
                                </li>
                                <li style={{ color: 'Black' }} key={item.id}>
                                    {item.fragancia}
                                </li> <li style={{ color: 'Black' }} key={item.id}>
                                    {item.price}
                                </li>
                                <li style={{ color: 'Black' }} key={item.id}>
                                    {item.stock}
                                </li>
                            </ul>
                        </div>
                    );
                })}

})}

export default ItemList;
