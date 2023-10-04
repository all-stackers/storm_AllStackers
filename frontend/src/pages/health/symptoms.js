import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useRouter } from 'next/router';

const symptoms = () => {
    const router = useRouter()

    const onSymptomsTrackingClickHandler = () => {
        router.push({pathname: '/health/symptoms-tracking'})
    }

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
                
                <div className=' font-semibold text-[20px]'>Symptoms</div>
            </div>

            <div className='flex w-[90%] self-center'>
            <Bar
                data={{
                    labels: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                    },
                
                ],
                }}
                options={{
                    title:{
                    display:true,
                    text:'Average Rainfall per month',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }}
            />
            </div>

            <div onClick={onSymptomsTrackingClickHandler}>Symptoms tracking</div>
        </div>
    )
}

export default symptoms