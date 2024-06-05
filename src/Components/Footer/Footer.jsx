import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <section className="footer">
    <div className="container-fluid">
    <div className="row">
    <div className="col-12 footer__contact">
    <div className="container">
    <div className="row">
    <div className="col-4">
    <Link to={'/'} className='btn-estimate-footer'>Demander <br /> un devis <i class="fa fa-arrow-right" aria-hidden="true"></i> </Link>
    
    </div>
    <div className="col-8">
    
    
    <Link to={'/contact'} className='btn-contact' data-cursor-size="80px">
    <h2>Contacter-nous
    </h2>
    <span><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></span>
    </Link>
    
    
    </div>
    </div>
    </div>
    
    </div>
    <div className="col-12 footer__infos">
    <div className="container">
    
    
    <div className="row">
    <div className="col-12 col-lg-4">
    <h2>It's <br /> possible <span>®</span></h2>
    <p>Make with <span className='rotating-element'>❤️</span> by Elk-Tech Groupe</p>
    </div>
    <div className="col col-lg-4">
    <h4>ABIDJAN</h4>
    <p>elktech21@gmail.com</p>
    <p>+225 07 88 89 89 98</p>
    <p>Yopougon PMI, enface du second entrée de la pouponniere</p>
    <a href="{}"> Voir la localisation sur la carte <span><i class="fa fa-arrow-up" aria-hidden="true"></i>
    </span> </a>
    </div>
    
    <div className="col-12 col-lg-4 ">
    <h4>Voulez vous recevoir toutes nos offres en exclusivité ?</h4>
    <a href="{}">ABONNER VOUS GRATUITEMENT</a>
    <h4>Suivez-nous</h4>
    <div className='footer__infos--social'>
    <Link to={'/contact'}>
    <i class="fa fa-facebook" aria-hidden="true"></i>
    </Link>
    <Link to={'/contact'}>
    <i class="fa fa-instagram" aria-hidden="true"></i>
    </Link>
    <Link>
    <i class="fa fa-twitter" aria-hidden="true"></i>
    </Link>
    <Link>
    <i class="fa fa-whatsapp" aria-hidden="true"></i>
    </Link>
    </div>
    
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </>
    
  )
}

export default Footer