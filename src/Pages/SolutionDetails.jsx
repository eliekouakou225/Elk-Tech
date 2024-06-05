import React from 'react'
import image1 from '../Assets/img/features-light-1.jpg'
import image2 from '../Assets/img/features-light-2.jpg'
import image3 from '../Assets/img/features-light-3.jpg'

const SolutionDetails = () => {
  return (
    <section className='p-150'>
    <div id="master-solution" className="master-solution section">
    
    
    <div class="container section-title" >
    <h2>Nos Formations</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, animi.</p> 
    </div>
    
    <div className="container">
    
    <div className="row gy-4 align-items-center master-solution-item">
    <div className="col-lg-5 order-2 order-lg-1"  data-aos-delay="200">
    <h3>Infographie</h3>
    <p>
    L'infographie est un outil de communication basé sur la représentation visuelle de données, aussi appelée data visualisation. Dans le cadre de votre stratégie digitale, son format synthétique permet de capter l'attention de votre audience rapidement et de faciliter la bonne compréhension de votre message.
    </p>
    
    </div>
    <div className="col-lg-7 order-1 order-lg-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
    <div className="image-stack">
    <img src={image1} alt="" className="stack-front"/>
    <img src={image2} alt="" className="stack-back"/>
    </div>
    </div>
    </div>
    
    <div className="row gy-4 align-items-stretch justify-content-between master-solution-item ">
    <div className="col-lg-6 d-flex align-items-center master-solution-img-bg" data-aos="zoom-out">
    <img src={image3} className="img-fluid" alt=""/>
    </div>
    <div className="col-lg-5 d-flex justify-content-center flex-column" data-aos="fade-up">
    <h3>Liste des services</h3>
    <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
    <ul>
    <li><i class="fa fa-check-circle" aria-hidden="true"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
    <li><i class="fa fa-check-circle" aria-hidden="true"></i><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
    <li><i class="fa fa-check-circle" aria-hidden="true"></i> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.</li>
    </ul>
    <div className='d-flex flex-row align-items-center'>
    <div class="btn__main--orange-hover-blue">
    <button class="btn"><span></span><p data-start="good luck!" data-text="Devis" data-title="Demander"></p></button>
    </div>
    <a href=""><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
    
    </div>
    </div>
    </div>
    
    </div>
    
    </div>
    </section>
  )
}

export default SolutionDetails