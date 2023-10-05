import { useContext, useEffect, useState } from 'react'
import { AppContext } from '@/context/appContext'
import ScaleLoader from "react-spinners/ScaleLoader";
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-toastify';

const login = () => {
    const appContext = useContext(AppContext)
    const router = useRouter()
    
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [circumference, setCircumference] = useState(0)

    // useEffect(() => {
    //     console.log("inside login page")
    //     if (appContext.isUserLoggedIn) {
    //         router.push('/dashboard')
    //     }
    // }, [appContext])

    const onLoginClickHandler = async (event) => {
        event.preventDefault()
        
        // try {
        //     const response = await axios.post('https://allstackers3.onrender.com/login', {
        //         mobile_number: event.target.phone.value,
        //         password: event.target.password.value
        //     })

        //     const data = response.data
            
        //     localStorage.setItem('access_token', data.access_token)
        //     toast.success("Logged in successfully")
        //     appContext.setIsUserLoggedIn(true)
        // }
        // catch (error) {
        //     const errorMessage = error.response.data.message
        //     setMobileNumber('')
        //     setPassword('')
        //     toast.error(errorMessage)
        // }
        // finally {
        //     setIsLoggingIn(false)
        // }
        console.log(weight,height,circumference);
    }

    return (
        <>
           
            <div className={`flex flex-row h-full`}>
                

                {/* right container */}
                <div className={`flex flex-col w-[100%] px-[30px] py-[30px] min-h-full h-auto box-border border-l-[1px] text-dark1`}>
                    <div className="text-[26px] font-Poppins mb-[45px] mt-[40px] text-center">Welcome Back!</div>

                    <form className="mt-[40px] justify-center" action="" onSubmit={onLoginClickHandler}>
                        <div className="flex flex-col gap-y-[25px]">
                            <div className="flex flex-col justify-center items-center gap-y-[40px]">
                                {/* mobile number */}
                                <div className="flex flex-col w-[70%]">
                                    <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900">Child's Weight</label>
                                    <input type="number" id="weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 box-border" placeholder="9137XXXXXX" pattern="[0-9]{10}" required
                                        value={weight}
                                        onChange={(event) => {
                                            setWeight(event.target.value)
                                        }}
                                    />
                                </div>

                                
                               
                                <div className="flex flex-col w-[70%]">
                                    <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-900">Enter Height</label>
                                    <input type="number" id="height" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 box-border" placeholder="•••••••••" required
                                        value={height}
                                        onChange={(event) => {
                                            setHeight(event.target.value)
                                        }}
                                    />
                                </div> 

                                <div className="flex flex-col w-[70%]">
                                    <label htmlFor="circumference" className="block mb-2 text-sm font-medium text-gray-900">Enter Circumference</label>
                                    <input type="number" id="circumference" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 box-border" placeholder="•••••••••" required
                                        value={circumference}
                                        onChange={(event) => {
                                            setCircumference(event.target.value)
                                        }}
                                    />
                                </div> 
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-[20px] mt-[65px] items-center">
                            <button className='flex flex-row gap-x-[10px] items-center outline-none text-white bg-purple-dark font-medium px-[22px] py-[8px] rounded-[5px] text-[14px] box-border'
                                type='submit'
                            >
                                Submit
                            </button>
                                
                            </div>
                        </form>
                        
                   </div>  
                   </div>       
                        
         </>
    )
}

export default login
