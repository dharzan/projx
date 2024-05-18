// components/Notifications.tsx

import React from 'react';

type Notification = {
    id: number;
    text: string;
};

const Notifications: React.FC = () => {
    const notifications: Notification[] = [
        { id: 1, text: "Meeting at 3 PM" },
        { id: 2, text: "Project deadline tomorrow!" }
    ];

    return (
        <div className="notifications">
            <h2>Notifications</h2>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>{notification.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Notifications;
