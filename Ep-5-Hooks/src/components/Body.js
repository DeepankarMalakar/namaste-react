import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import React, { useState } from "react";
const Body = () => {

    // useState hook: it gives super-power to the variable
    // const [variable, modifiedFunction] = useState(variableData to pass)
    // here, variable=variableDate
    const [ filteredResList, setFilteredResList ] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn" 
                onClick={() => {
                    // Filter of higher ratings restaurants logic here
                    const filtering  = resList.filter((res) => res.avgRating > 4.3);
                    console.log(filtering);
                    setFilteredResList(filtering);
                }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {/* <RestaurantCard resData={resList[4]} />
                <RestaurantCard resData={resList[3]} />
                <RestaurantCard resData={resList[2]} />
                <RestaurantCard resData={resList[1]} />
                <RestaurantCard resData={resList[0]} /> */}

                {/* <RestaurantCard resName="The Fork in the Road" cuisine="North India, South India, Chinese" rating="⭐⭐⭐⭐" />
                <RestaurantCard resName="Pizza My Heart" cuisine="Pizza, Sandwiches, Burger" rating="⭐⭐⭐" /> */}

                {filteredResList.map((restaurant) => (<RestaurantCard
                    key={restaurant.id} resData={restaurant} />))}
            </div>
        </div>
    )
}

export default Body;