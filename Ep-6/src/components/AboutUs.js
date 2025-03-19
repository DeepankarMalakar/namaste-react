import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
import { clippingParents } from "@popperjs/core";
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
                        <UserClass />  {/*First child Component*/}
                        {/* <UserClass name = {"John Dae"} profile = {"Profile"} /> */}  {/*Second child Component*/}
                        {/* <UserClass name = {"John Dae"} profile = {"Profile"} /> */}  {/*Third child Component*/}
                    </div>
                    <div className="mt-4 ml-3">
                        <h1 className="text-lg font-bold text-orange-500"><span>Food</span> App</h1>
                        <span className="text-yellow-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloribus quasi, neque assumenda animi dolores tempore laboriosam optio aspernatur itaque. Facere sapiente eius sed accusantium quia, deserunt modi provident? Voluptatibus sint quas, quo amet nesciunt quia magni numquam nihil tempora asperiores veritatis, eligendi maxime totam sequi repellat officiis saepe voluptas hic voluptatem iste. Quam ad, error nam, consequatur iusto consectetur aliquam quidem natus earum exercitationem eius cum fugit.</span>
                    </div>
                    <div className="font-semibold flex mt-8 ml-3 text-lg">
                    Logged in User: 
                        <UserContext.Consumer>
                            {
                                ({loggedInUser}) => (<h1 className="text-blue-700 ml-2">{loggedInUser}</h1>)
                            }
                        </UserContext.Consumer>
                    </div>
    
                </div>
            </>
        )
    }
}

export default AboutUs;