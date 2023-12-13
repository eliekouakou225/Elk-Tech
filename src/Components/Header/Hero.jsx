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
          <h1>Better Solutions For Your Business</h1>
          <h2>We are team of talented designers making websites with Bootstrap</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
         
                              <a className="main-btn--white" href="{#}">
                                  <span className="top-key"></span>
                                  <span className="text">EN SAVOIR PLUS</span>
                                  <span className="bottom-key-1"></span>
                                  <span className="bottom-key-2"></span>
                              </a>
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src={heroImg} className="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>
  </section>
      <Secondnavbar/>
  {/* <!-- End Hero --> */}

    </>

  )
}

export default Hero