import React from 'react'

import Hero from '../Components/Header/Hero.jsx';
import About from './../Components/About/About.jsx';
import Formation from './../Components/Formation/Formation.jsx';
import Services from './../Components/Services/Services.jsx';
import Parallax from './../Components/Parallax/Parallax.jsx'
import Idea from './../Components/Idea/Idea.jsx';
import Shop from './../Components/Shop/Shop.jsx';

// import Projet from './../Components/Projet/Projet.jsx';


const Home = () => {
  return (
    <div>
      <Hero/>
       <About/>
     <Formation/>
      <Services/>
      <Parallax/>
     <Shop/>
      <Idea/>
      
     {/*  <Projet/> */}
    </div>
  )
}

export default Home


// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home