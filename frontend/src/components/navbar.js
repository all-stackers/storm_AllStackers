import { AppContext } from "@/context/appContext";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();

  const appContext = useContext(AppContext);
  const { userData, setUserData } = appContext;

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    appContext.isUserLoggedIn
  );
  const greeting = getGreeting();

  useEffect(() => {
    setIsUserLoggedIn(appContext.isUserLoggedIn);
    setUserData(userData);
  }, [appContext]);

  const onLoginClickHandler = () => {
    if (router.pathname !== "/login") router.push("/login");
  };

  const onSignupClickHandler = () => {
    if (router.pathname !== "/signup") router.push("/signup");
  };

  const onLogoutClickHandler = () => {
    localStorage.removeItem("access_token");
    appContext.setIsUserLoggedIn(false);
    setUserData({});
    router.push("/login");
  };

  function getGreeting() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 4 && currentHour < 12) {
      return "Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  }

  return (
    <nav className="w-full h-[80px] flex flex-row items-center box-border border-b-[1px] border-[#e4e4e7] px-[30px] text-dark1">
      <div
        className="flex flex-col font-medium font-Lexend text-[20px] cursor-pointer"
        onClick={() => {
          router.push("/dashboard");
        }}
      >
        <p className="text-gray-700 text-[15px]">Good {greeting}</p>
        <p className="text-xl font-bold">{userData?.name}</p>
      </div>

      {/* <div 
                className={`flex flex-row gap-x-[15px] text-[22px] cursor-pointer sm:text-[18px]`}
                onClick={() => {router.push('/')}}
            >
                <img src={`${darkMode ? "/assets/logoWhite.svg" : "/assets/logo.svg"}`} alt="logo" className="w-[20px] sm:w-[15px]"/>
                <span>Appname</span>
            </div> */}

      {router.pathname !== "/login" && router.pathname !== "/signup" && (
        <div className="flex flex-row box-border ml-auto gap-x-[20px]">
          {!isUserLoggedIn ? (
            <>
              <button
                className="flex flex-row gap-x-[10px] items-center outline-none text-purple-dark border-[1px] border-purple-dark font-semibold px-[22px] py-[8px] rounded-[5px] text-[14px] box-border"
                onClick={onLoginClickHandler}
              >
                Login
              </button>

              <button
                className="flex flex-row gap-x-[10px] items-center outline-none text-white bg-purple-dark font-medium px-[22px] py-[8px] rounded-[5px] text-[14px] box-border"
                onClick={onSignupClickHandler}
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              className="flex flex-row gap-x-[10px] items-center outline-none text-white bg-purple-dark font-medium px-[22px] py-[8px] rounded-[5px] text-[14px] box-border"
              onClick={onLogoutClickHandler}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
