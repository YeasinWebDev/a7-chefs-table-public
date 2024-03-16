import React from 'react'
import WantToCook from './WantToCook'

function SideBar({card}) {
  return (
    <div>
      <WantToCook card={card}/>
    </div>
  )
}

export default SideBar