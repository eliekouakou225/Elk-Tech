import React from 'react'
import { useEffect } from "react";

import Hero from '../Components/Header/Hero.jsx';
import About from './../Components/About/About.jsx';
import TrainingSection from './../Components/Training/TrainingSection.jsx';
import SolutionSection from '../Components/Solution/SolutionSection.jsx';
import Parallax from './../Components/Parallax/Parallax.jsx'
import Idea from './../Components/Idea/Idea.jsx';
// import Shop from './../Components/Shop/Shop.jsx';
import ShopBtn from '../Components/Btn/ShopBtn.jsx';


const Home = () => {
    useEffect(() => {
        document.title = "Accueil | Elk-Tech";
    }, []);
    return (
        <>
            <Hero />
            <About />
            <TrainingSection />
            <SolutionSection />
            <Parallax />
            {/* <Shop /> */}
            <Idea />
            <div className='shopbtn__container '>
                <ShopBtn />
            </div>
        </>
    )
}

export default Home

