import { useContext, useEffect, useState } from 'react'
import { AppContext } from '@/context/appContext'
import ScaleLoader from "react-spinners/ScaleLoader";
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-toastify';
import SignupForm from '@/components/signup/signupForm';

const signup = () => {
    const appContext = useContext(AppContext)
    const router = useRouter()

    const [mname, setMname] = useState('')
    const [age, setAge] = useState(0)
    const [type, setType] = useState('')
    const [Pdate,  setPdate] = useState('')
    const [dueDate,  setDuedate] = useState(0)
    const [mobileNumber, setMobileNumber] = useState('')
    const [password, setPassword] = useState('')

    const [isSigningup, setIsLoggingIn] = useState(false)


    useEffect(() => {
        console.log("inside Signup page")
        if (appContext.isUserLoggedIn) {
            router.push('/home')
        }
    }, [appContext])

    const onSignupClickHandler = async (event) => {
        event.preventDefault()
        setIsLoggingIn(true)
        setDuedate()

        // const currentDate = new Date();
    const futureDate = new Date(Pdate);
    futureDate.setDate(Pdate.getDate() + 224);
    setDuedate(futureDate.toDateString());
    
        console.log("firstName: ", mname)
        console.log("age: ", age)
        console.log("type: ", type)
        console.log("pdate: ", Pdate)
        console.log("DueDatedate: ", dueDate)
        console.log("mobileNumber: ", mobileNumber)
        console.log("password: ", password)

        if (password.length < 5 || password.length > 20) {
            toast.error("Password should be between 8 and 20 characters")
            return
        }

        try {
            const response = await axios.post('http://192.168.1.109:5000/signup', {
                mobile_number: mobileNumber,
                password: password,
                name:mname,
                age:age,
                pregnantDate:Pdate,
                dueDate:futureDate.toDateString()
            })

            const data = response.data

            localStorage.setItem('access_token', data.access_token)
            toast.success("Signed up successfully")
            appContext.setIsUserLoggedIn(true)
            router.push('/dashboard')
        }
        catch (error) {
            const errorMessage = error.response.data.message
            setMobileNumber('')
            setPassword('')
            toast.error(errorMessage)
        }
        finally {
            setIsLoggingIn(false)
        }
    }
    console.log("duedate: ",dueDate)
    return (
        <>
            {!appContext.checkingIfLoggedIn
                ?
                <div className={`flex flex-row h-full`}>


                    {/* right container */}
                    <div className={`flex flex-col w-[100%] px-[30px] py-[30px] min-h-full h-auto box-border border-l-[1px] text-dark1`}>
                        <div className="text-[26px] font-Poppins mb-[45px] mt-[40px] text-center">Let's create an account !</div>
                        <SignupForm
                            mname={mname}
                            age={age}
                            type={type}
                            Pdate={Pdate}
                            mobileNumber={mobileNumber}
                            password={password}
                            isSigningup={isSigningup}
                            setMname={setMname}
                            setAge={setAge}
                            setPdate={setPdate}
                            setType={setType}
                            setMobileNumber={setMobileNumber}
                            setPassword={setPassword}
                            onSignupClickHandler={onSignupClickHandler}

                        />
                    </div>
                </div>
                :
                <div className='flex flex-col gap-y-[10px] items-center justify-center m-auto text-[14px] text-[#606060]'>
                    <ScaleLoader color='#7C3AED' />
                    Hold on!
                </div>
            }
        </>
    )
}

export default signup