import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'

const Cartoon = () => {
    return (
        <div>
            <Navbar />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Cartoon />)
