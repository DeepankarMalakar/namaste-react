import { LOGO_URL } from "../utils/contents";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "../utils/UserContext";


const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();
    // Using context
    const {loggedInUser, picture} = useContext(UserContext);
    // console.log(loggedInUser)
    // console.log(picture)

    useEffect(() => {
        console.log("useEffect called");
    }, [loginBtn]);

    return (
        <header className="shadow-sm border text-center">
            <div className="py-4 flex justify-between items-center">
                <Link to="/">
                    <img src={LOGO_URL} alt="brand-logo" className="w-50 h-24 rounded-xl" />
                </Link>
                <nav>
                    <ul className="flex space-x-10 font-semibold text-lg">
                        <li>
                            <Link to="/" className="text-gray-500 hover:text-gray-900">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-500 hover:text-gray-900">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-gray-500 hover:text-gray-900">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="text-gray-500 hover:text-gray-900">Cart</Link>
                        </li>
                        <li>
                            <Link to="/grocery" className="text-gray-500 hover:text-gray-900">Grocery</Link>
                        </li>
                        <li className="text-gray-500">Online: {onlineStatus ? "🟢" : "🔴"}</li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-2">
                    <span className="font-semibold text-lg">{loggedInUser}</span>
                    <span className="text-2xl">{picture()}</span>
                </div>
                <button
                    className="bg-yellow-400 hover:bg-yellow-300 text-white hover:text-black font-bold py-2 px-6 rounded mx-4"
                    onClick={() => setLoginBtn(loginBtn === "Login" ? "Logout" : "Login")}
                >
                    {loginBtn}
                </button>
            </div>
        </header>
    );
};

export default Header;