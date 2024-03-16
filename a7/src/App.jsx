import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import RecipeCard from './components/recipesSection/RecipeCard'
import SideBar from './components/recipesSection/SideBar'

function App() {
  const [api, setApi] = useState([])

  useEffect(() => {
    fetch("recipes.json")
    .then(res => res.json())
    .then(data => setApi(data))
  },[])


  return (
    <div className='p-5 md:px-[5%] md:mp-[2%] '>
      <Nav />
      <Hero/>
      <div className='flex justify-between flex-col md:flex-row mt-20'>
        <RecipeCard  api={api}/>
        <SideBar />
      </div>
    </div>
  )
}

export default App
