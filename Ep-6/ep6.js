import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../Ep-5-Hooks/src/components/Header.js';
import Body from '../Ep-5-Hooks/src/components/Body.js';
// import AboutUs from '../Ep-5-Hooks/src/components/AboutUs.js';
import Contact from '../Ep-5-Hooks/src/components/Contact.js';
import Error from '../Ep-5-Hooks/src/components/Error.js';
import Cart from '../Ep-5-Hooks/src/components/Cart.js';
// import Grocery from '../Ep-5-Hooks/src/components/Grocery.js';
import Loading from '../Ep-5-Hooks/src/components/Loading.js';
import RestaurantMenu from '../Ep-5-Hooks/src/components/RestaurantMenu.js';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { lazy, Suspense } from 'react'

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
const Grocery = lazy(() => import('../Ep-5-Hooks/src/components/Grocery.js'))   // Grocery

const About = lazy(() => import('../Ep-5-Hooks/src/components/AboutUs.js'))    // About us

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
                    element: <Suspense fallback= {<Loading />}><About /></Suspense>,
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
                    path: "/grocery",
                    element: <Suspense fallback= {<Loading />}><Grocery /></Suspense>,
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