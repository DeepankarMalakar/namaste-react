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
    const { resData } = props;
    return (
        <div className="res-card">
            <img className='res-img' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xph0vf5pvbxjf8xchwjk" alt="" />
            <h3>{resData.name}</h3>
            <h5>{resData.cuisines}</h5>
            <span>{resData.areaName}</span>
            <span>{resData.avgRating}⭐</span>
        </div>
    )
}

const resObj = {
    "id": "303066",
    "name": "Haji Biryani Main Branch",
    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/2cf5b8ff-c561-46b0-9f09-032f8c244c25_9d9f0bb3-a1d4-4a8a-9c0a-72055c6d0007.jpg",
    "locality": "Nivedita Road",
    "areaName": "Pradhan Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
        "Biryani ",
        "rolls ",
        "Mughlai ",
        "Chinese "
    ],
    "avgRating": 4.1,
    "parentId": "486390",
    "avgRatingString": "4.1"
}

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" placeholder='Search your Craving' />
                <button>Search</button>
            </div>
            <div className="res-container">
                <RestaurantCard resData={resObj} />
                {/* <RestaurantCard resName="The Fork in the Road" cuisine="North India, South India, Chinese" rating="⭐⭐⭐⭐" />
                <RestaurantCard resName="The Flavorful Frontier" cuisine="Icecreams, Cakes, Desserts" rating="⭐⭐⭐⭐" />
                <RestaurantCard resName="The Cosmic Cafe" cuisine="Coffees, Tea, Cakes" rating="⭐⭐⭐⭐" />
                <RestaurantCard resName="Pizza My Heart" cuisine="Pizza, Sandwiches, Burger" rating="⭐⭐⭐" /> */}
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