import { CDN_URL } from "../utils/contents";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla, header, subHeader } =
        resData?.info;

    return (
        <Card style={{ width: '20rem', backgroundColor: "#f0f0f0" }}>
            <Card.Img variant="top" src={CDN_URL + cloudinaryImageId} />
            <Card.Body>
                <Card.Title className="fw-bold">{name}</Card.Title>
                <Card.Text className="fw-bold text-success">
                    {cuisines.join(", ")}
                </Card.Text>
                <Card.Text className="text-warning fw-bold">
                    {avgRating} stars ⭐
                </Card.Text>
                <Card.Text className="fw-bold">
                    {costForTwo}
                </Card.Text>
                <Card.Text className="text-danger">
                    {sla?.slaString}
                </Card.Text>
                <Button variant="warning" style={{fontWeight: "bold"}}>Check Out</Button>
            </Card.Body>
        </Card>
    );
};

// Higher Order function :
// that will take an input RestaurantCard and will return the enhanced RestaurantCard i.e withRestaurantCardOffer

export const withRestaurantCardOffer = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="relative bg-black text-white p-1 top-5">{props.resData.info.aggregatedDiscountInfoV3.header}{props.resData.info.aggregatedDiscountInfoV3.subHeader}</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;