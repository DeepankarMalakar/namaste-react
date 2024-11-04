import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "./Constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    console.log(resId)

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(
            MENU_API + resId
        );

        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    if (resInfo === null) return <Shimmer />


    const { name, totalRatingsString, cuisines, costForTwoMessage, avgRatingString, areaName, city, sla } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return (
        <>
            <div className="menu">
                <h2>{name}</h2>
                <div className="menu-details">
                    <h3>{avgRatingString}⭐<span id="ratings">({totalRatingsString})</span></h3>
                    <br />
                    <a>{cuisines}</a><span id="cost"> - {costForTwoMessage}</span>
                    <br />
                    <br />
                    <li><span>{areaName}, {city}</span></li>
                    <br />
                    <li><span>{sla.minDeliveryTime} - {sla.maxDeliveryTime} mins</span></li>
                </div>
            </div>
            <div className="menu">
                <p>Menu</p>
                <ul>{itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - {"Rs."}{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)}</ul>
            </div>
            <div>
                <button className="btn btn-warning">Hello</button>
            </div>
        </>
    );
}

export default RestaurantMenu;