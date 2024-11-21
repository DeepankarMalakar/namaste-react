import { useParams } from "react-router-dom";
import { IMAGE_URL } from "./Constants";
import Shimmer from "./Shimmer";
import Accordion from 'react-bootstrap/Accordion';
import useRestaurantMenu from "./useRestaurantMenu";

const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId)    // Created custom hook to fetch menu "useRestaurantMenu"

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json();
    //     setResInfo(json.data);
    // };

    if (resInfo === null) return <Shimmer />;

    const { name, totalRatingsString, cuisines, costForTwoMessage, avgRatingString, areaName, city, sla } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)

    // Filter items into Veg and Non-Veg categories
    const vegItems = itemCards.filter(item => item?.card?.info?.itemAttribute?.vegClassifier === 'VEG');
    const nonVegItems = itemCards.filter(item => item?.card?.info?.itemAttribute?.vegClassifier === 'NONVEG');

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
            <div className="menu-header">
                <h2>Menu</h2>
            </div>

            <Accordion>
                {/* Veg Accordion Section */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Veg</Accordion.Header>
                    <Accordion.Body>
                        {/* <ul>
                                {vegItems.map(item => (
                                    <li key={item.card.info.id}>
                                        {item.card.info.name} - Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                                    </li>
                                ))}
                            </ul> */}
                        <div className="items">
                            {vegItems.map(item => (
                                <div key={item.card.info.id} className="eachItem">
                                    <a href="#">{item.card.info.name}</a> - Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                                    <ul>
                                        <li className="eachDescription">{item.card.info.description}</li>
                                    </ul>
                                    <div className="itemImageContainer">
                                        <img src={IMAGE_URL + item.card.info.imageId} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Non-Veg Accordion Section */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Non-Veg</Accordion.Header>
                    <Accordion.Body>
                        <div className="items">
                            {nonVegItems.map(item => (
                                <div key={item.card.info.id} className="eachItem">
                                    <a href="#">{item.card.info.name}</a> - Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                                    <ul>
                                        <li className="eachDescription">{item.card.info.description}</li>
                                    </ul>
                                    <div className="itemImageContainer">
                                        <img src={IMAGE_URL + item.card.info.imageId} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default RestaurantMenu;
