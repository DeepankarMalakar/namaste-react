import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"
// import Shimmer from "./Shimmer";

const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    console.log("Body Rendered");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/mapi/homepage/getCards?lat=26.7271012&lng=88.39528609999999"
        );

        const jsonData = await data.json();
        console.log(jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)

        // Optional Chaining
        setListOfRestraunt(
            jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurant(
            jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
        );
    };

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className="search-btn"
                        onClick={() => {
                            // Filter the restraunt cards and update the UI
                            // searchText
                            console.log(searchText);

                            const filteredRestaurant = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredRestaurant(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.2
                        );
                        setListOfRestraunt(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.length > 0 ? (
                    filteredRestaurant.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                ) : (
                    <Shimmer />
                )}
            </div>
        </div>
    );
};

export default Body;