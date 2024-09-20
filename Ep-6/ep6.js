import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../Ep-5-Hooks/src/components/Header.js';
import Body from '../Ep-5-Hooks/src/components/Body.js';

// ** Header section
// - Logo
// - Nav links
// ** Body section
// - Search Bar
// - Restaurant container
//    - Restaurant Card
// ** Footer section
// - Copyright 
// - Links 
// - Address 
// - Contact

// Restaurant Card Component
// - Dish Name
// - Image
// - Restaurant Name
// - Rating
// - Cuisines
// - Time to Deliver

const AppLayout = () => {
    // console.log(<Body />)     React's Vitual DOM: Nothing but an object or reac
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)