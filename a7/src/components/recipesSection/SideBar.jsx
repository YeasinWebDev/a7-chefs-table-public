import React, { useState } from 'react'
import WantToCook from './WantToCook'
import Preparing from './Preparing'
function SideBar({card, removeCardHandle,removeCard}) {
  const [currentcard, setCurrentCard] = useState([])

  const handlePreparingClick = (card) =>{
    console.log(card);
  }
  return (
    <div>
      <WantToCook card={card} handlePreparingClick={handlePreparingClick} removeCardHandle={removeCardHandle}/>
      <Preparing removeCard={removeCard}/>
    </div>
  )
}

export default SideBar