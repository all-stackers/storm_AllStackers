import React from 'react'
import { useRouter } from 'next/router';

const dash = () => {
    const router = useRouter()
    
      
  return (
    <div className='px-[15px] py-[30px]'>
        <div className='flex items-center w-[100%] h-[200px] bg-[white] shadow-xl rounded-[20px]'>
            <div className='w-[60%] h-[100%] flex flex-col justify-center items-center'>
                <h1 className='text-[#5379f6] font-bold text-[30px]'>Massage</h1>
                <h1 className='text-[#5379f6] font-bold text-[25px]'>technique</h1>
            </div>
        <img className='w-[200px] h-[150px]' src='/assets/massage.png'/>
        </div>
        <div className='p-[10px] shadow-xl mt-[10px]'>
        {/* {vaccination.vaccinations.map((option, index) => (
                    <div key={index} className='bg-[#d9defb] w-[100%]  rounded-2xl my-[10px] px-[15px] py-[5px]'>
                        <h1 className='text-[#293585]'>{index+1}</h1>
                        <h1 className='text-[#293585] my-[1px] font-lg' >Name: {option.name}</h1>
                        <h1 className='text-[#293585] font-lg' >Details: {option.description}</h1>
                    </div>
                ))} */}
            <div  className='bg-[#99d0c0] w-[100%] h-[100px] rounded-2xl my-[10px] p-[15px]'
            onClick={()=>{router.push("m1")}}
            >
            <h1 className='text-[white] my-[1px] font-lg text-[18px]' >Getting started with baby massage</h1>
    
            </div>
            <div  className='bg-[#ee3f00] w-[100%] h-[100px] rounded-2xl my-[10px] p-[15px]'>
            <h1 className='text-[white] my-[1px] font-lg text-[18px]' >Upper body massage for babies</h1>
     
            </div>
            <div  className='bg-[#850000] w-[100%] h-[100px] rounded-2xl my-[10px] p-[15px]'>
            <h1 className='text-[white] my-[1px] font-lg text-[18px]' >Face and back massage for babies</h1>
    
            </div>
        </div>
    </div>
  )
}

export default dash