import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

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

export default Body;