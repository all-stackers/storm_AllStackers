import React from "react";
import prenatalCenters from "@/utils/prenatalCenters";
import Calendar from "@/components/Calendar";
import schedules from "@/utils/schedules";

const PrenatalCenter = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const colors = [
    {
      light: "#C6EFAD", // Lighter shade of green
      dark: "#6ABF69", // Darker shade of green
    },
    {
      lightBlue: "#BBDEFB",
      darkBlue: "#1E88E5",
    },
    {
      lightOrange: "#FFE082",
      darkOrange: "#FFB74D",
    },
    {
      lightYellow: "#ffd62f4a",
      darkYellow: "#FFD600",
    },
  ];

  return (
    <div className="p-[15px]">
      <h1 className="text-4xl mb-4 font-bold">Appointments</h1>

      <div className="flex flex-col">
        <Calendar year={year} month={month} currentDay={currentDay} />
        <div className="my-2">
          <div className="flex flex-row mb-5 items-center justify-between">
            <h1 className="text-2xl font-bold">Schedules</h1>
            <button className="bg-[#f07a7a] hover:bg-[#cf6868] hover:text-gray-200 text-white font-bold py-2 px-4 rounded">
              Add Event
            </button>
          </div>
          {schedules.map((item, index) => (
            <div
              key={index}
              className={`bg-[#BBDEFB] mb-2 w-full flex flex-row rounded-lg h-[100px]`}
            >
              <div
                className={`w-[10px] h-full rounded-l-lg mr-5 bg-[#1E88E5]`}
              ></div>
              <div className="w-full p-2">
                <h1 className="text-xl font-bold">{item.title}</h1>
                <p className="font-light text-[16px] text-gray-600">
                  {item.prenatal_center}
                </p>
                <div className="flex fex-row mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="ml-2">{item.time_span}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className="text-2xl font-bold">Nearby Prenatal Center</h1>
      <div className="flex overflow-x-auto space-x-2 py-[10px]">
        {prenatalCenters.map((item) => (
          <div
            key={item._id}
            className="min-w-[200px] h-[200px] rounded-lg p-4 border shadow bg-[#f2f2f2]"
          >
            <h2 class="text-xl h-[110px] font-semibold mb-2">{item.name}</h2>
            <p class="text-gray-600">Distance: {item.distance}</p>
            <p class="text-gray-600">Ratings: {item.ratings}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrenatalCenter;
