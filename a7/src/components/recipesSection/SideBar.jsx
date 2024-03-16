import React, { useState } from 'react'
import WantToCook from './WantToCook'
import Preparing from './Preparing'
function SideBar({card, removeCardHandle,removeCard}) {
  const [currentcard, setCurrentCard] = useState([])

  const handlePreparingClick = (card) =>{
    console.log(card);
  }
  return (
    <div className='border-2 border-gray-200 px-3 py-2 md:w-[30rem] h-fit'>
      <WantToCook card={card} handlePreparingClick={handlePreparingClick} removeCardHandle={removeCardHandle}/>
      <Preparing removeCard={removeCard}/>
    </div>
  )
}

export default SideBar