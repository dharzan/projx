// components/TaskSummary.tsx

import React from 'react';

const TaskSummary: React.FC = () => {
    return (
        <div className="task-summary">
            <h2>Task Overview</h2>
            <ul>
                <li>Completed Tasks: 12</li>
                <li>Pending Tasks: 5</li>
                <li>Overdue Tasks: 2</li>
            </ul>
        </div>
    );
}

export default TaskSummary;
