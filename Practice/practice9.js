import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const ToggleTheme = () => {
    const [isMode, setMode] = useState(true);

    const darkMode = () => {
        setMode(!isMode);
    }

    const stylingDark = {
        backgroundColor: "black",
        color: "white",
        height: "100vh", // Set height to cover the full screen
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    };

    const iconStyling = {
        fontSize: "30px"
    }

    const btnStyling = {
        borderRadius: "20px",
        padding: "5px 20px",
        cursor: "pointer",
        border: "1px solid"
    }

    const stylingLight = {
        backgroundColor: "white",
        color: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    };

    return (
        <div style={isMode ? stylingLight : stylingDark}>
            <button onClick={darkMode} style={btnStyling}>
                {isMode ? <i className="ri-moon-fill" style={iconStyling}></i> : <i className="ri-sun-line" style={iconStyling}></i>}
            </button>
            <h1>{isMode ? 'Welcome to Light Mode' : 'Welcome to Dark Mode'}</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToggleTheme />);
