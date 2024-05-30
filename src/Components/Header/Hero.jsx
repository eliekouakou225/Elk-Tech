import React from 'react'

import Secondnavbar from '../Nav/Secondnavbar';
import heroImg from '../../Assets/img/hero-img.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {
    const [text] = useTypewriter({
      words : ['Entreprise', 'Ecole', 'Boutique...'],
      loop: {},
      typeSpeed: 200,
      deleteSpeed: 150,
    })
  return (

    <>
    {/* The entete of the application */}
    <section id="hero" className="d-flex align-items-center position-relative">

    <div className="container"> 
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h1>
                De bien meilleures solutions pour votre { ' '}
              <span style={ {fontWeight : 'bold', color: '#F8B234'}  }>
                {text}
              </span>
              <span style={{ color: 'white' }} >

              <Cursor cursorStyle='/'/>
              </span>
            </h1>
          <h2>Faits la différence grace à nos offres sur-mesure adapté à vos besoins.</h2>
          

          <div className="d-flex justify-content-center justify-content-lg-start">
         
          <div class="btn__main--container">         
      <div class="btn__main--orange-hover-white">
        <button class="btn"><span></span><p data-start="good luck!" data-text="Maintenant" data-title="Commencer"></p></button>
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