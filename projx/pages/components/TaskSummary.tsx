// components/TaskSummary.tsx

import React from 'react';

const TaskSummary: React.FC = () => {
    return (
        <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold mb-3 text-black text-center">Task Overview</h2>
            <ul className="text-lg font-semibold mb-3 text-black text-center">
                <li>Completed Tasks: 12</li>
                <li>Pending Tasks: 5</li>
                <li>Overdue Tasks: 2</li>
            </ul>
        </div>
    );
}

export default TaskSummary;
