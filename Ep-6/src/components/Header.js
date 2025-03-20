import { LOGO_URL } from "../utils/contents";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "../utils/UserContext";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";


const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();
    // Using context
    const {loggedInUser, picture} = useContext(UserContext);
    // console.log(loggedInUser)
    // console.log(picture)

    // Subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items)

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
                            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="text-gray-600 hover:text-gray-900 flex"><span className="text-3xl"><FaShoppingCart /></span><p className="text-orange-500 font-bold text-base">{cartItems.length}</p></Link>
                        </li>
                        <li>
                            <Link to="/grocery" className="text-gray-600 hover:text-gray-900">Grocery</Link>
                        </li>
                        <li className="text-gray-600">Online: {onlineStatus ? "🟢" : "🔴"}</li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-2">
                    <span className="font-semibold text-lg">{loggedInUser}</span>
                    <span className="text-2xl">{<FaUser />}</span>
                </div>
                <button
                    className="bg-orange-500 hover:bg-yellow-400 text-white hover:text-black font-bold py-2 px-6 rounded mx-4"
                    onClick={() => setLoginBtn(loginBtn === "Login" ? "Logout" : "Login")}
                >
                    {loginBtn}
                </button>
            </div>
        </header>
    );
};

export default Header;