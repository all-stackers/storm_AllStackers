import React from "react";
import prenatalCenters from "@/utils/prenatalCenters";

import { useState, useEffect } from "react";

const PrenatalCenter = () => {
  const [activeDay, setActiveDay] = useState(5);
  const [jsonData, setJsonData] = useState(null);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    fetch("/schedule.json")
      .then((response) => response.json())
      .then((data) => {
        // Update the component's state with the JSON data
        setJsonData(data);

        console.log(data)

        setDisplayData(data[1]);
      });
  }, []);
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
    {
      lightRed: "#ffc2c2",
      darkRed: "#ff5353",
    },
  ];

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-row min-h-[60px] items-center justify-center relative">
        <div className=" absolute left-[20px]" onClick={null}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        <div className=" font-semibold text-[20px]">Prenatal Care</div>
      </div>

      <div className="flex flex-col items-center bg-[#ffebea] py-[20px] box-border">
        <div className="flex flex-row gap-x-[25px] text-[#7d7d80]">
          <div
            className={`flex flex-col gap-y-[10px] justify-center ${
              activeDay === 1
                ? "rounded-lg px-[6px] py-[10px] box-border bg-white font-semibold" // Highlight the current date with a blue background
                : ""
            }`}
            onClick={() => {
              setActiveDay(1);
              setDisplayData([]);
            }}
          >
            <div className="text-center">S</div>
            <div className="text-[#de8f90]">01</div>
          </div>
          <div
            className={`flex flex-col gap-y-[10px] justify-center ${
              activeDay === 2
                ? "rounded-lg px-[6px] py-[10px] box-border bg-white font-semibold" // Highlight the current date with a blue background
                : ""
            }`}
            onClick={() => {
              setActiveDay(2);
              setDisplayData([]);
            }}
          >
            <div className="text-center">M</div>
            <div className="text-[#de8f90]">02</div>
          </div>
          <div
            className={`flex flex-col gap-y-[10px] justify-center ${
              activeDay === 3
                ? "rounded-lg px-[6px] py-[10px] box-border bg-white font-semibold" // Highlight the current date with a blue background
                : ""
            }`}
            onClick={() => {
              setActiveDay(3);
              setDisplayData([]);
            }}
          >
            <div className="text-center">T</div>
            <div className="text-[#de8f90]">03</div>
          </div>
          <div
            className={`flex flex-col gap-y-[10px] justify-center ${
              activeDay === 4
                ? "rounded-lg px-[6px] py-[10px] box-border bg-white font-semibold" // Highlight the current date with a blue background
                : ""
            }`}
            onClick={() => {
              setActiveDay(4);
              setDisplayData(jsonData[0]);
            }}
          >
            <div className="text-center">W</div>
            <div className="text-[#de8f90]">04</div>
          </div>
          <div
            className={`flex flex-col gap-y-[10px] justify-center ${
              activeDay === 5
                ? "rounded-lg px-[6px] py-[10px] box-border bg-white font-semibold" // Highlight the current date with a blue background
                : ""
            }`}
            onClick={() => {
              setActiveDay(5);
              setDisplayData(jsonData[1]);
            }}
          >
            <div className="text-center">T</div>
            <div className="text-[#de8f90]">05</div>
          </div>
          <div
            className={`flex flex-col gap-y-[10px] justify-center ${
              activeDay === 6
                ? "rounded-lg px-[6px] py-[10px] box-border bg-white font-semibold" // Highlight the current date with a blue background
                : ""
            }`}
            onClick={() => {
              setActiveDay(6);
              setDisplayData(jsonData[2]);
            }}
          >
            <div className="text-center">F</div>
            <div className="text-[#de8f90]">06</div>
          </div>
          <div
            className={`flex flex-col gap-y-[10px] justify-center ${
              activeDay === 7
                ? "rounded-lg px-[6px] py-[10px] box-border bg-white font-semibold" // Highlight the current date with a blue background
                : ""
            }`}
            onClick={() => {
              setActiveDay(7);
              setDisplayData([]);
            }}
          >
            <div className="text-center">S</div>
            <div className="text-[#de8f90]">07</div>
          </div>
          <div
            className={`flex flex-col gap-y-[10px] justify-center ${
              activeDay === 8
                ? "rounded-lg px-[6px] py-[10px] box-border bg-white font-semibold" // Highlight the current date with a blue background
                : ""
            }`}
            onClick={() => {
              setActiveDay(8);
              setDisplayData([]);
            }}
          >
            <div className="text-center">S</div>
            <div className="text-[#de8f90]">08</div>
          </div>
          <div
            className={`flex flex-col gap-y-[10px] justify-center ${
              activeDay === 9
                ? "rounded-lg px-[6px] py-[10px] box-border bg-white font-semibold" // Highlight the current date with a blue background
                : ""
            }`}
            onClick={() => {
              setActiveDay(9);
              setDisplayData([]);
            }}
          >
            <div className="text-center">M</div>
            <div className="text-[#de8f90]">09</div>
          </div>
        </div>
      </div>
      <div className="px-[15px]">
        <div className="flex flex-col">
          <div className="mt-4 mb-2">
            <div className="flex flex-row mb-5 items-center justify-between">
              <h1 className="text-2xl font-bold">
                {activeDay == 5
                  ? "Toaday's "
                  : activeDay == 6
                  ? "Tomorrow's "
                  : "Past "}
                Schedules
              </h1>
              <button className="bg-[#f07a7a] hover:bg-[#cf6868] hover:text-gray-200 text-white font-bold py-2 px-4 rounded">
                Add Event
              </button>
            </div>
            {jsonData != null ? (
              <>
                {displayData.length > 0 ? (
                  <div className=""
                    key={displayData.prenatal_center}
                  >
                    {displayData.map((item, index) => {
                      return (
                      <div
                        key={index}
                        className={`mb-4 w-full flex flex-row rounded-lg h-[100px] ${
                          item.visited === null
                            ? "bg-[#BBDEFB]"
                            : item.visited === true
                            ? "bg-[#C6EFAD]"
                            : item.visited === false
                            ? "bg-[#ffc2c2]"
                            : ""
                        }`}
                      >
                        <div
                          className={`w-[10px] h-full rounded-l-lg mr-5  ${
                            item.visited === null
                              ? "bg-[#1E88E5]"
                              : item.visited === true
                              ? "bg-[#6ABF69]"
                              : item.visited === false
                              ? "bg-[red]"
                              : ""
                          }`}
                          onClick={() => {
                            console.log("clicked");
                            const jsonDataCopy = [...jsonData]; // Create a shallow copy of jsonData
                            jsonDataCopy[activeDay - 4][index].visited = true;
                            console.log(jsonDataCopy);
                            setJsonData(jsonDataCopy);
                            setDisplayData(jsonDataCopy[activeDay - 4]);
                          }}
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
                    )})}
                  </div>
                ) : (
                  <p>No Data</p>
                )}
              </>
            ) : (
              <p>Loading Data</p>
            )}
          </div>
        </div>

        {/* <h1 className="text-2xl mt-5 font-bold">Nearby Prenatal Center</h1>
        <div className="flex overflow-x-auto space-x-2 py-[10px]">
          {prenatalCenters.map((item) => (
            <div
              key={item._id}
              className="min-w-[200px] h-[170px] rounded-lg p-4 border shadow bg-[#f2f2f2]"
            >
              <h2 class="text-xl h-[80px] font-semibold mb-2">{item.name}</h2>
              <p class="text-gray-600">Distance: {item.distance}</p>
              <p class="text-gray-600">Ratings: {item.ratings}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default PrenatalCenter;
