import { AppContext } from "@/context/appContext";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

const SYMPTOMS = [
    {
        name: "Abdominal Pain",
        type: "Physical",
        id: 1,
        level: 2
    },
    {
        name: "Back Pain",
        type: "Physical",
        id: 2,
        level: 2
    },
    {
        name: "Contractions",
        type: "Physical",
        id: 3,
        level: 2
    },
    {
        name: "Clostrum Leak",
        type: "Physical",
        id: 4,
        level: 2
    },
    {
        name: "Cramping",
        type: "Physical",
        id: 5,
        level: 2
    },
    {
        name: "Fatigue",
        type: "Physical",
        id: 6,
        level: 2
    },
    {
        name: "Anxiety",
        type: "Emotional",
        id: 7,
        level: 2
    },
    {
        name: "Mood swings",
        type: "Emotional",
        id: 8,
        level: 2
    },
    {
        name: "Irritability",
        type: "Emotional",
        id: 9,
        level: 2
    },
    {
        name: "Decreased libido",
        type: "Emotional",
        id: 10,
        level: 2
    },
    {
        name: "Insomnia",
        type: "Emotional",
        id: 11,
        level: 2
    },
    {
        name: "Forgetfulness",
        type: "Emotional",
        id: 12,
        level: 2
    },
    {
        name: "Bleeding",
        type: "Other",
        id: 13,
        level: 2
    },
    {
        name: "Hair changes",
        type: "Other",
        id: 14,
        level: 2
    },
    {
        name: "Changes in Vision",
        type: "Other",
        id: 15,
        level: 2
    },
    {
        name: "Skin Changes",
        type: "Other",
        id: 16,
        level: 2
    },
    {
        name: "Stretch Marks",
        type: "Other",
        id: 17,
        level: 2
    },
    {
        name: "Varicose Veins",
        type: "Other",
        id: 18,
        level: 2
    }
];

const selectSymptoms = () => {
    const router = useRouter()
    const auth = useContext(AppContext)
    const { userData, setUserData } = auth

    const symptoms = userData.symptoms.filter(symptom => {
        const date = symptom.date;
        const today = new Date();
        const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
        return date.getTime() === todayDate.getTime();
    });
    
    const [selectedSymptoms, setSelectedSymptoms] = useState(symptoms.length > 0 ? symptoms[0].symptoms : [])

    const onBackClickHandler = () => {
        router.back()
    }

    const onSymptomClickHandler = (symptom) => {
        if (selectedSymptoms.includes(symptom)) {
            setSelectedSymptoms(selectedSymptoms.filter(symptomObj => symptomObj.id != symptom.id))
        } else {
            setSelectedSymptoms([...selectedSymptoms, symptom])
        }
    }

    const onSaveSymptomsClickHandler = () => {
        const date = new Date()
        const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())

        const newSymptoms = {
            date: newDate,
            symptoms: selectedSymptoms
        }

        const newUserData = {
            ...userData,
            symptoms: [...userData.symptoms.filter(symptom => symptom.date.getTime() != newDate.getTime()), newSymptoms]
        }

        setUserData(newUserData)
        router.back()
    }


    return (
        <div className='flex flex-col h-full w-full'>
            <div className='flex flex-row h-[60px] items-center justify-center relative'>
                <div className=' absolute left-[20px]' onClick={onBackClickHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>

                <div className=' font-semibold text-[20px]'>Select Symptoms</div>
            </div>

            <div className="flex flex-col w-[90%] self-center mt-[10px] gap-y-[20px] overflow-scroll">

                <div className="flex flex-col bg-[#FFF1F9] w-full rounded-[10px] px-[20px] py-[15px] border-[#da7bae]">
                    <div className="font-bold text-[#da7bae]">Physical</div>
                    <div className="flex flex-row flex-wrap gap-x-[10px] mt-[15px] gap-y-[10px]">
                        {SYMPTOMS.filter(symptom => symptom.type == "Physical").map(filteredSymptom => {
                            return (
                                <div 
                                    key={filteredSymptom.id} 
                                    className={`px-[10px] py-[5px] box-border rounded-lg border-solid border-[1px] border-[#da7bae] text-[16px] ${selectedSymptoms.includes(filteredSymptom) ? "bg-[#da7bae] text-white" : "bg-white "}`}
                                    onClick={() => onSymptomClickHandler(filteredSymptom)}
                                >
                                    {filteredSymptom.name}
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="flex flex-col bg-[#F1FFF2] w-full rounded-[10px] px-[20px] py-[15px] box-border">
                    <div className="font-bold text-[#4EA670]">Emotional</div>
                    <div className="flex flex-row flex-wrap gap-x-[10px] mt-[15px] gap-y-[10px]">
                        {SYMPTOMS.filter(symptom => symptom.type == "Emotional").map(filteredSymptom => {
                            return (
                                <div 
                                    key={filteredSymptom.id} 
                                    className={`px-[10px] py-[5px] box-border rounded-lg border-solid border-[1px] border-[#4EA670] text-[16px] ${selectedSymptoms.includes(filteredSymptom) ? "bg-[#4ebb78] text-white" : "bg-white "}`}
                                    onClick={() => onSymptomClickHandler(filteredSymptom)}
                                >
                                    {filteredSymptom.name}
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="flex flex-col bg-[#F6F3FF] w-full rounded-[10px] px-[20px] py-[15px] box-border">
                    <div className="font-bold text-[#838CD8]">Others</div>
                    <div className="flex flex-row flex-wrap gap-x-[10px] mt-[15px] gap-y-[10px]">
                        {SYMPTOMS.filter(symptom => symptom.type == "Other").map(filteredSymptom => {
                            return (
                                <div 
                                    key={filteredSymptom.id} 
                                    className={`px-[10px] py-[5px] box-border rounded-lg border-solid border-[1px] border-[#838CD8] text-[16px] ${selectedSymptoms.includes(filteredSymptom) ? "bg-[#838CD8] text-white" : "bg-white "}`}
                                    onClick={() => onSymptomClickHandler(filteredSymptom)}
                                >
                                    {filteredSymptom.name}
                                </div>
                            )
                        })}
                    </div>
                </div>
                
            </div>


            <div className='w-[90%] h-[40px] flex items-center justify-center mt-auto mb-[20px] self-center rounded-[5px] bg-[#DE8F90] font-semibold text-white cursor-pointer'
                onClick={onSaveSymptomsClickHandler}
            >Save Symptoms</div>
            
        </div>
    )
};

export default selectSymptoms;
