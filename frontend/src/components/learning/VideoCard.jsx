import React from "react";
import Link from "next/link";

const VideoCard = ({ title, link, description }) => {
  return (
    <div className="min-w-[300px]">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <div className="flex flex-col w-full">
            <div className="border border-1 my-[5px] p-[5px]">
              <iframe
                className="mx-auto w-full h-[220px]"
                src={link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                fullscreen
              ></iframe>
            </div>
            <p className="text-xl hover:text-[#1669C9] font-bold text-[#222]">
              {title}
            </p>
          </div>
        </div>
      </div>

      <p className="my-4 text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default VideoCard;
