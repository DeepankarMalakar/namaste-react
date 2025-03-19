// Creating context to use anywhere in the app
import { createContext } from "react"
import { FaUser } from "react-icons/fa";
const UserContext = createContext({
    loggedInUser: "Default User",
    picture: () => <FaUser />
})

export default UserContext