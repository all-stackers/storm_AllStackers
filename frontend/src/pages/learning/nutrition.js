import React from "react";
import Navbar from "@/components/learning/Navbar";
import ModuleCard from "@/components/learning/ModulesCard";
import nutritionModules from "@/utils/nutritionModules";

const Nutrition = () => {
  return (
    <div className="">
      <Navbar link={"nutrition"} />
      <div className="w-full flex flex-col px-[20px] ">
        <h1 className="text-3xl my-10 font-bold">Nutrition Plan</h1>

        <div className="flex flex-row ">
          <div className="grid grid-cols-1 gap-y-8">
            {nutritionModules.map((module) => (
              <ModuleCard
                number={module.number}
                title={module.title}
                content={module.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
