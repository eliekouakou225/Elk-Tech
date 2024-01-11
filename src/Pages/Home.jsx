import React from 'react'

import Hero from '../Components/Header/Hero.jsx';
import About from './../Components/About/About.jsx';
import Formation from './../Components/Formation/Formation.jsx';
import Services from './../Components/Services/Services.jsx';
import Parallax from './../Components/Parallax/Parallax.jsx'
import Idea from './../Components/Idea/Idea.jsx';
import Shop from './../Components/Shop/Shop.jsx';
import BtnEstimate from '../Components/BtnEstimate/BtnEstimate.jsx';


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
      
     <div className='BtnEstimate__container '>
          <BtnEstimate/>
     </div>
    </>
  )
}

export default Home

