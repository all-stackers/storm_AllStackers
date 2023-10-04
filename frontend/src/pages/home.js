import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { AppContext } from '@/context/appContext'
import ScaleLoader from "react-spinners/ScaleLoader";

const home = () => {
    const appContext = useContext(AppContext)
    const router = useRouter()

    useEffect(() => {
        if (!appContext.checkingIfLoggedIn && !appContext.isUserLoggedIn) {
            router.push('/login')
        }
    }, [appContext])

    return (
        <>
            {!appContext.checkingIfLoggedIn && appContext.isUserLoggedIn
            ?
                <div>
                    Home Page
                </div>    
            : 
                <div className='flex flex-col h-full gap-y-[10px] items-center justify-center m-auto text-[14px] text-dark3'>
                    <ScaleLoader  color='#7C3AED'/>
                    Hold on!
                </div>
            }
        </>
    )
}

export default home
