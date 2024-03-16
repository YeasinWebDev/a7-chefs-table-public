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

  const [removeCard, setRemoveCard] = useState([])

  const removeCardHandle = (eachItem) =>{
    const alreadyHave = removeCard.find(c=> c.recipe_id === eachItem.recipe_id)
    if(alreadyHave) return toast("Already Exists") 
    setRemoveCard([...removeCard,eachItem])
    const updatedCard = card.filter(p => p.recipe_id !== eachItem.recipe_id);
    setCard(updatedCard);
  }

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
      <div className='flex justify-between flex-col lg:flex-row mt-20'>
        <RecipeCard  api={api} handdleCard={handdleCard}/>
        <SideBar  card={card} removeCardHandle={removeCardHandle} removeCard={removeCard}/>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
