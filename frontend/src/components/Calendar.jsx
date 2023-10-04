import React from "react";

const Calendar = ({ year, month, currentDay }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="bg-[#f8f8f8] w-full p-4">
      <div className="text-center text-xl font-semibold mb-4">
        {new Date(year, month).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
        })}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center text-gray-600">
            {day}
          </div>
        ))}
        {days.map((day) => (
          <div
            key={day}
            className={`text-center p-2 rounded-md ${
              day === currentDay
                ? "bg-[#f07a7a]" // Highlight the current date with a blue background
                : ""
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
