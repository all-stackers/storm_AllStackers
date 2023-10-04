import React from "react";
import Navbar from "@/components/learning/Navbar";
import videos from "@/utils/workoutVideos";
import VideoCard from "@/components/learning/VideoCard";

const Workouts = () => {
  return (
    <div className="">
      <Navbar link={"workouts"} />
      <div className="w-full flex flex-col px-[20px] ">
        <h1 className="text-3xl font-bold">Workout Plan</h1>

        <div className="flex overflow-x-auto space-x-2 py-[10px]">
          {videos.map((item) => (
            <VideoCard
              title={item.title}
              link={item.url}
              description={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workouts;
