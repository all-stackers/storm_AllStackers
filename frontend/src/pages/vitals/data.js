import React, { useState, useEffect } from 'react';

function data() {
 
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [heartRate, setHeartRate] = useState(0);
  const [weight, setWeight] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  // const apiUrl = 'https://v1.nocodeapi.com/deepparekh/fit/jNHMFGOmmsFrIvCG/aggregatesDatasets?dataTypeName=steps_count,active_minutes,calories_expended,heart_minutes,sleep_segment,weight&timePeriod=today';

  // useEffect(() => {
  //    async function fetchData() {
  //     try {
  //       const response = await fetch(apiUrl);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const responseData = await response.json();
  //       // console.log(responseData.steps_count[0].value)
  //       // setData(responseData);
    
  //       setSteps(responseData.steps_count[0].value)
  //       setCalories(responseData.calories_expended[0].value)
  //       //setHeartRate(responseData.heart_minutes[0].value)
  //       setWeight(responseData.weight[0].value)

  //       // console.log(responseData.steps_count[0].value);
  //       // console.log(steps)
  //       setLoading(false);
  //       console.log(responseData);
  //     } catch (err) {
     
  //       setError(err);
  //       setLoading(false); 
  //     }
  //   }

  //   fetchData();
  // }, []); 
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
 console.log(steps);
  return (
    <div className='w-[100%] ml-auto mr-auto flex flex-col items-center h-full p-[20px]'>

    <div className='text-[30px] font-bold m-[10px] mt-[20px] mb-[20px] border-b-[1px] border-[#ababad]'>
        Vitals
    </div>

    <div className=" h-[100%] w-[100%] py-[10px] flex flex-col items-center ">
                                
                 <div className=" h-[100px] w-[100%] py-[10px] flex bg-[#99d0c0] rounded-[10px] justify-center items-center overflow-hidden">
                                      
                        <div className='h-[100%] w-[30%] flex flex-col justify-center items-center text-white'>
                            <div className='text-[12px] '>
                              Steps
                            </div>
                            <div className='text-[25px]'>
                              {steps}
                            </div>
                          </div>
                          <div className='w-[70%] h-[100px] bg-[#99d0c0] flex items-center justify-center'>
                          <img className='w-[70%] h-[70%]' src='/assets/steps.png' alt="Steps" />
                        </div>
                        
                    </div>


                    <div className=" h-[100px] w-[100%] py-[10px] flex bg-[#f40] mt-[10px] rounded-[10px] justify-center items-center overflow-hidden">
                                      
                                      <div className='h-[100%] w-[30%] flex flex-col justify-center items-center text-white'>
                                          <div className='text-[12px] '>
                                            Heart Rate
                                          </div>
                                          <div className='text-[25px]'>
                                            {heartRate}bpm
                                          </div>
                                        </div>
                                        <div className='w-[70%] h-[100px]  flex items-center justify-center'>
                                        <img className='w-[70%] h-[70%]' src='/assets/heart_raate.png' alt="Steps" />
                                      </div>
                                      
                                  </div>

                    <div className=" h-[100px] w-[100%] py-[10px] flex bg-[#850000] mt-[10px] rounded-[10px] justify-center items-center overflow-hidden">
                                      
                                      <div className='h-[100%] w-[30%] flex flex-col justify-center items-center text-white'>
                                          <div className='text-[12px] '>
                                            Calories
                                          </div>
                                          <div className='text-[25px]'>
                                            {calories}kcal
                                          </div>
                                        </div>
                                        <div className='w-[70%] h-[100px]  flex items-center justify-center'>
                                        <img className='w-[70%] h-[70%]' src='/assets/calories.png' alt="Steps" />
                                      </div>
                                      
                                  </div>

                        <div className=" h-[100px] w-[100%] py-[10px] flex bg-[#259694] mt-[10px] rounded-[10px] justify-center items-center overflow-hidden">
                                      
                                      <div className='h-[100%] w-[30%] flex flex-col justify-center items-center text-white'>
                                          <div className='text-[12px] '>
                                            Weight
                                          </div>
                                          <div className='text-[25px]'>
                                            {weight}kg
                                          </div>
                                        </div>
                                        <div className='w-[70%] h-[100px]  flex items-center justify-center'>
                                        <img className='w-[70%] h-[70%]' src='/assets/weight.png' alt="Steps" />
                                      </div>
                                      
                                  </div>

                    
                  

   
  </div>
    </div>

  );
}

export default data;
