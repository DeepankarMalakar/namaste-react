// Class based component for about us page 
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const img = "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        // use State hook or variables are not used in class
        // const [count] = useState(0)
        // const [count2] = useState(2)
        // Instead this was the way to use:
        // this.state = {
        //     count: 0,
        //     count2: 2,
        // };
        console.log("Child Constructor")
    }
    componentDidMount() {
        console.log("Children Component did mount")
        // We make API calls in componentDidMount on class based component, its like the useEffect() hook given us by react.
    }
    
    render() {
        const {name, profile} = this.props
        // const {count, count2} = this.state;
        console.log("Child Render")
        return (
            <Card style={{ width: '18rem', marginLeft: '1rem', marginTop: '1rem'}}>
                <Card.Img variant="top" src= {img}/>
                <Card.Body>
                    <Card.Title>{name} (CEO)</Card.Title>

                    {/* <span>{this.state.count}</span> */}
                    {/* <span>{count}</span> */}
                    {/* <span>{count2}</span> */}

                    {/* <button onClick={() => this.setState({
                        count: this.state.count + 1,
                    })}>Increment</button> */}

                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="warning">{profile}</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default UserClass