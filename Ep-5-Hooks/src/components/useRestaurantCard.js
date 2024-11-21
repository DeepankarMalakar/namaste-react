// Custom hook to fetch restaurants
import { useEffect, useState } from "react";
import { RESTAURANT_API } from "./Constants";

const useRestaurantCard = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_API);
        const jsonData = await data.json();
        const restaurants = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        
        // Set both lists to the fetched restaurants
        setListOfRestaurant(restaurants);
        setFilteredRestaurant(restaurants);
    }

    // Return both lists
    return { listOfRestaurants, filteredRestaurant, setFilteredRestaurant };
}

export default useRestaurantCard;