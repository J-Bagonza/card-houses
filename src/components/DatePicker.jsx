import { useState, useEffect } from "react";

const DatePicker = ({ type, selectedDate, setSelectedDate }) => {
  const [availableDates, setAvailableDates] = useState([]);

  // Fetch available dates for room availability
  useEffect(() => {
    const fetchAvailableDates = async () => {
      try {
        const response = await fetch("https://cardlabs.pythonanywhere.com/api/v1/available-dates");
        const data = await response.json();
        setAvailableDates(data); // Assuming API returns an array of dates
      } catch (error) {
        console.error("Error fetching available dates:", error);
      }
    };

    fetchAvailableDates();
  }, []);

  // Handle date change
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
      className="border p-2 w-full rounded-md"
      min={type === "checkOut" ? selectedDate.checkIn : ""}
      list="available-dates"
    />
  );
};

export default DatePicker;