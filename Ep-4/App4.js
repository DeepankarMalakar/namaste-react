import React from 'react'
import ReactDOM from 'react-dom/client'

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

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg" alt="brand-logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// Restaurant Card Component
// - Dish Name
// - Image
// - Restaurant Name
// - Rating
// - Cuisines
// - Time to Deliver

const RestaurantCard = (props) => {
    console.log(props);
    return (
        <div className="res-card">
        <img className='res-img' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xph0vf5pvbxjf8xchwjk" alt="" />
            <h3>{props.resName}</h3>
            <h5>{props.cuisine}</h5>
            <span>{props.rating}</span>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" placeholder='Search your Craving'/>
                <button>Search</button>
            </div>
            <div className="res-container">
                <RestaurantCard resName="Gastronomical Odyssey" cuisine="Mutton Kosha, Chicken Kosha, Fish Kosha" rating="⭐⭐⭐⭐" />
                <RestaurantCard resName="The Fork in the Road" cuisine="North India, South India, Chinese" rating="⭐⭐⭐⭐"/>
                <RestaurantCard resName="The Flavorful Frontier" cuisine="Icecreams, Cakes, Desserts" rating="⭐⭐⭐⭐"/>
                <RestaurantCard resName="The Cosmic Cafe" cuisine="Coffees, Tea, Cakes" rating="⭐⭐⭐⭐"/>
                <RestaurantCard resName="Pizza My Heart" cuisine="Pizza, Sandwiches, Burger" rating="⭐⭐⭐"/>
                <RestaurantCard resName="KFC" cuisine="Fry Chicken, Chicken nuggets, Burger" rating="⭐⭐⭐⭐"/>
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)