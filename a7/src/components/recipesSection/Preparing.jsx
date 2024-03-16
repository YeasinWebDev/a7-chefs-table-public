import React, { useEffect, useState } from 'react'

function Preparing({ removeCard }) {
    console.log(removeCard);
    const [item, setItem] = useState(removeCard)
    const [ time,setTime ] = useState(0)
    const [calories,setCalories] = useState(0)

    useEffect(() =>{
        const totalTime = removeCard.reduce((a,b) => a + b.preparing_time, 0)
        setTime(totalTime)

        const totalcalories = removeCard.reduce((a,b) => a + b.calories, 0)
        setCalories(totalcalories)
    },[removeCard])
    return (
        <div className='text-black'>
            <h1 className='font-bold text-center text-xl'>Currently cooking: {removeCard.length}</h1>

            <div className='flex md:gap-6 gap-2 items-center'>
                <div className='flex  flex-col'>
                    <div className="name">
                        <h1 className='font-bold'>Name</h1>
                        <ul>
                            {removeCard?.map((item, index) => (
                                <li className='font-semibold whitespace-nowrap py-2 ' key={index + 1}>{index + 1}. {item.recipe_name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex  flex-col my-2'>
                    <h1 className='font-bold'>Time</h1>
                    <ul>
                        {removeCard?.map((item, index) => (
                            <li className='font-semibold whitespace-nowrap py-2 ' key={index + 1}> {item.preparing_time} min</li>
                        ))}
                    </ul>
                </div>
                <div className='flex  flex-col'>
                    <h1 className='font-bold'>Calories</h1>
                    <ul>
                        {removeCard?.map((item, index) => (
                            <li className='font-semibold whitespace-nowrap py-2 ' key={index + 1}> {item.calories} calories</li>
                        ))}
                    </ul>
                </div>
            </div>

            <h1 className='font-semibold'>Total Time = {time} min</h1>
            <h1 className='font-semibold'>Total Time = {calories} calories</h1>
        </div>
    )
}

export default Preparing