import React from 'react'

import Hero from '../Components/Header/Hero.jsx';
import About from './../Components/About/About.jsx';
import Formation from './../Components/Formation/Formation.jsx';
import Services from './../Components/Services/Services.jsx';
import Parallax from './../Components/Parallax/Parallax.jsx'
import Idea from './Idea.jsx';
// import Shop from './Shop.jsx';

// import Projet from './../Components/Projet/Projet.jsx';


const Home = () => {
  return (
    <div>
      <Hero/>
       <About/>
     <Formation/>
      <Services/>
      <Parallax/>
      <Idea/>
     {/*  <Projet/> */}
     {/* <Shop/> */}
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