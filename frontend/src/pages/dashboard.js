import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "@/context/appContext";

const dashboard = () => {
  const router = useRouter();
  const cuurentWeek = 3;
  const weeklyData = {
    1: {
      Title: "Early Pregnancy",
      Reminders: [
        "Confirm pregnancy with a home pregnancy test.",
        "Schedule your first prenatal appointment with a healthcare provider.",
        "Begin taking prenatal vitamins with folic acid.",
        "Focus on a healthy diet and hydration.",
        "Avoid smoking, alcohol, and recreational drugs.",
      ],
    },
    2: {
      Title: "First Trimester",
      Reminders: [
        "Attend your first prenatal appointment.",
        "Discuss any morning sickness with your healthcare provider.",
        "Engage in light exercise like walking or prenatal yoga.",
        "Pay attention to your diet and eat nutritious foods.",
        "Continue avoiding harmful substances.",
      ],
    },
    3: {
      Title: "First Trimester Continues",
      Reminders: [
        "Attend your second prenatal appointment.",
        "Discuss any changes or concerns with your healthcare provider.",
        "Some women have their first ultrasound during this period.",
        "Rest and get enough sleep to combat fatigue.",
      ],
    },
    4: {
      Title: "Second Trimester Begins",
      Reminders: [
        "Consider a regular exercise routine suitable for pregnancy.",
        "Some women have an anatomy scan to check the baby's development.",
        "Manage symptoms like heartburn and constipation.",
        "Stay hydrated, and continue taking prenatal vitamins.",
      ],
    },
    5: {
      Title: "Second Trimester Continues",
      Reminders: [
        "Attend your third prenatal appointment.",
        "Discuss any recent changes or concerns.",
        "Begin to feel your baby's movements.",
        "Start considering baby names and nursery ideas.",
      ],
    },
    6: {
      Title: "Second Trimester Progresses",
      Reminders: [
        "Attend your fourth prenatal appointment.",
        "Discuss any glucose screening or other tests.",
        "Begin to feel more noticeable baby movements.",
        "Consider prenatal classes and birthing plans.",
      ],
    },
    7: {
      Title: "Third Trimester Begins",
      Reminders: [
        "Attend your fifth prenatal appointment.",
        "Discuss any late-pregnancy concerns.",
        "Monitor for signs of swelling or preeclampsia.",
        "Register for baby items and complete nursery preparations.",
      ],
    },
    8: {
      Title: "Third Trimester Continues",
      Reminders: [
        "Attend your sixth prenatal appointment.",
        "Discuss your birth plan and pain relief options.",
        "Continue monitoring baby's movements.",
        "Consider taking childbirth classes.",
      ],
    },
    9: {
      Title: "Preparing for Labor",
      Reminders: [
        "Attend your seventh prenatal appointment.",
        "Pack your hospital bag with essentials.",
        "Discuss your birth plan with your support partner.",
        "Learn about signs of labor and when to call your healthcare provider.",
      ],
    },
    10: {
      Title: "Full Term",
      Reminders: [
        "Attend your eighth prenatal appointment.",
        "Monitor for any signs of labor.",
        "Stay patient as you approach your due date.",
        "Finalize baby preparations and hospital plans.",
      ],
    },
    11: {
      Title: "Beyond Due Date",
      Reminders: [
        "Continue monitoring for signs of labor.",
        "Consult regularly with your healthcare provider.",
        "Discuss labor induction if necessary.",
        "Remain patient as your due date passes.",
      ],
    },
  };
  const auth = useContext(AppContext);
  const { userData, setUserData } = auth;
  const [currentDay, setcurrentDay] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [difference, setDifference] = useState(0);
  useEffect(() => {
    if (!auth.checkingIfLoggedIn && !auth.isUserLoggedIn) {
      router.push("/login");
    } else setUserData(userData);
    console.log("details", userData);
    setDate1(userData?.dueDate);
    const d = new Date();
    setDate2(d);

    const date1Obj = new Date(date1);
    const date2Obj = new Date(date2);

    if (!isNaN(date1Obj) && !isNaN(date2Obj)) {
      const timeDifference = Math.abs(date2Obj - date1Obj);
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
      setDifference(daysDifference);
      const cDate = Math.ceil(((224 - daysDifference) / 224) * 100);
      setcurrentDay(cDate);
      setWeeks(Math.floor((224 - cDate) / 7));
    } else {
      setDifference("Invalid date input(s).");
    }
  }, [auth]);

  // Function to calculate the difference between the two dates

  console.log("difference", difference);

  return (
    <div className="h-[100%] p-[20px]">
      <div className="flex overflow-x-auto space-x-2 h-[70px] justify-center items-end">
        <div className=" h-[100%] min-w-[80px] flex flex-col justify-center items-center">
          <h2 className="block font-bold text-[#b0aeae]">Week</h2>
          <h2 className="block font-bold text-[#b0aeae]">{weeks - 2}</h2>
        </div>
        <div className=" h-[100%] min-w-[80px] flex flex-col justify-center items-center">
          <h2 className="block font-bold text-[#b0aeae]">Week</h2>
          <h2 className="block font-bold text-[#b0aeae]">{weeks - 1}</h2>
        </div>
        <div className=" h-[100%] min-w-[80px] flex flex-col justify-center items-center">
          <h2 className="block font-bold text-[#265eba]">Week</h2>
          <h2 className="block font-bold text-[#265eba]">{weeks}</h2>
        </div>
        <div className=" h-[100%] min-w-[80px] flex flex-col justify-center items-center">
          <h2 className="block font-bold text-[#b0aeae]">Week</h2>
          <h2 className="block font-bold text-[#b0aeae]">{weeks + 1}</h2>
        </div>
        <div className=" h-[100%] min-w-[80px] flex flex-col justify-center items-center">
          <h2 className="block font-bold text-[#b0aeae]">Week</h2>
          <h2 className="block font-bold text-[#b0aeae]">{weeks + 2}</h2>
        </div>
      </div>
      <div className="flex flex-row items-center justify-around">
        <div className="w-[40px]">
          <img src="/assets/moduleImages/tape.png"></img>
          <p className="text-gray-500 text-[12px]">39.9 cm</p>
          <p className="text-gray-500 text-[10px]">Length</p>
        </div>
        <div className="relative w-fit h-[250px] mr-[10px] mb-[10px] flex flex-col justify-center items-center">
          <img
            className="absolute bottom-[35%]  w-[100px] h-[100px] rounded-[50px]"
            src="/assets/fetus.png"
            alt=""
          />
          <div className=" w-[200px] h-[200px] flex flex-col justify-center items-center ">
            <div style={{ width: 170, height: 170 }}>
              <CircularProgressbar
                value={currentDay}
                backgroundPadding={6}
                styles={buildStyles({
                  pathColor: "#265eba",
                  trailColor: "transparent",
                  textSize: "14px",
                })}
              />
            </div>
          </div>
          <h1 className="text-gray-500 font-bold">{currentDay} days to go!</h1>
        </div>
        <div className="w-[35px]">
          <img src="/assets/moduleImages/weight.png"></img>
          <p className="text-gray-500 text-[12px]">1.3-1.6 kg</p>
          <p className="text-gray-500 text-[10px]">Weight</p>
        </div>
      </div>

      <div className="rounded-[10px] py-[10px]">
        <h1 className="text-[17px] font-bold mb-[15px] ml-[10px]">Services</h1>
        <div className="flex overflow-x-auto space-x-3 h-[100px] py-[10px] rounded-[10px]">
          <div
            className="h-[100%] min-w-[80px] bg-[#58ce98] rounded-[10px]  shadow-2xl cursor-pointer flex justify-center items-center p-[5px]"
            onClick={() => router.push("/prenatal-care")}
          >
            <h1 className="text-[white] font-bold text-center">
              Prenatal Care
            </h1>
          </div>
          <div
            className="h-[100%] min-w-[80px] bg-[#f7adc6] rounded-[10px]  shadow-2xl cursor-pointer flex justify-center items-center p-[5px]"
            onClick={() => router.push("/dailyfood")}
          >
            <h1 className="text-[white] font-bold text-center">Ai Food Bot</h1>
          </div>
          <div
            className="h-[100%] min-w-[80px] bg-[#ffbc38] rounded-[10px]  shadow-2xl cursor-pointer flex justify-center items-center p-[5px]"
            onClick={() => router.push("/vitals/data")}
          >
            <h1 className="text-[white] font-bold text-center">
              Health Matrics
            </h1>
          </div>
          <div
            className="h-[100%] min-w-[80px] bg-[#ac9cf9] rounded-[10px]  shadow-2xl cursor-pointer flex justify-center items-center p-[5px]"
            onClick={() => router.push("/afterbirth/massage/dash")}
          >
            <h1 className="text-[white] font-bold text-center">
              Massage Technique
            </h1>
          </div>
          <div className="h-[100%] min-w-[80px] bg-[#58ce98] rounded-[10px]  shadow-2xl cursor-pointer flex justify-center items-center p-[5px]">
            <h1 className="text-[white] font-bold text-center">
              Nearest Hospitals
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#d2e7d4] w-[100%] rounded-[10px] px-[20px] py-[10px]">
        <div className="mb-[25px] mt-[10px]">
          <h1 className="text-[23px] font-bold text-[#151f16]">
            {weeklyData[cuurentWeek].Title}
          </h1>
        </div>
        {weeklyData[cuurentWeek].Reminders.map((option, index) => (
          <div key={index}>
            <h1 className="text-[#151f16] my-[10px] font-lg">{option}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default dashboard;
