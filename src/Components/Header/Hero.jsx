import React from 'react'
// import { Canvas } from "@react-three/fiber"; 
// import Blob from '../Blob'
import Secondnavbar from '../Nav/Secondnavbar';
import heroImg from '../../Assets/img/hero-img.png'

const Hero = () => {
  return (

    <><section id="hero" className="d-flex align-items-center">

    <div className="container"> 
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>De meilleures solutions pour votre entreprise</h1>
          <h2>Faits la différence grace à nos offres sur-mesure adapté à vos besoins.</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
         
                              <a className="main-btn--white" href="{#}">
                                  <span className="top-key"></span>
                                  <span className="text">Commencer</span>
                                  <span className="bottom-key-1"></span>
                                  <span className="bottom-key-2"></span>
                              </a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src={heroImg} className="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>
  </section>
      <Secondnavbar/>
  {/* <!-- Smoll navbar in bottom of the header section --> */}

    </>

  )
}

export default Hero