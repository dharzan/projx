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
        <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold mb-3 text-black text-center" >Notifications</h2>
            <ul className="text-lg font-semibold mb-3 text-black text-center">
                {notifications.map(notification => (
                    <li key={notification.id}>{notification.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Notifications;
