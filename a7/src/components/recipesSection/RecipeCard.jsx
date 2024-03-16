import React from 'react'
import EachCard from './EachCard'

function RecipeCard({ api,handdleCard }) {
  return (
    <div className='flex flex-col items-center text-black'>
      <h1 className='font-bold text-2xl md:text-4xl'>Our Recipes</h1>
      <p className='text-center md:w-[50%]'>
        Explore our Recipes section for a diverse selection of delicious dishes, each with calorie information to help you make informed choices while savoring every bite.
      </p>
      <div className='grid grid-cols-1  md:grid-cols-2 md:gap-10 gap-5 md:mt-10 mt-5'>
      {api.map(card => (
        <EachCard card={card} handdleCard={handdleCard}/>
      ))}
      </div>
    </div>
  )
}

export default RecipeCard