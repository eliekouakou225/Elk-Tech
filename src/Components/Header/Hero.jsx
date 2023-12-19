import React from 'react'

import Secondnavbar from '../Nav/Secondnavbar';
import heroImg from '../../Assets/img/hero-img.png'

const Hero = () => {
  return (

    <>
    {/* The entete of the application */}
    <section id="hero" className="d-flex align-items-center position-relative">

    <div className="container"> 
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>De meilleures solutions pour votre entreprise</h1>
          <h2>Faits la différence grace à nos offres sur-mesure adapté à vos besoins.</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
         
          <div class="btn__main--container">
                <div class="main-btn--orange">
                      <span>Commencer </span>
                      <svg>
                        <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                        <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                      </svg>
                </div>
          </div>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src={heroImg} className="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>
    <div className='position-absolute top-100 start-50 translate-middle'>
  {/* <!-- Smoll navbar in bottom of the header section --> */}
      <Secondnavbar/>
      
    </div>
  </section>

    </>

  )
}

export default Hero