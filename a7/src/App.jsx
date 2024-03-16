import { useEffect, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './components/Nav'
import Hero from './components/Hero'
import RecipeCard from './components/recipesSection/RecipeCard'
import SideBar from './components/recipesSection/SideBar'

function App() {
  const [api, setApi] = useState([])

  const [card, setCard] = useState([])

  const handdleCard = (item) =>{
    const alreadyHave = card.find(c=> c.recipe_id === item.recipe_id)
    if(alreadyHave) return toast("Already Exists") 
    setCard([...card, item]);
  }

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
        <RecipeCard  api={api} handdleCard={handdleCard}/>
        <SideBar  card={card}/>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
