import UserClass from "./UserClass";
const AboutUs = () => {
    return (
        <>
            <div className="about-us">
                <div className="about-profile">
                    <UserClass name = "Lorem Ipsum" profile = "Profile" />
                </div>
                <div className="about-description">
                    <h1><span>Food</span> App</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloribus quasi, neque assumenda animi dolores tempore laboriosam optio aspernatur itaque. Facere sapiente eius sed accusantium quia, deserunt modi provident? Voluptatibus sint quas, quo amet nesciunt quia magni numquam nihil tempora asperiores veritatis, eligendi maxime totam sequi repellat officiis saepe voluptas hic voluptatem iste. Quam ad, error nam, consequatur iusto consectetur aliquam quidem natus earum exercitationem eius cum fugit.</span>
                </div>

            </div>
        </>
    )
}

export default AboutUs;