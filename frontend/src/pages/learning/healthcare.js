import React from "react";
import Navbar from "@/components/learning/Navbar";
import ModuleCard from "@/components/learning/ModulesCard";

const Health = () => {
  return (
    <div className="">
      <Navbar link={"healthcare"} />
      <div className="w-full flex flex-col px-[20px] ">
        <h1 className="text-3xl font-bold">HealthCare Plan</h1>

        <div className="flex flex-row ">
          {/* <div className="prompt_layout">
            {modules.map((module) => (
              <ModuleCard
                number={module.number}
                color={module.color}
                title={module.title}
                content={module.content}
              />
            ))}
          </div> */}
          <ModuleCard
            number={1}
            title={"Hello"}
            content={
              "jhgdjgdjhd dhkhhcdhhdcw  j wdckwhwdc kjcedhkdcwhdcw kjckdcwhcwhd hkwcd wdcucwdkhwdckc"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Health;
