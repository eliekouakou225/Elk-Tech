// --------------------------------- 
// Formation section
// ---------------------------------
import React from 'react'
// import student from '../../Assets/img/student.jpg'
import features1 from '../../Assets/img/features-1.jpg'
import features2 from '../../Assets/img/features-2.jpg'

const Formation = () => {
  return (

  
    <section className='m-5'>

{/* <!-- Section Title --> */}
<div class="container section-title" data-aos="fade-up">
        <h2>Nos Formations</h2>
        <p>« La formation est l’essence de tout succès. » Arnaud Boti</p>
  </div>
{/* <!-- End Section Title --> */}

{/* <!-- Features Details Section --> */}
<section id="features-details" className="features-details section">

<div className="container">

  <div className="row gy-4 justify-content-between features-item">

    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
      <img src={features1} className="img-fluid" alt=""/>
    </div>

    <div className="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
      <div className="content">
        <h3>Apprendre n'a jamais été aussi facile.</h3>
        <p>
        Avec nos méthodes de formation exclusivement basées sur la pratique, nous demandons à nos apprenants de ne faire aucun effort de rétention. C'est la méthode d'enseignement qui détermine ce que l'on retient.
        </p>
        <div class="btn__main--orange-hover-blue">
        <button class="btn"><span></span><p data-start="good luck!" data-text="davantage" data-title="Apprendre"></p></button>
      </div>
      </div>
    </div>

  </div>
  {/* <!-- Features Item --> */}

  <div className="row gy-4 justify-content-between features-item">

    <div className="col-lg-5 d-flex align-items-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">

      <div className="content">
        <h3>Nos formations sont dispensées par des professionnelles expérimentées.</h3>
        <p>
        Il n'est jamais trop tard pour apprendre.
        </p>
        <p>
            <span>Infographie</span> <span>Montage Video</span> <span>Developpement d'applis web  & site web</span> <span>Marketing Digital</span> <span>Réseaux</span> <span>Vidéo-Surveillence</span> <span>Autocom</span> 
        </p>

        <div class="btn__main--blue-hover-orange">
        <button class="btn"><span></span><p data-start="good luck!" data-text="Formations" data-title="Details"></p></button>
      </div>
      </div>

    </div>

    <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
      <img src={features2} className="img-fluid" alt=""/>
    </div>

  </div>
  {/* <!-- Features Item --> */}

</div>

</section>
{/* <!-- /Features Details Section --> */}
    </section>

  )
}

export default Formation