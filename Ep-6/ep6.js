import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header.js';
import Body from './src/components/Body.js';
// import AboutUs from '../Ep-5-Hooks/src/components/AboutUs.js';
import Contact from './src/components/Contact.js';
import Error from './src/components/Error.js';
import Cart from './src/components/Cart.js';
// import Grocery from '../Ep-5-Hooks/src/components/Grocery.js';
import Loading from './src/components/Loading.js';
import RestaurantMenu from './src/components/RestaurantMenu.js';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import UserContext from './src/utils/UserContext.js';
import { Provider } from 'react-redux'
import appStore from './src/utils/appStore.js';

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
const Grocery = lazy(() => import('./src/components/Grocery.js'))   // Grocery

const About = lazy(() => import('./src/components/AboutUs.js'))    // About us

const AppLayout = () => {
    const [userName, setUserName] = useState("Guest");

    // Simulating an API fetch for trying usercontext provider
    useEffect(() => {
        const data = { name: "Deepankar Malakar" };
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

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
                    element: <Suspense fallback={<Loading />}><About /></Suspense>,
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
                    element: <Suspense fallback={<Loading />}><Grocery /></Suspense>,
                },
                {
                    path: "/restaurants/:resId",
                    element: <Suspense fallback={<Loading />}><RestaurantMenu /></Suspense>
                    ,
                },
            ],
            errorElement: <Error />,
        },
    ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />)