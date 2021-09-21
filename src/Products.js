const products = [
    {
        id: 1,
        name: 'Dior',
        price: 100,
        category: 'Para Ella',
        img: 'https://images.app.goo.gl/uN25WMZpci3tL9vt7',
        stock: 25,
        description: 'Fragancia fresca',
    },
    {
        id: 2,
        name: 'Givenchy',
        price: 800,
        category: 'Para El',
        img: 'https://images.app.goo.gl/SjiHdf3WKbuBMZFd7',
        stock: 16,
        description: 'Fragancia citrica',
    },
    {
        id: 3,
        marca: 'Versace',
        price: 1200,
        category: 'Unisex',
        img: 'https://images.app.goo.gl/7FDw9HhvzCwieDgm7',
        stock: 10,
        description: 'Fragacia del amor',
    },
];

export const getCategories = () => [
    { id: 'Para ella', description: 'Fragancias divertidas' },
    { id: 'Para el', description: 'Fragancias robustas' },
    { id: 'Unisex', description: 'Fragacia del amor' },
];

export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            category ? resolve(products.filter((prod) => prod.category === category)) : resolve(products);
        }, 1000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const product = products.find((prod) => Number(prod.id) === Number(id));
        setTimeout(() => resolve(product), 1000);
    });
};
