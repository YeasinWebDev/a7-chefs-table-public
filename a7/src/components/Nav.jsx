import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
function Nav() {
  return (
    <div className='flex justify-between flex-col md:flex-row text-black'>
      <h1 className='font-bold md:text-xl text-lg'>Recipe Calories</h1>

      <div className='flex gap-5 cursor-pointer text-gray-600'>
        <h1>Home</h1>
        <h1>Recipes</h1>
        <h1>About</h1>
        <h1>Search</h1>
      </div>

      <div className='flex gap-4 items-center'>
        <div className='flex items-center gap-2 bg-[#f3f3f4] p-2 rounded-lg text-black'>
          <CiSearch />
          <input className='rounded-lg px-2 border-none outline-none' type="text" placeholder='Search' />
        </div>
        <CgProfile  size={24}/>
      </div>
    </div>
  )
}

export default Nav