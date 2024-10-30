import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    const { name, cuisines, costForTwoMessage, avgRatingString, areaName } = resInfo?.cards[2]?.card?.card?.info || {};

    return resInfo === null ? (
        <Shimmer />
    ) : (
        <div className="menu">
            <h2>{name}</h2>
            <h4>{avgRatingString}⭐ - {costForTwoMessage}</h4>
            <h4>{cuisines}</h4>
            <span>{areaName}</span>
        </div>
    );
}

export default RestaurantMenu;