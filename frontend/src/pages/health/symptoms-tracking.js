import { DatePickerOptions } from '@/constants/Constants'
import { AppContext } from '@/context/appContext'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import DatePicker from 'tailwind-datepicker-react'

const symptomsTracking = () => {
    const [level, setLevel] = useState(1)
    const router = useRouter()
    const auth = useContext(AppContext)
    const { userData, setUserData } = auth
    const [savedStatus, setSavedStatus] = useState(false)

    const symptoms = userData.symptoms.filter(symptom => {
        const date = symptom.date;
        const today = new Date();
        const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
        return date.getTime() === todayDate.getTime();
    });
    
    const [selectedSymptoms, setSelectedSymptoms] = useState(symptoms.length > 0 ? symptoms[0].symptoms : [])

    console.log(selectedSymptoms)

    const onBackClickHandler = () => {
        router.back()
    }

    const onAddSymptomsClickHandler = () => {
        router.push('/health/select-symptoms')
    }

    const onChangeSymptomLevelHandler = (symptom, level) => {
        // find that symptom in selectedSymptoms and update it with the new level
        const newSelectedSymptoms = selectedSymptoms.map(symptomObj => {
            if (symptomObj.id === symptom.id) {
                return {
                    ...symptomObj,
                    level
                }
            } else {
                return symptomObj
            }
        })

        console.log(newSelectedSymptoms)
        setSelectedSymptoms(newSelectedSymptoms)
    }

    const onSaveSymptomsClickHandler = async () => {
        if(savedStatus || selectedSymptoms.length == 0)
            return

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NjQzNDc1NywianRpIjoiMTBhMDAxNTgtNTk2OC00NzQ0LTg5MjMtYjVkZTY0YjQ1MTNiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjkxMzczNTcwMDMiLCJuYmYiOjE2OTY0MzQ3NTcsImV4cCI6MTY5NjUyMTE1N30.WrSWvj27zVmXx659O07KQqdkrGY2Pazrf9CT-Sy20vU"

        try {
            const response = await axios.post(
                'http://localhost:5000/savesymptoms',
                {
                    symptoms: userData.symptoms
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                  },
                }
            )

            console.log(response.data)
            

            if (response.data.success) {
                toast.success('Symptoms saved successfully')
                setSavedStatus(true)
            }
        }
        catch (err) {
            toast.error(err.response.data.msg)
        }
    }

    return (
        <div className='flex flex-col h-full w-full'>
            <div className='flex flex-row h-[60px] items-center justify-center relative'>
                <div className=' absolute left-[20px]' onClick={onBackClickHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>

                <div className=' font-semibold text-[20px]'>Symptoms Tracking</div>
            </div>

            <div className='flex flex-col items-center bg-[#ffebea] py-[20px] box-border'>
                <div className='flex flex-row gap-x-[25px] text-[#7d7d80]'>
                    <div className={`flex flex-col gap-y-[10px] justify-center`}>
                        <div className='text-center'>S</div>
                        <div className='text-[#de8f90]'>01</div>
                    </div>
                    <div className='flex flex-col gap-y-[10px] justify-center'>
                        <div className='text-center'>M</div>
                        <div className='text-[#de8f90]'>02</div>
                    </div>
                    <div className='flex flex-col gap-y-[10px] justify-center'>
                        <div className='text-center'>T</div>
                        <div className='text-[#de8f90]'>03</div>
                    </div>
                    <div className='flex flex-col gap-y-[10px] justify-center'>
                        <div className='text-center'>W</div>
                        <div className='text-[#de8f90]'>04</div>
                    </div>
                    <div className='flex flex-col gap-y-[10px] justify-center rounded-md px-[6px] py-[10px] box-border bg-white font-semibold'>
                        <div className='text-center'>T</div>
                        <div className='text-[#de8f90]'>05</div>
                    </div>
                    <div className='flex flex-col gap-y-[10px] justify-center'>
                        <div className='text-center'>F</div>
                        <div className='text-[#de8f90]'>06</div>
                    </div>
                    <div className='flex flex-col gap-y-[10px] justify-center'>
                        <div className='text-center'>S</div>
                        <div className='text-[#de8f90]'>07</div>
                    </div>
                    <div className='flex flex-col gap-y-[10px] justify-center'>
                        <div className='text-center'>S</div>
                        <div className='text-[#de8f90]'>08</div>
                    </div>
                    <div className='flex flex-col gap-y-[10px] justify-center'>
                        <div className='text-center'>M</div>
                        <div className='text-[#de8f90]'>09</div>
                    </div>
                </div>
            </div> 

            <div className='mt-[20px] ml-[20px] font-semibold text-[18px]'>Today's Log</div>

            {selectedSymptoms.length == 0 &&
                <div className='w-[400px] absolute m-auto text-center mt-[350px]'>
                    Add symptoms you are experiencing today
                </div>
            }

            <div className='flex flex-col overflow-scroll gap-y-[10px] mb-[10px] mt-[20px]'>
                {selectedSymptoms.map(symptom => {
                    console.log(symptom.level)
                    return (
                        <div className={`flex flex-col w-[90%] mx-auto rounded-[10px] px-[5px] py-[10px] ${symptom.type == "Physical" && "bg-[#FFF1F9]"} ${symptom.type == "Emotional" && "bg-[#F1FFF2]"} ${symptom.type == "Other" && "bg-[#F6F3FF]"}`}>
                            <div className='flex flex-row items-center justify-center'>
                                <div className='font-semitext-[16px]'>{symptom.name}</div>
                            </div>

                            <div className='flex flex-col w-[90%] self-center justify-between'>
                                <div className={`${symptom.type == "Physical" && "bg-[#da7bae]"} ${symptom.type == "Emotional" && "bg-[#4EA670]"} ${symptom.type == "Other" && "bg-[#838CD8]"} h-[2px] mt-[25px] mb-[15px] relative rounded-sm`}>
                                    <div className={`absolute ${symptom.type === "Physical" ? "bg-[#da7bae]" : (symptom.type === "Emotional" ? "bg-[#4EA670]" : "bg-[#838CD8]")} h-[4px] ${symptom.level == 1 && "w-[2%]"} ${symptom.level == 2 && "w-[50%]"} ${symptom.level == 3 && "w-[100%]"} mt-[-1px] flex flex-row items-center rounded-sm`}>
                                        <div className={`rounded-full w-[10px] h-[10px] ml-auto ${symptom.type == "Physical" && "bg-[#da7bae]"} ${symptom.type == "Emotional" && "bg-[#4EA670]"} ${symptom.type == "Other" && "bg-[#838CD8]"}`}></div>
                                    </div>
                                </div>

                                

                                <div className='flex flex-row justify-between'>
                                    <div onClick={() => onChangeSymptomLevelHandler(symptom, 1)}>Low</div>
                                    <div onClick={() => onChangeSymptomLevelHandler(symptom, 2)}>Medium</div>
                                    <div onClick={() => onChangeSymptomLevelHandler(symptom, 3)}>High</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {selectedSymptoms.length == 0 ? 
                <div className='w-[90%] min-h-[40px] flex items-center justify-center mt-auto mb-[20px] self-center rounded-[5px] bg-[#DE8F90] font-semibold text-white cursor-pointer'
                    onClick={onAddSymptomsClickHandler}
                >Add Symptoms</div>
            :
                <div className='w-[90%] min-h-[40px] flex items-center justify-center mt-auto mb-[20px] self-center rounded-[5px] bg-[#DE8F90] font-semibold text-white cursor-pointer'
                    // onClick={onAddSymptomsClickHandler}
                    onClick={onSaveSymptomsClickHandler}
                >{savedStatus ? "Saved!!" : "Save Symptoms"}</div>
            }            
        </div>
    )
}

export default symptomsTracking