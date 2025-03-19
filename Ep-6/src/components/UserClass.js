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
        // console.log(this.props.name+ " " + "Child Constructor")
        this.state = {
            userInfo: {
                name: "Dummy Name",
                img: "https: dummyimage.com",
                bio: "Dummy Bio",
                company: "Dummy Company",
            }
        }
        // Its like, const [state, setSet] = useState(userInfo); so here we created state variable
    }
    async componentDidMount() {
        // console.log(this.props.name + " " + "Children Component did mount")
        // We make API calls in componentDidMount on class based component, its like the useEffect() hook given us by react.
        const data = await fetch("https://api.github.com/users/DeepankarMalakar");
        const json = await data.json();

        // Here, we updated state variable
        this.setState({
            userInfo: json,
        })

        // console.log(json)
    }
    
    render() {
        // const {name, profile} = this.props
        // const {count, count2} = this.state;
        // console.log(this.props.name + " " + "Child Render")
        const {login, avatar_url, bio, company} = this.state.userInfo
        return (
            <Card style={{ width: '18rem', marginLeft: '1rem', marginTop: '1rem'}}>
                <Card.Img variant="top" src= {avatar_url} className='w-52 rounded-md'/>
                <Card.Body>
                    <Card.Title>{login} - {company}</Card.Title>

                    {/* <span>{this.state.count}</span> */}
                    {/* <span>{count}</span> */}
                    {/* <span>{count2}</span> */}

                    {/* <button onClick={() => this.setState({
                        count: this.state.count + 1,
                    })}>Increment</button> */}

                    <Card.Text>
                        {bio}
                    </Card.Text>
                    <Button variant="warning" className='bg-blue-700 px-3 py-2 text-white rounded-md mt-3'>Profile</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default UserClass