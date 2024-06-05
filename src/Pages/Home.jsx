import React from 'react'


import Hero from '../Components/Header/Hero.jsx';
import About from './../Components/About/About.jsx';
import Formation from './../Components/Formation/Formation.jsx';
import Services from './../Components/Services/Services.jsx';
import Parallax from './../Components/Parallax/Parallax.jsx'
import Idea from './../Components/Idea/Idea.jsx';
import Shop from './../Components/Shop/Shop.jsx';
import ShopBtn from '../Components/Btn/ShopBtn.jsx';

const Home = () => {
  return (
    <>
      <Hero/>
       <About/>
     <Formation/>
      <Services/>
      <Parallax/>
     <Shop/> 
      <Idea/>     
     <div className='shopbtn__container '>
          <ShopBtn/>
     </div>
    </>
  )
}

export default Home

