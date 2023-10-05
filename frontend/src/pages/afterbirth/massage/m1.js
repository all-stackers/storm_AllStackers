import React from 'react'
import { useEffect,useState } from "react"
import { useSpeechSynthesis } from 'react-speech-kit';

const m1 = () => {
 
 
  const [value1, setValue1] = useState('Massage can be soothing for babies. Make sure the room is warm, your baby is quiet, well-rested and alert, and you’re relaxed. Try massage after your baby’s nap, when they’re being changed or in the cot, or after a bath. You can do massage for 10-30 minutes.');
  const [value2, setValue2] = useState('Smooth sorbolene cream or lotion into your warm hands and massage the soles of your baby’s feet. Use firm, gentle, slow strokes from heel to toe. Always keep one hand on your baby.');
  const [value3, setValue3] = useState('Do long smooth strokes up your baby’s leg. Massage from ankle up to thigh and over hip. Massage both legs at once or one at a time. Avoid the genital area. Hold your baby’s leg under the knee and gently press it towards the tummy to release wind.');
  const { speak, cancel, speaking } = useSpeechSynthesis();

  const stopSpeaking = () => {
    cancel();
  };

  return (
    <div className='py-[20px] px-[15px]'>
      <div className='p-[5px] flex flex-col rounded-[20px] px-[10px] shadow-2xl my-[20px]'>
        <img className='w-[100%] h-[200px] mb-[10px]' src='/assets/baby1.gif'/>
        <h1 className='text-[15px]'>{value1}</h1>
        <div className='flex items-center'>
        <img className='w-[40px] h-[40px] mt-[20px]' 
        src='/assets/speaker.png'
        onClick={() => speak({ text: value1 })}
        />
         <button className='w-[70px] h-[30px] p-[5px] rounded-[5px] ml-[10px] bg-orange-300 mt-[20px]' onClick={stopSpeaking} disabled={!speaking}>
        Stop
      </button>
        </div>
       
        
      </div>

      <div className='p-[5px] flex flex-col rounded-[20px] px-[10px] shadow-2xl my-[20px]'>
        <img className='w-[100%] h-[200px] mb-[10px]' src='/assets/baby2.gif'/>
        <h1 className='text-[15px]'>{value2}</h1>
        <div className='flex items-center'>
        <img className='w-[40px] h-[40px] mt-[20px]' 
        src='/assets/speaker.png'
        onClick={() => speak({ text: value2 })}
        />
         <button className='w-[70px] h-[30px] p-[5px] rounded-[5px] ml-[10px] bg-orange-300 mt-[20px]' onClick={stopSpeaking} disabled={!speaking}>
        Stop
      </button>
        </div>
        
      </div>

      <div className='p-[5px] flex flex-col rounded-[20px] px-[10px] shadow-2xl my-[20px]'>
        <img className='w-[100%] h-[200px] mb-[10px]' src='/assets/baby3.gif'/>
        <h1 className='text-[15px]'>{value3}</h1>
        <div className='flex items-center'>
        <img className='w-[40px] h-[40px] mt-[20px]' 
        src='/assets/speaker.png'
        onClick={() => speak({ text: value3 })}
        />
         <button className='w-[70px] h-[30px] p-[5px] rounded-[5px] ml-[10px] bg-orange-300 mt-[20px]' onClick={stopSpeaking} disabled={!speaking}>
        Stop
      </button>
        </div>
        
      </div>
    </div>
  )
}

export default m1