import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import Body from './Body'

const Cartoon = () => {
    return (
        <div>
            <Navbar />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Cartoon />)
