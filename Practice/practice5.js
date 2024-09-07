import React from 'react';
import ReactDOM from 'react-dom/client'
import { useState } from 'react';


const ToDoApp = () => {
    // Step 1: Set up state for the task input and the list of tasks
    const [task, setTask] = useState("");
    const [listTask, setListTask] = useState([]);

    // Step 2: Handle input changes
    const handleTaskInput = (e) => setTask(e.target.value);

    // Step 3: Handle form submission to add task
    const handleAddTask = (e) => {
        e.preventDefault();  // prevent page from reloading
        if (task.trim()) {
            setListTask([...listTask, task]);
            setTask("");
        }
    }

    return (
        <div>
            <form onSubmit={handleAddTask}>
            <h1>To-Do-List</h1>
            <input type="text" placeholder='Enter Task' onChange={handleTaskInput} value={task}/>
            <button type='submit'>Submit</button>
            </form>

            <ul>
                {listTask.map((taskName, index) => (
                    <li key={index}>{taskName}</li>
                ))}
            </ul>
        </div>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToDoApp />);