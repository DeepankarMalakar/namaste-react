import { LOGO_URL } from "../utils/contents";
import { useState, useEffect } from "react";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    
    // useEffect 
    useEffect(() => {
        console.log("useEffect called")
    }, [loginBtn]);

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} alt="brand-logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
                    }}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;