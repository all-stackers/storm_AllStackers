import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React, { useState, useEffect } from 'react';



const dashboard = () => {
    const cuurentWeek = 3;
    const weeklyData = {
        1: {
            "Title": "Early Pregnancy",
            "Reminders": [
                "Confirm pregnancy with a home pregnancy test.",
                "Schedule your first prenatal appointment with a healthcare provider.",
                "Begin taking prenatal vitamins with folic acid.",
                "Focus on a healthy diet and hydration.",
                "Avoid smoking, alcohol, and recreational drugs."
            ]
        },
        2: {
            "Title": "First Trimester",
            "Reminders": [
                "Attend your first prenatal appointment.",
                "Discuss any morning sickness with your healthcare provider.",
                "Engage in light exercise like walking or prenatal yoga.",
                "Pay attention to your diet and eat nutritious foods.",
                "Continue avoiding harmful substances."
            ]
        },
        3: {
            "Title": "First Trimester Continues",
            "Reminders": [
                "Attend your second prenatal appointment.",
                "Discuss any changes or concerns with your healthcare provider.",
                "Some women have their first ultrasound during this period.",
                "Rest and get enough sleep to combat fatigue."
            ]
        },
        4: {
            "Title": "Second Trimester Begins",
            "Reminders": [
                "Consider a regular exercise routine suitable for pregnancy.",
                "Some women have an anatomy scan to check the baby's development.",
                "Manage symptoms like heartburn and constipation.",
                "Stay hydrated, and continue taking prenatal vitamins."
            ]
        },
        5: {
            "Title": "Second Trimester Continues",
            "Reminders": [
                "Attend your third prenatal appointment.",
                "Discuss any recent changes or concerns.",
                "Begin to feel your baby's movements.",
                "Start considering baby names and nursery ideas."
            ]
        },
        6: {
            "Title": "Second Trimester Progresses",
            "Reminders": [
                "Attend your fourth prenatal appointment.",
                "Discuss any glucose screening or other tests.",
                "Begin to feel more noticeable baby movements.",
                "Consider prenatal classes and birthing plans."
            ]
        },
        7: {
            "Title": "Third Trimester Begins",
            "Reminders": [
                "Attend your fifth prenatal appointment.",
                "Discuss any late-pregnancy concerns.",
                "Monitor for signs of swelling or preeclampsia.",
                "Register for baby items and complete nursery preparations."
            ]
        },
        8: {
            "Title": "Third Trimester Continues",
            "Reminders": [
                "Attend your sixth prenatal appointment.",
                "Discuss your birth plan and pain relief options.",
                "Continue monitoring baby's movements.",
                "Consider taking childbirth classes."
            ]
        },
        9: {
            "Title": "Preparing for Labor",
            "Reminders": [
                "Attend your seventh prenatal appointment.",
                "Pack your hospital bag with essentials.",
                "Discuss your birth plan with your support partner.",
                "Learn about signs of labor and when to call your healthcare provider."
            ]
        },
        10: {
            "Title": "Full Term",
            "Reminders": [
                "Attend your eighth prenatal appointment.",
                "Monitor for any signs of labor.",
                "Stay patient as you approach your due date.",
                "Finalize baby preparations and hospital plans."
            ]
        },
        11: {
            "Title": "Beyond Due Date",
            "Reminders": [
                "Continue monitoring for signs of labor.",
                "Consult regularly with your healthcare provider.",
                "Discuss labor induction if necessary.",
                "Remain patient as your due date passes."
            ]
        }
    }
    return (
        <div className='h-[100%] p-[20px]'>
            <div className='flex overflow-x-auto space-x-2 h-[70px] py-[10px]'>

                <div className=' h-[100%] min-w-[80px] flex flex-col justify-center items-center'>
                <h2 className='block font-bold text-[black]'>Week</h2>
                    <h2 className='block font-bold text-[black]'>1</h2>
                    
                </div>
                <div className=' h-[100%] min-w-[80px] flex flex-col justify-center items-center'>
                    <h2 className='block font-bold text-[#b0aeae]'>Week</h2>
                    <h2 className='block font-bold text-[#b0aeae]'>2</h2>
                </div>
                <div className=' h-[100%] min-w-[80px] flex flex-col justify-center items-center'>
                <h2 className='block font-bold text-[#b0aeae]'>Week</h2>
                    <h2 className='block font-bold text-[#b0aeae]'>3</h2>
                </div>
                <div className=' h-[100%] min-w-[80px] flex flex-col justify-center items-center'>
                    <h2 className='block font-bold text-[#b0aeae]'>Week</h2>
                    <h2 className='block font-bold text-[#b0aeae]'>4</h2>
                </div>
            </div>
            <div className='w-[100%] h-[250px]  my-[10px] flex justify-center items-center'>
                <img className='absolute w-[100px] h-[100px]' src='/assets/infant.png' alt="" />
                <div className=' w-[250px] h-[200px] flex justify-center items-center'>


                    <div style={{ width: 170, height: 170 }}>
                        <CircularProgressbar
                            value="80"
                            backgroundPadding={6}
                            styles={buildStyles({
                                pathColor: "#265eba",
                                trailColor: "transparent",
                                textSize: "14px"
                            })}
                        />

                    </div>


                </div>
            </div>
            <div className='rounded-[10px] py-[10px]'>

                <h1 className='text-[17px] font-bold mb-[15px] ml-[10px]'>Services</h1>
                <div className="flex overflow-x-auto space-x-3 h-[100px] py-[10px] rounded-[10px]">

                    <div className='h-[100%] min-w-[80px] bg-[#97f7cc] rounded-[10px]  shadow-2xl'></div>
                    <div className='h-[100%] min-w-[80px] bg-[#f7adc6] rounded-[10px]  shadow-2xl'></div>
                    <div className='h-[100%] min-w-[80px] bg-[#ffbc38] rounded-[10px]  shadow-2xl'></div>
                    <div className='h-[100%] min-w-[80px] bg-[#ac9cf9] rounded-[10px]  shadow-2xl'></div>
                    <div className='h-[100%] min-w-[80px] bg-[#97f7cc] rounded-[10px]  shadow-2xl'></div>

                </div>

            </div>
            <div className='bg-[#d2e7d4] w-[100%] rounded-[10px] px-[20px] py-[10px]'>
                <div className='mb-[25px] mt-[10px]'>
                    <h1 className='text-[23px] font-bold text-[#151f16]'>{weeklyData[cuurentWeek].Title}</h1>

                </div>
                {weeklyData[cuurentWeek].Reminders.map((option, index) => (
                    <div key={index}>
                        <h1 className='text-[#151f16] my-[10px] font-lg' >{option}</h1>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default dashboard