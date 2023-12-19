// --------------------------------- 
// Formation section
// ---------------------------------
import React from 'react'
import student from '../../Assets/img/student.jpg'


const Formation = () => {
  return (

  
    <>
    <section id="cta" class="cta">
      <div class="container" data-aos="zoom-out">

        <div class="row g-5">

          <div class="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
            <h3>Des formations sur mesure </h3>
            <p> 
              <span>Initialisation a l'informatique</span> • <span>Infographie</span> • <span>Montage vidéo</span> • <span>Programmation</span>
               • <span>Câblage Réseau</span> • <span>Eléctricité</span>
            </p>

            <div className='d-flex'>
            <div class="btn__main--container">
                <div class="main-btn--orange">
                      <span>Voir plus de details </span>
                      <svg>
                        <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                        <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                      </svg>
                </div>
          </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
            <div class="img">
              <img src={student} alt="" class="img-fluid"/>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>

  )
}

export default Formation