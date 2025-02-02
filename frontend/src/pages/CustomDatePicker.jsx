import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    if (date > new Date()) {
      alert("You cannot select a future date.");
      return;
    }
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <label className="text-lg font-semibold">Select a Date:</label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        maxDate={new Date()}
        className="border p-2 rounded-lg shadow-md"
      />
    </div>
  );
};

export default CustomDatePicker;
