import { CDN_URL } from "../utils/contents";

const RestaurantCard = (props) => {
    // destructuring
    const { resData } = props;
    const { name, cuisines, areaName, avgRating, costForTwo, cloudinaryImageId } = resData;

    return (
        <div className="res-card">
            <img className='res-img' src={CDN_URL + cloudinaryImageId} alt="" />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <span>{areaName}</span>
            <span>{avgRating}⭐</span>
            <span>{costForTwo}</span>
        </div>
    )
}

export default RestaurantCard;         // Default export