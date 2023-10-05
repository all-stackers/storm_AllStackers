import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = ({ link }) => {
  return (
    <>
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

        <div className=" font-semibold text-[20px]">Learning Modules</div>
      </div>
      <div className="text-[18px]">
        <nav className="h-[80px] flex flex-row items-center">
          <div className="flex flex-row box-border mx-auto gap-x-[40px] px-[20px]">
            <Link href="/learning/nutrition">
              {link == "nutrition" ? (
                <p className="text-blue-500">Nutrition</p>
              ) : (
                <p className="">Nutrition</p>
              )}
            </Link>
            <Link href="/learning/healthcare">
              {link == "healthcare" ? (
                <p className="text-blue-500">Health</p>
              ) : (
                <p className="">Health</p>
              )}
            </Link>
            <Link href="/learning/workouts">
              {link == "workouts" ? (
                <p className="text-blue-500">Workouts</p>
              ) : (
                <p className="">Workouts</p>
              )}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
