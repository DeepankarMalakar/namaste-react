// Project Goal:
// Add items to the cart.
// Remove items from the cart.
// Update the quantity of items in the cart.
// Display the total number of items in the cart.

import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'

const ShoppingCart = () => {
    // Step 1: Set up the state for items in the cart
    const [cart, setCart] = useState([]);

    // Step 2: Add an item to the cart
    const handleAddItem = (itemName) => {
        const itemExists = cart.find((item) => item.name === itemName);

        if (itemExists) {
            setCart(cart.map((item) => item === itemName ? { ...item, quantity: item.quantity + 1 } : item));
        }
        else {
            setCart([...cart, { name: itemName, quantity: 1 }]);
        }
    }

    // Step 3: Remove an item from the cart
    const handleRemoveItem = (itemName) => {
        setCart(cart.filter((item) => item.name !== itemName));
    }

    // Step 3: Update item quantity
    const handleUpdateQuantity = (itemName, newQuantity) => {
        // Fallback to "" if newQuantity is NaN or less than 1
        const validQuantity = isNaN(newQuantity) || newQuantity < 1 ? "" : newQuantity;

        setCart(
            cart.map((item) =>
                item.name === itemName ? { ...item, quantity: validQuantity } : item
            )
        );
    };


    return (
        <div>
            <button onClick={() => handleAddItem('Apple')}>Add Apple</button>
            <button onClick={() => handleAddItem('Banana')}>Add Banana</button>
            <button onClick={() => handleAddItem('Orange')}>Add Orange</button>

            {/* Display Cart Items */}
            <h2>Cart Items:</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index + ""}>
                            {item.name} - Quantity: {item.quantity}
                            <button onClick={() => handleRemoveItem(item.name)}>Remove</button>
                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) =>
                                    handleUpdateQuantity(item.name, parseInt(e.target.value))
                                }
                            />
                        </li>
                    ))}
                </ul>
            )}

            {/* Display Total Items */}
            <h3>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</h3>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ShoppingCart />)