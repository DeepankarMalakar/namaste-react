import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../Ep-5-Hooks/src/components/Header.js';
import Body from '../Ep-5-Hooks/src/components/Body.js';
import AboutUs from '../Ep-5-Hooks/src/components/AboutUs.js';
import Contact from '../Ep-5-Hooks/src/components/Contact.js';
import Error from '../Ep-5-Hooks/src/components/Error.js';
import Cart from '../Ep-5-Hooks/src/components/Cart.js';
import RestaurantMenu from '../Ep-5-Hooks/src/components/RestaurantMenu.js';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

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
    // console.log(<Body />)     React's Vitual DOM: Nothing but an object or react component
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}

const appRoutes = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Body />,
                },
                {
                    path: "/about",
                    element: <AboutUs />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },
                {
                    path: "/cart",
                    element: <Cart />,
                },
                {
                    path: "/restaurants/:resId",
                    element: <RestaurantMenu />,
                },
            ],
            errorElement: <Error />,
        },
    ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />)