import { CDN_URL } from "../utils/contents";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla, header, subHeader } =
        resData?.info;

    return (
        <div className="w-80 border bg-slate-100 shadow-md rounded-md p-2 ml-4">
            <div className="flex-1">
                <img
                    src={CDN_URL + cloudinaryImageId}
                    alt={name}
                    className="object-cover rounded-t-md w-full h-[200px]"
                />
                <div className="p-2 flex flex-col">
                    <h1 className="text-lg font-bold">{name}</h1>
                    <span className="text-md text-gray-500">{cuisines?.join(", ")}</span>
                    <span className="text-md text-yellow-400">{avgRating} stars ⭐</span>
                    <span className="text-md text-gray-500">{costForTwo}</span>
                    <span className="text-md text-gray-500">{sla?.slaString}</span>
                </div>
            </div>
            <div className="p-2">
                <button className="bg-yellow-400 hover:bg-yellow-300 px-3 py-2 font-semibold w-full rounded-sm">
                    Check Out
                </button>
            </div>
        </div>
    );
};

// Higher Order function :
// End of the day it is a function that will take an input component (RestaurantCard) and will return the enhanced version of this component (RestaurantCard) i.e withRestaurantCardOffer

export const withRestaurantCardOffer = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="relative bg-black text-white p-1 top-11 left-4">{props.resData.info.aggregatedDiscountInfoV3.header}{props.resData.info.aggregatedDiscountInfoV3.subHeader}</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;