import { useState, useEffect } from "react";

const DatePicker = ({ type, selectedDate, setSelectedDate }) => {
  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    const fetchAvailableDates = async () => {
      try {
        const response = await fetch("https://cardlabs.pythonanywhere.com/api/v1/available-dates");
        const data = await response.json();
        setAvailableDates(data);
      } catch (error) {
        console.error("Error fetching available dates:", error);
      }
    };

    fetchAvailableDates();
  }, []);

  const handleDateChange = async (event) => {
    const newDate = event.target.value;
    setSelectedDate((prev) => ({ ...prev, [type]: newDate }));

    try {
      await fetch("https://cardlabs.pythonanywhere.com/api/v1/save-date", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [type]: newDate }),
      });
    } catch (error) {
      console.error("Error saving date:", error);
    }
  };

  return (
    <input
      type="date"
      value={selectedDate[type] || ""}
      onChange={handleDateChange}
      className="border p-3 w-full rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      min={type === "checkOut" ? selectedDate.checkIn : ""}
    />
  );
};

export default DatePicker;