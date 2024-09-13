import React from 'react'
import ReactDOM from 'react-dom/client'
import {useState} from 'react'

// Toggle btn
const ToggleVisibility= () => {
    const [isVisible, setIsVisible] = useState(true);

    const visibility = () => {
        setIsVisible(!isVisible);
    }

    const contentStyling = {
        cursor: "pointer",
        color: "blue"
    }
    return (
        <div>
            <button onClick={visibility}>{isVisible ? "Hide Content" : "Show Content"}</button>
            <br />

            {isVisible && <h2 style={contentStyling}>This is the content that can be shown or hidden!</h2>}
        </div>
        
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< ToggleVisibility />)