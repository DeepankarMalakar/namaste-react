import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const ToDoApp = () => {
    const [task, setTask] = useState("");     // State for input task
    const [listTask, setListTask] = useState([]);  // State for listing task
    const [isEditing, setIsEditing] = useState(false);  // Track if we are editing a task
    const [currentTask, setCurrentTask] = useState({});  // Store the task being edited

    // Handle input changes
    const handleTaskInput = (e) => setTask(e.target.value);

    // Add task
    const handleAddTask = (e) => {
        e.preventDefault();
        if (task.trim()) {
            if (isEditing) {
                // Update the task in the list if editing
                setListTask(listTask.map((item) => item.id === currentTask.id ? { ...item, name: task } : item));
                setIsEditing(false);  // Reset editing state
                setCurrentTask({});  // Clear the current task
            } else {
                // Add a new task
                setListTask([...listTask, { id: Date.now(), name: task }]);
            }
            setTask("");  // Clear the input field
        }
    };

    // Delete task
    const handleDeleteTask = (id) => {
        setListTask(listTask.filter((task) => task.id !== id));
    };

    // Edit task
    const handleEditTask = (task) => {
        setIsEditing(true);  // Set editing mode
        setCurrentTask(task);  // Set the current task to be edited
        setTask(task.name);  // Set the input field to the task's current name
    };

    return (
        <div>
            <form onSubmit={handleAddTask}>
                <h1>To-Do List</h1>
                <input
                    type="text"
                    placeholder="Enter Task"
                    onChange={handleTaskInput}
                    value={task}
                />
                <button type="submit">{isEditing ? "Update Task" : "Add Task"}</button>
            </form>

            <ul>
                {listTask.map((taskItem) => (
                    <li key={taskItem.id}>
                        {taskItem.name} {/* Display task name */}
                        <button onClick={() => handleDeleteTask(taskItem.id)}>✖️</button>
                        <button onClick={() => handleEditTask(taskItem)}>📝</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToDoApp />);
