import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
const Website = () => {
    return (
        <div>
            <Navbar />
            <NewsBoard />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Website />)
