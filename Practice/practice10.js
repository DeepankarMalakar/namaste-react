import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const ColorPicker = () => {
    const [color, setColor] = useState("ffffff");

    const handleColorChange = (e) => {setColor(e.target.value )};

    return (
        <div style={{
            marginTop: '20px',
            width: '200px',
            height: '200px',
            backgroundColor: color
        }}>
            <h1>Pick a Color</h1>
            <input
                type="color"
                value={color}
                onChange={handleColorChange}
            />
            
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPicker />);
