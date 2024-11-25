import { LOGO_URL } from "../utils/contents";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "./useOnlineStatus";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();

    // useEffect 
    useEffect(() => {
        console.log("useEffect called")
    }, [loginBtn]);

    return (
        <div className='header shadow-md'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} alt="brand-logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="login-btn" onClick={() => {
                        loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
                    }}>{loginBtn}</button>

                    <li style={{background: "white", fontWeight: "bold"}}>Online: {onlineStatus ? "🟢" : "🔴"}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;