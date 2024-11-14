import UserClass from "./UserClass";
import React from "react";
// Class based component 
class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor")
    }

    componentDidMount() {
        console.log("Parent component did mount");
        // We make API calls in componentDidMount on class based component, its like the useEffect() hook given us by react.
    }

    render () {
        console.log("Parent Render")
        return (
            <>
                <div className="about-us">
                    <div className="about-profile">
                        <UserClass name = {"Lorem Ipsum"} profile = {"Profile"} />
                    </div>
                    <div className="about-description">
                        <h1><span>Food</span> App</h1>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloribus quasi, neque assumenda animi dolores tempore laboriosam optio aspernatur itaque. Facere sapiente eius sed accusantium quia, deserunt modi provident? Voluptatibus sint quas, quo amet nesciunt quia magni numquam nihil tempora asperiores veritatis, eligendi maxime totam sequi repellat officiis saepe voluptas hic voluptatem iste. Quam ad, error nam, consequatur iusto consectetur aliquam quidem natus earum exercitationem eius cum fugit.</span>
                    </div>
    
                </div>
            </>
        )
    }
}

export default AboutUs;