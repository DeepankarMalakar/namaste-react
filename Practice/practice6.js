import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const CounterApp = () => {
    // State to hold the list of counters
    const [counters, setCounters] = useState([{ id: 1, count: 0 }]);

    // Add a new counter
    const handleAddCounter = () => {
        const newCounter = { id: Date.now(), count: 0 };
        setCounters([...counters, newCounter]);
    };

    // Increment a counter
    const handleIncrement = (id) => {
        setCounters(
            counters.map(counter => counter.id === id ? { ...counter, count: counter.count + 1 } : counter)
        );
    };

    // Decrement a counter
    const handleDecrement = (id) => {
        setCounters(
            counters.map(counter => counter.id === id ? { ...counter, count: counter.count - 1 } : counter)
        );
    };

    // Reset a counter
    const handleReset = (id) => {
        setCounters(
            counters.map(counter => counter.id === id ? { ...counter, count: 0 } : counter)
        );
    };

    // Remove a counter
    const handleRemove = (id) => {
        setCounters(counters.filter(counter => counter.id !== id));
    };

    return (
        <div>
            <h1>Multiple Counters</h1>
            <button onClick={handleAddCounter}>Add Counter</button>

            {counters.map((counter) => (
                <div key={counter.id} style={{ marginTop: "10px" }}>
                    <h3>Counter {counter.id}</h3>
                    <p>Count: {counter.count}</p>
                    <button onClick={() => handleIncrement(counter.id)}>Increment</button>
                    <button onClick={() => handleDecrement(counter.id)}>Decrement</button>
                    <button onClick={() => handleReset(counter.id)}>Reset</button>
                    <button onClick={() => handleRemove(counter.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CounterApp />);
