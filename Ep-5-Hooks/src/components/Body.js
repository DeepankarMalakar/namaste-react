import { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantCard from "./useRestaurantCard";

const Body = () => {
    // Destructure the returned object from the custom hook
    const { listOfRestaurants, filteredRestaurant, setFilteredRestaurant } = useRestaurantCard();
    const [searchText, setSearchText] = useState("");

    // Handle search functionality
    const handleSearch = () => {
        const filteredList = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(filteredList);  // Update filtered restaurant state
    };

    // Handle top rated restaurants filter
    const handleTopRatedFilter = () => {
        const topRatedList = listOfRestaurants.filter((res) => res.info.avgRating >= 4.5);
        setFilteredRestaurant(topRatedList);  // Update filtered restaurant state
    };

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}  // Update search text state
                    />
                    <button className="search-btn" onClick={handleSearch}>
                        Search
                    </button>
                </div>
                <button className="filter-btn" onClick={handleTopRatedFilter}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.length === 0 ? (
                    <Shimmer />  // Show shimmer while data is loading
                ) : (
                    filteredRestaurant.map((restaurant) => (
                        <Link
                            key={restaurant.info.id}
                            to={`restaurants/${restaurant.info.id}`}
                            style={{ textDecoration: "none" }}
                        >
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default Body;
