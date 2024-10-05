import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import {useState} from 'react'
const Website = () => {
    const [category, setCategory] = useState("general")
    return (
        <div>
            <Navbar setCategory={setCategory} />
            <NewsBoard category={category} />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Website />)
