import { CDN_URL } from "../utils/contents";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
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
                <Button variant="success">Check Out</Button>
            </Card.Body>
        </Card>
    );
};

export default RestaurantCard;