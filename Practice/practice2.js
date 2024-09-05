import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react';

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

    const handleFilter = (keyword) => {
        const newFilteredProducts = products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()));
        setFilteredProducts(newFilteredProducts);
    };

    const renderedProducts = filteredProducts.map((product) => (
        <li key={product.id} style={{ color: product.isStocked ? 'green' : 'red' }}>
            {product.name}
        </li>
    ));

    return (
        <div>
            <input type="text" placeholder="Search..." onChange={(e) => handleFilter(e.target.value)} />
            <ul>
                {renderedProducts}
            </ul>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ShoppingList />);