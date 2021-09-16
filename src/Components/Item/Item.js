import { useState, useEffect } from 'react';
const Perfume = () => {
    return new Promise((resolve, reject) => {
        const perfumes = [
            { id: '01', marca: 'Dior', fragancia: 'Jadore', price: 500, stock: 5 },
            { id: '02', marca: 'Givenchy', fragancia: 'Very', price: 1000, stock: 6 },
            { id: '03', marca: 'Versace', fragancia: 'Blue Jeans', price: 1500, stock: 7 },
        ];
        setTimeout(() => resolve(perfumes), 2000);
    });
};
const Item = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const listItems = Perfume();
        listItems.then((result) => setItems(result));
        return () => {
            setItems([items]);
        };
    }, []);
};

export default Item;
