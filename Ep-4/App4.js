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
    // destructuring
    const { resData } = props;
    const { name, cuisines, areaName, avgRating, costForTwo, cloudinaryImageId } = resData;

    return (
        <div className="res-card">
            <img className='res-img' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="" />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <span>{areaName}</span>
            <span>{avgRating}⭐</span>
            <span>{costForTwo}</span>
        </div>
    )
}

const resList = [
    {
        "id": "303066",
        "name": "Haji Biryani Main Branch",
        "cloudinaryImageId": "90012597629321295211c3881c8bb0af",
        "locality": "Nivedita Road",
        "areaName": "Pradhan Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Biryani",
            "rolls",
            "Mughlai",
            "Chinese"
        ],
        "avgRating": 4.1,
        "parentId": "486390",
        "avgRatingString": "4.1"
    },
    {
        "id": "225233",
        "name": "Sunnie Momo's",
        "cloudinaryImageId": "vcm8g9701epmsexbsokr",
        "locality": "Nivedita Road",
        "areaName": "Pradhan Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Chinese",
            "Fast Food",
            "Kebabs",
            "Snacks"
        ],
        "avgRating": 4.1,
        "parentId": "197160",
        "avgRatingString": "4.1",
    },

    {
        "id": "236543",
        "name": "Sher-E-Punjab",
        "cloudinaryImageId": "mp0xm650igevdznoa4kv",
        "locality": "Ward 3",
        "areaName": "Siliguri",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "North Indian",
            "Biryani",
            "Chinese",
            "Kebabs",
            "Tandoor"
        ],
        "avgRating": 3.9,
        "parentId": "840",
        "avgRatingString": "3.9"
    },

    {
        "id": "643170",
        "name": "Kwality Walls Ice Cream and More",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/b62d0931-507e-4965-a060-724005f37f2e_643170.JPG",
        "locality": "Siliguri",
        "areaName": "Janta Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Desserts",
            "Ice Cream",
            "Ice Cream Cakes"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "582",
        "avgRatingString": "4.7",
    },

    {
        "id": "152535",
        "name": "Hotel Central Plaza",
        "cloudinaryImageId": "ypl5e09avkqwgntdy3ln",
        "locality": "Hill Cart Road",
        "areaName": "Pradhan Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "North Indian",
            "Chinese",
            "Biryani",
            "Kebabs",
            "Snacks",
            "Fast Food"
        ],
        "avgRating": 4.3,
        "parentId": "98493",
        "avgRatingString": "4.3",
    }
]

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" placeholder='Search your Craving' />
                <button>Search</button>
            </div>
            <div className="res-container">
                {/* <RestaurantCard resData={resList[4]} />
                <RestaurantCard resData={resList[3]} />
                <RestaurantCard resData={resList[2]} />
                <RestaurantCard resData={resList[1]} />
                <RestaurantCard resData={resList[0]} /> */}

                {/* <RestaurantCard resName="The Fork in the Road" cuisine="North India, South India, Chinese" rating="⭐⭐⭐⭐" />
                <RestaurantCard resName="Pizza My Heart" cuisine="Pizza, Sandwiches, Burger" rating="⭐⭐⭐" /> */}

                {resList.map((restaurant) => (<RestaurantCard
                    key={restaurant.id} resData={restaurant} />))}
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