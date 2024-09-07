import React from 'react';
import ReactDOM from 'react-dom'
import { useState } from 'react';

const NameForm = () => {
    // Step 1: Set up state using useState for both first and last name
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // Step 2: Update state based on input changes
    const handleFirstNameInput = (e) => setFirstName(e.target.value);
    const handleLastNameInput = (e) => setLastName(e.target.value);

    // Step 3: Input for first and last name
    return (
        <>
            <h1>Enter your Name: </h1>
            <input type="text" onChange={handleFirstNameInput} placeholder='First Name' value={firstName}/>
            <input type="text" onChange={handleLastNameInput} placeholder='Last Name' value={lastName}/>
            <h2>{firstName}{lastName}</h2>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NameForm />);