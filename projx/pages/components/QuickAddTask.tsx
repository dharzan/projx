// components/QuickAddTask.tsx

import React, { useState } from 'react';

const QuickAddTask: React.FC = () => {
    const [task, setTask] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Adding Task:", task);
        // Here, add logic to integrate with your backend or state management to actually add the task
        setTask(''); // Reset the input after submission
    };

    return (
        <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold mb-3 text-black text-center">Add Task</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                <input
                    type="text"
                    placeholder="Enter task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="form-input px-4 py-2 border rounded-md text-black"
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Task
                </button>
            </form>
        </div>
    );
}

export default QuickAddTask;
