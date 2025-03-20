import { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard, { withRestaurantCardOffer } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantCard from "./useRestaurantCard";
import useOnlineStatus from "./useOnlineStatus";
import { TfiSearch } from "react-icons/tfi";

const Body = () => {
    // Destructure the returned object from the custom hook
    const { listOfRestaurants, filteredRestaurant, setFilteredRestaurant } = useRestaurantCard();
    const [searchText, setSearchText] = useState("");

    const RestaurantWithOffer = withRestaurantCardOffer(RestaurantCard);

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

    // Online or offline status using custom hook
    const onlineStatus = useOnlineStatus();
    if (onlineStatus == false) return (<h1>Please Check your internet connection and try again!</h1>)

    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <input
                        type="text"
                        className="w-[400px] bg-slate-100 shadow-sm py-2 border border-slate-300 rounded-md ml-4 mt-1 p-2 placeholder-slate-500 placeholder-italic placeholder:p-1"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search for restaurants..."
                    />
                    <button onClick={handleSearch} className="bg-red-600 hover:bg-red-500 text-white mx-4 py-[9px] px-3 rounded-md mt-1">
                        <span className="text-2xl"><TfiSearch /></span>
                    </button>
                </div>
                <div>
                    <button onClick={handleTopRatedFilter} className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md">
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap gap-8">
                {listOfRestaurants.length === 0 ? (
                    <Shimmer />  // Show shimmer while data is loading
                ) : (
                    filteredRestaurant.map((restaurant) => (
                        <Link
                            key={restaurant.info.id}
                            to={`restaurants/${restaurant.info.id}`}
                            style={{ textDecoration: "none" }}
                        >
                            {restaurant.info.aggregatedDiscountInfoV3 ? (
                                <RestaurantWithOffer resData={restaurant} />
                            ) : (
                                <RestaurantCard resData={restaurant} />
                            )}
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default Body;
