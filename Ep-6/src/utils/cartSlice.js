import { createSlice } from "@reduxjs/toolkit";

// Creating a slice of the store (Cart)
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    // Reducers are functions that take the current state and an action as arguments, and return a new state result.
    // Reducers are the only way to change the state in Redux.
    // Child reducers
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload)
        },
        removeFromCart: (state) => {
            state.items.pop()
        },
        emptyCart: (state) => {
            state.items.length = 0
        }
    }
})

export const {addToCart, removeFromCart, emptyCart} = cartSlice.actions;

export default cartSlice.reducer;