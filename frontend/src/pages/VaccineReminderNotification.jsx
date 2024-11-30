// VaccineReminderNotification.js (React Component)

import { useEffect } from 'react';

const VaccineReminderNotification = () => {
  // Request notification permission when the component mounts
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          console.log("Notification permission granted!");
        }
      });
    }
  }, []);

  // Function to show the notification
  const showVaccineReminderNotification = (message) => {
    if (Notification.permission === "granted") {
      new Notification("Vaccine Reminder", {
        body: message,
        icon: "/path/to/vaccine-icon.png", // Optional: Add an icon
      });
    } else {
      console.log("Permission for notifications not granted");
    }
  };

  // Button click handler to trigger notification
  const handleNotification = () => {
    showVaccineReminderNotification("Reminder: It's time for your pet's vaccine!");
  };

  return (
    <div>
      <h2>Vaccine Reminder</h2>
      <button onClick={handleNotification}>
        Show Vaccine Reminder
      </button>
    </div>
  );
};

export default VaccineReminderNotification;
