import React from 'react'
import featureImg from '../../Assets/img/features.png'
// import Stackedcard from '../Card/Stackedcard'

const Services = () => { 
   
  return (

    <>
<div className="services">


      {/* <!-- Feature Icons --> */}
      <div className="section-header">
          <span>// Nos Services</span>
          <h2>// Nos Services</h2>
        </div>
      <div className='container'>

      
        <div className="row feature-icons" data-aos="fade-up">
          <h3>Optez pour la qualité.</h3>

          <div className="row">

            <div className="col-xl-4 text-center" data-aos="fade-right" data-aos-delay="100">
              <img src={featureImg} className="img-fluid p-4" alt=""/>
            </div>

            <div className="col-xl-8 d-flex content">
              <div className="row align-self-center gy-4">

                <div className="col-md-6 icon-box" data-aos="fade-up">
                  <div className='services--content'>
                    <h4>CÂBLAGE RÉSEAU - TÉLÉCOMMUNICATION</h4>
                    <p  className="fst-italic">Mettez en réseau votre entreprise ou interconnectez vos sites.</p>
                  </div>
                </div>

                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <div className='services--content'>
                    <h4>INFOGRAPHIE - MONTAGNE VIDEO</h4>
                    <p className="fst-italic">Développer votre image de marque grace.</p>
                  </div>
                </div>

                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <div className='services--content'>
                    <h4>CONCEPTION WEB</h4>
                    <p className="fst-italic">Faites la différence.</p>
                  </div>
                </div>

                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <div className='services--content'>
                    <h4>VIDÉOSURVEILLANCE - CONTRÔLE D'ACCÈS</h4>
                    <p className="fst-italic">garder un oeil sur vos biens.</p>
                  </div>
                </div>

                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                  <div className='services--content'>
                    <h4>E-MARKETING</h4>
                    <p className="fst-italic">Communiquer plus simplement avec votre clientèle.</p>
                  </div>
                </div>

                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                  <div className='services--content'>
                    <h4>DÉPANNAGE INFORMATIQUE</h4>
                    <p className="fst-italic">Vaut mieux prévenir que guérir</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
        </div>
        </div>
    </>
)}


export default Services