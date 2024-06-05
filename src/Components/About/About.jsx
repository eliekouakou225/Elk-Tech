// --------------------------------- 
// About Section 
// ---------------------------------
import React from 'react'
import aboutImg from '../../Assets/img/about.jpg'

const About = () => {
  return (

      <>
    <section id="about" className="about mt-5 mb-5">
      <div className="container">

      <div class="container section-title" >
        <h2>A Propos de nous</h2>
        <p>Elk-Tech Groupe</p>
      </div>

        <div className="row g-4 g-lg-5" >

          <div className="col-lg-5">
            <div className="about-img">
              <img src={aboutImg} className="img-fluid" alt=""/>
            </div>
          </div>

          <div className="col-lg-7">
            <div className='about--content'>
                <div className="d-flex align-items-center mt-4 " data-cursor-exclusion style={{backgroundColor: '#fff'}}>
                  <i className="bi bi-check2"></i>
                  <h4 id="stick-title">Notre Mission</h4>
                </div>
                <p className="fst-italic">Notre mission est bien plus qu'un simple objectif commercial. Nous nous engageons à développer un nom d'unique afin de vous démarquer de la concurrence. </p>
            </div>
            <div className='about--content'>
                <div className="d-flex align-items-center mt-4"  data-cursor-exclusion style={{backgroundColor: '#fff'}}>
                  <i className="bi bi-check2"></i>
                  <h4 id="stick-title">Nos valeurs</h4>
                </div>
                <p className="fst-italic">Nos valeurs servent de fondation à tout ce que nous faisons. Elles représentent notre engagement envers nos clients, notre équipe et la société dans son ensemble.</p>
            </div>
            <div className='about--content'>
                <div className="d-flex align-items-center mt-4" data-cursor-exclusion style={{backgroundColor: '#fff'}}>
                  <i className="bi bi-check2"></i>
                  <h4 id="stick-title">Notre équipe</h4>
                </div>
                <p className="fst-italic">Nous sommes fiers de notre équipe dynamique et diversifiée. Chaque membre apporte une expertise unique et un dévouement à notre mission commune, offrant ainsi à nos clients une expérience exceptionnelle.</p>
            </div>
            <div className='about--content'>
                <div className="d-flex align-items-center mt-4" data-cursor-exclusion style={{backgroundColor: '#fff'}}>
                  <i className="bi bi-check2"></i>
                  <h4 id="stick-title">Pourquoi Nous Choisir</h4>
                </div>
                <p className="fst-italic"> Nous possédons une expertise approfondie dans divers domaine de l'informations, résultat d'années d'expérience et de dévouement à notre métier. Notre équipe possède les compétences et les connaissances nécessaires pour fournir des solutions de qualité supérieure.</p>
            </div>

            <div className='container-btns'>
            <div class="btn__main--orange-hover-blue">
              <button class="btn"><span></span><p data-start="good luck!" data-text="Elk-Tech Groupe" data-title="En Savoir plus"></p></button>
            </div>
            <div class="btn__main--blue-hover-orange">
              <button class="btn"><span></span><p data-start="good luck!" data-text="Elk-Tech Groupe" data-title="Contacter"></p></button>
            </div>
            </div>
          </div>

        </div>

      </div>
    </section>


      </>
  )
}

export default About