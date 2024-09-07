import React from "react";
import users from "./profileData";
import ReactDOM from 'react-dom';
import "./practice3.css";

export default function Profile() {
    return (
        <div className="profile-container">
            {users.map((user) => (
                <Card key={user.id} user={user} />
            ))}
        </div>
    );
}

const Card = (props) => {
    const { user } = props;

    return (
        <div className="card">
            <img src={user.imageUrl} alt={user.name + " image"} />
            <h4>{user.name}</h4>
            <span>{user.work}</span>
            <span>{user.hobbies}</span>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Profile />)