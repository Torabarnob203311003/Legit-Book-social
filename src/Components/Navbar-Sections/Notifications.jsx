import React, { useState } from "react";
import { FaBell, FaTimes } from "react-icons/fa";

const initialNotifications = [
    { id: 1, title: "Weekly Insights", description: "Top industry trends to watch.", type: "news", time: "30m" },
    { id: 2, title: "Alex Johnson sent you a connection request.", description: "View and respond.", type: "connection", time: "1h" },
    { id: 3, title: "Your post reached 500 views!", description: "Check out the engagement stats.", type: "post-engagement", button: "View insights", time: "2h" },
    { id: 4, title: "New job alert: Software Engineer at Google", description: "5 other job matches found.", type: "jobs", button: "View jobs", time: "3h" },
    { id: 5, title: "Your application at Microsoft has been viewed.", description: "Recruiters are reviewing your profile.", type: "job-application", button: "Check status", time: "5h" },
    { id: 6, title: "Sarah commented on your post.", description: `"Great insights! Thanks for sharing."`, type: "comment", time: "6h" },
];

function Notifications() {
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState(initialNotifications);

    // Remove a single notification
    const removeNotification = (id) => {
        setNotifications(notifications.filter((notification) => notification.id !== id));
    };

    // Clear all notifications
    const clearAllNotifications = () => {
        setNotifications([]);
    };

    return (
        <div className="relative">
            {/* Bell Icon */}
            <div className="relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <FaBell className="text-gray-400 hover:text-white" size={20} />
                {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-3 h-3 flex items-center justify-center">
                        {notifications.length}
                    </span>
                )}
            </div>

            {/* Notification Dropdown */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-96 bg-zinc-800 border-white text-gray-800 rounded-lg shadow-lg p-3 z-20">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-lg text-gray-100">Notifications</h3>
                        {notifications.length > 0 && (
                            <button onClick={clearAllNotifications} className="text-red-600 text-sm hover:underline">
                                Dismiss All
                            </button>
                        )}
                    </div>

                    <ul className="max-h-64 overflow-y-auto mt-2 space-y-3">
                        {notifications.length > 0 ? (
                            notifications.map((notification) => (
                                <li key={notification.id} className="p-2 hover:bg-gray-700 rounded-lg transition-all flex justify-between items-center">
                                    <div>
                                        <p className="text-sm font-semibold text-white">{notification.title}</p>
                                        <p className="text-xs text-white">{notification.description}</p>
                                        <div className="text-xs text-white mt-1">{notification.time}</div>
                                        {notification.button && (
                                            <button className="mt-2 text-sm font-semibold text-blue-600 border border-blue-600 px-3 py-1 rounded-full hover:bg-blue-100">
                                                {notification.button}
                                            </button>
                                        )}
                                    </div>
                                    <button onClick={() => removeNotification(notification.id)} className="text-gray-500 hover:text-red-500">
                                        <FaTimes size={12} />
                                    </button>
                                </li>
                            ))
                        ) : (
                            <p className="text-sm text-gray-500 text-center py-4">No new notifications</p>
                        )}
                    </ul>

                    {notifications.length > 0 && (
                        <div className="text-xs text-blue-600 text-center mt-3 cursor-pointer hover:underline">
                            View All Notifications
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Notifications;
