import React, { useState } from 'react'
import { ScaleLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import axios from 'axios'

const dailyfood = () => {
    const [symptoms, setSymptoms] = useState("")
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const onEnterPress = async (event) => {
        if (event.key === 'Enter') {
            if (symptoms.length === 0) {
                toast.error('Please enter the Data')
                return
            }
            setData(null)
            setLoading(true)
            try {
                const response = await axios.post('http://allstackers3.onrender.com/foodAnalysis', {
                    food: symptoms
                },
                {
                    "headers": {
                        "content-type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem('access_token')}`
                    }
                }
                )

                const data = response.data
                setData(data.data)
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)
                setSymptoms('')
            }
        }
    }

    return (
        <div className='w-[100%] ml-auto mr-auto flex flex-col items-center h-full p-[20px]'>

            <div className='text-[20px] font-bold m-[10px] mt-[20px] mb-[60px] border-b-[1px] border-[#ababad]'>
                PregaDiet - Ai that suggests Quality of Intaken food.
            </div>

            {data !== null && <div className='flex flex-col w-full font-medium text-[24px]'>
                <div className='text-[20px]'>
                   
                    {data}
                </div>
            </div>}

            {loading &&
                <div className='flex flex-col gap-y-[10px] items-center justify-center m-auto text-[16px] text-[#606060]'>
                    <ScaleLoader  color='#7C3AED'/>
                    Hold on!
                </div>
            }

            <input className='h-[50px] w-[80%] ml-auto mr-auto mt-auto mb-[50px] rounded-[10px] bg-purple-light border-[1px] border-purple-dark px-[30px] box-border text-[#000000] outline-none' 
                placeholder='Enter Food you had today...'
                value={symptoms}
                onKeyDown={onEnterPress}
                onChange={(event) => {
                    setSymptoms(event.target.value)
                }}
            />
        </div>
        
    )
}

export default dailyfood;