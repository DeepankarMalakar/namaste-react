import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const products = [
    {
        name: "Apple",
        isStocked: true,
        id: 1
    },
    {
        name: "Potato",
        isStocked: true,
        id: 2
    },
    {
        name: "Mango",
        isStocked: false,
        id: 3
    },
    {
        name: "Brinjal",
        isStocked: false,
        id: 4
    },
    {
        name: "Banana",
        isStocked: true,
        id: 5
    }
];

function ShoppingList() {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [showInStock, setShowInStock] = useState(true);

    const handleFilter = (keyword) => {
        const newFilteredProducts = products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()));
        setFilteredProducts(newFilteredProducts);
    };

    const handleStocked = () => {
        const inStockProducts = products.filter(product => product.isStocked);
        setFilteredProducts(showInStock ? inStockProducts : products);
        setShowInStock(!showInStock); // Update showInStock after filtering
    };

    const renderedProducts = filteredProducts.map((product) => (
        <li key={product.id} style={{ color: product.isStocked ? 'green' : 'red' }}>
            {product.name}
        </li>
    ));

    return (
        <div>
            <input type="text" placeholder="Search..." onChange={(e) => handleFilter(e.target.value)} />
            <label>
                <input type="checkbox" onChange={handleStocked} />
                Show in Stock Items
            </label>
            <ul>
                {renderedProducts}
            </ul>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ShoppingList />);