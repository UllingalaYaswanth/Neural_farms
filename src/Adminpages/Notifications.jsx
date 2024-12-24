import React, { useState } from "react";
import { FaBell, FaTrashAlt } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";

// Dummy Data for Notifications
const dummyNotifications = [
  { id: 1, type: "info", title: "New Crop Added", description: "A new crop (Wheat) has been added to the field.", timestamp: "2024-12-24 12:00 PM", read: false },
  { id: 2, type: "warning", title: "Low Soil Moisture", description: "The soil moisture level in Field 3 is below 30%.", timestamp: "2024-12-23 3:00 PM", read: false },
  { id: 3, type: "success", title: "Irrigation System Activated", description: "The irrigation system has been activated in Field 2.", timestamp: "2024-12-22 9:00 AM", read: true },
  { id: 4, type: "error", title: "Pesticide Overuse", description: "Excessive pesticide usage detected in Field 5.", timestamp: "2024-12-21 7:30 PM", read: false },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(dummyNotifications);
  const [filter, setFilter] = useState("all");

  // Mark a notification as read or unread
  const toggleReadStatus = (id) => {
    setNotifications(notifications.map((notif) =>
      notif.id === id ? { ...notif, read: !notif.read } : notif
    ));
  };

  // Delete a notification
  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  // Filter notifications based on type
  const filteredNotifications = notifications.filter((notif) =>
    filter === "all" ? true : notif.type === filter
  );

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Notifications</h1>

      {/* Filter Section */}
      <div className="mb-6">
        <span className="font-semibold">Filter by: </span>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-lg p-2 ml-2"
        >
          <option value="all">All</option>
          <option value="info">Info</option>
          <option value="warning">Warning</option>
          <option value="success">Success</option>
          <option value="error">Error</option>
        </select>
      </div>

      {/* Notifications List */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Notification List</h2>

        {filteredNotifications.length === 0 ? (
          <p>No notifications to display.</p>
        ) : (
          <ul>
            {filteredNotifications.map((notif) => (
              <li
                key={notif.id}
                className={`flex items-center justify-between p-4 mb-4 rounded-lg shadow ${notif.read ? "bg-gray-100" : "bg-blue-50"}`}
              >
                <div className="flex items-center">
                  <div className={`w-8 h-8 flex justify-center items-center rounded-full ${notif.type === "info" ? "bg-blue-500" : notif.type === "warning" ? "bg-yellow-500" : notif.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
                    <FaBell className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">{notif.title}</h3>
                    <p className="text-sm text-gray-500">{notif.description}</p>
                    <span className="text-xs text-gray-400">{notif.timestamp}</span>
                  </div>
                </div>

                {/* Mark as Read/Unread */}
                <button
                  onClick={() => toggleReadStatus(notif.id)}
                  className="ml-4 text-sm text-blue-500 hover:text-blue-700"
                >
                  {notif.read ? (
                    <BsFillCheckCircleFill className="inline text-green-500" />
                  ) : (
                    "Mark as Read"
                  )}
                </button>

                {/* Delete Notification */}
                <button
                  onClick={() => deleteNotification(notif.id)}
                  className="ml-4 text-sm text-red-500 hover:text-red-700"
                >
                  <FaTrashAlt />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Notifications;
