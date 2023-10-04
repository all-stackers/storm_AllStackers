import React from "react";
import prenatalCenters from "@/utils/prenatalCenters";

const PrenatalCenter = () => {
  return (
    <div className="p-[15px]">
      <h1 className="text-2xl font-bold">Appointments</h1>
      
      


      <h1 className="text-2xl font-bold">Nearby Prenatal Center</h1>
      <div className="flex overflow-x-auto space-x-2 py-[10px]">
        {prenatalCenters.map((item) => (
          <div
            key={item._id}
            className="min-w-[120px] h-[100px] rounded-lg p-4 border shadow bg-[#f2f2f2]"
          >
            <h2 class="text-[10px] min-h-[45px] font-semibold mb-2">
              {item.name}
            </h2>
            {/* <p class="text-gray-600 mb-2">
              Address: {item.address}
            </p> */}
            <p class="text-[8px] text-gray-600">Distance: {item.distance}</p>
            <p class="text-[8px] text-gray-600">Ratings: {item.ratings}</p>
          </div>
        ))}
        {/* <div className="w-[800px]">02</div>
        <div className="w-[800px]">03</div>
        <div className="w-[800px]">04</div>
        <div className="w-[800px]">05</div>
        <div className="w-[800px]">06</div>
        <div className="w-[800px]">07</div>
        <div className="w-[800px]">08</div>
        <div className="w-[800px]">09</div>
        <div className="w-[800px]">10</div> */}
      </div>
    </div>
  );
};

export default PrenatalCenter;
