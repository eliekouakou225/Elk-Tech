import React from 'react'
// import {Accordion} from 'react-bootstrap/Accordion';
import { Accordion } from "react-bootstrap";

import aboutImg from '../Assets/img/about.jpg' 

const FormationDetails = () => {
    return (
        <section className='p-150'>
        <div id="training-overview" className="training-overview">
        <div className="container" >
       
        <div className="container section-title" >
    <h2>Nos Formations</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, animi.</p> 
    </div>
        
        <div className="row gy-4">
        <div className="col-lg-6">
        <h3>Voluptatem dignissimos provident quasi corporis</h3>
        <img src={aboutImg} className="img-fluid rounded-4 mb-4" alt=""/>
        <p>Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod nisi et. Placeat debitis quia recusandae odit et consequatur voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.</p>
        <p>Temporibus nihil enim deserunt sed ea. Provident sit expedita aut cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis tempore doloribus debitis explicabo similique sit. Accusantium sed ut omnis beatae neque deleniti repellendus.</p>
        </div>
        <div className="col-lg-6">
        <div className="content ps-0 ps-lg-5">
        <p className="fst-italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
        </p>
        <ul>
        <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        <li><i className="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
        <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
        </ul>
        <p>
        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
        </p>
        
        <div className="position-relative mt-4">
        <img src={aboutImg} className="img-fluid rounded-4" alt=""/>
        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
        </div>
        </div>
        </div>
        </div>
        
        </div>
        </div>
        <section id="training-details" className="training-details section">

<div className="container">

  <div className="row gy-4 align-items-center">

    <div className="col-lg-5">
      {/* <img src="assets/img/stats-img.svg" alt="" className="img-fluid"> */}
    </div>

    <div className="col-lg-7">

      <div className="row gy-4">

        <div className="col-lg-6">
          <div className="training-details-item d-flex">
          <i className="fa fa-graduation-cap" aria-hidden="true"></i>
            <div>
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">45 JOURS</span>
              <p><strong>Durée formation : </strong> <span>Varie selon le nbre de séances</span></p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="training-details-item d-flex">
          <i className="fa fa-list-ol" aria-hidden="true"></i>
            <div>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">12 SEANCES</span>
              <p><strong>Durée séances : </strong> <span> 01 heures 30 Min</span></p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="training-details-item d-flex">
          <i className="fa fa-calendar" aria-hidden="true"></i>
            <div>
              <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter">2 OU 3 JOURS</span>
              <p><strong>Nbre jour par semaine : </strong> <span>Au choix de l'apprenant</span></p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="training-details-item d-flex">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
            <div>
              <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter">9h-12H / 14h-17H </span>
              <p><strong>Heures formation : </strong> <span>Au choix de l'apprenant</span></p>
            </div>
          </div>
        </div>

      </div>
 
    </div>

  </div>

</div>

        </section>
        <section id="pricing" className="pricing section">

{/* <!-- Section Title --> */}
<div className="container section-title mt-5">
  <h2>Frais de formation</h2>
  <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div>

<div className="container">

  <div className="row gy-4">

    <div className="col-lg-4 mx-auto" >
      <div className="pricing-item featured">
        <p className="popular">Popular</p>
        <h3>Infographie</h3>
        <p className="description">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
        <h4><sup>FCFA </sup>50.000<span></span></h4>
        <div className="btn__main--orange-hover-blue">
              <button className="btn"><span></span><p data-start="good luck!" data-text="Maintenant" data-title="S'incrire"></p></button>
            </div>
        <p className="text-center small">Cash ● wave ● Orange Monney ● Mtn Monney ● Moov Monney </p>
        <ul>
                <li><i className="fa fa-check" aria-hidden="true"></i>
 <span>Ajout dans le groupe de professionnels</span></li>
                <li><i className="fa fa-check" aria-hidden="true"></i>
 <span>...</span></li>
                <li><i className="fa fa-check" aria-hidden="true"></i> <span>Certificat de fin de formations</span></li>
              </ul>
      </div>
    </div>


  </div>

</div>

</section>
<div className='container m-5'>
  <h3>Contenu de la formation</h3>
  <Accordion defaultActiveKey="0" className='accordion--t'>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='accordion-text'>training.c</Accordion.Header>
        <Accordion.Body className='accordion--body'>
        <ul>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, cum!</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, cum!</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, cum!</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, cum!</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, cum!</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, cum!</li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</div>
        </section>
    )
}

export default FormationDetails