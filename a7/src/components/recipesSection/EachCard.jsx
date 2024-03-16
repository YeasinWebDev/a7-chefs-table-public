import React from 'react'
import { FaRegClock } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";

function EachCard({ card, handdleCard }) {
  return (
    <div>
      <div class="card w-96  shadow-xl h-[40rem] ">
        <figure class="px-10 pt-10">
          <img src={card.recipe_image} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body">
          <div className='flex flex-col justify-center items-center'>
            <h2 class="card-title">{card.recipe_name}</h2>
            <p className='text-center my-2'>
              {card.short_description}
            </p>
          </div>
        </div>
        <div className='card-body '>
          <h1 className='font-bold text-lg'>
            ingredient : {card.ingredients.length}
          </h1>
          <ul>
            {card.ingredients.map((item, index) => (
              <li className='font-semibold' key={index + 1}>{index + 1}. {item}</li>
            ))}
          </ul>
        </div>
        <div className='flex ml-8 gap-5'>
              <div className='flex items-center gap-2'>
                <FaRegClock/>
                <h1>{card.preparing_time} min</h1>
              </div>
              <div className='flex items-center gap-2'>
                <FaFire/>
                <h1>{card.calories} cal</h1>
              </div>
        </div>
        <div class="card-actions p-5">
            <button class="p-2 bg-[#0BE58A]  rounded-3xl font-semibold"
            onClick={() => handdleCard(card)}
            >Want to Cook</button>
        </div>
        
      </div>
    </div>
  )
}

export default EachCard