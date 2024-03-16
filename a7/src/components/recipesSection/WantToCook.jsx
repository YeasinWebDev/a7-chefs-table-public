import React from 'react'

function WantToCook({ card }) {
    console.log(card);
    return (
        <div className='text-black'>
            <h1 className='font-bold text-center text-xl'>Want To cook : {card.length}</h1>

            <div className='flex gap-6 items-center'>
                <div className='flex  flex-col'>
                    <div className="name">
                        <h1 className='font-bold'>Name</h1>
                        <ul>
                            {card?.map((item, index) => (
                                <li className='font-semibold whitespace-nowrap py-2 ' key={index + 1}>{index + 1}. {item.recipe_name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex  flex-col my-2'>
                    <h1 className='font-bold'>Time</h1>
                    <ul>
                        {card?.map((item, index) => (
                            <li className='font-semibold whitespace-nowrap py-2 ' key={index + 1}> {item.preparing_time}</li>
                        ))}
                    </ul>
                </div>
                <div className='flex  flex-col'>
                    <h1 className='font-bold'>Calories</h1>
                    <ul>
                        {card?.map((item, index) => (
                            <li className='font-semibold whitespace-nowrap py-2 ' key={index + 1}> {item.calories}</li>
                        ))}
                    </ul>
                </div>
            <div/>
            <div className='flex flex-col mt-6 gap-1'>
                {card?.map((item, index) => (
                    <button
                        key={index + 1}
                        className='bg-[#0BE58A] h-fit px-2 py-[6px] rounded-xl'
                        onClick={() => handlePreparingClick(item.recipe_id)}
                    >
                        Preparing
                    </button>
                ))}
            </div>
            </div>
        </div>
    )
}

export default WantToCook