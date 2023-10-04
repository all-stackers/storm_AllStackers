import { DatePickerOptions } from '@/constants/Constants'
import { useRouter } from 'next/router'
import React from 'react'
import DatePicker from 'tailwind-datepicker-react'

const symptomsTracking = () => {
    const router = useRouter()

    const onBackClickHandler = () => {
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

        </div>
    )
}

export default symptomsTracking