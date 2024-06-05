import React from 'react'
import featureImg from '../../Assets/img/features.png'
import { Link } from 'react-router-dom';

const Services = () => { 
  
  return (
    
    <>
    {/* <!-- ======= Our Services Section ======= --> */}
    <section id="services" className="services sections-bg">
    <div className="container" >
    
    {/* <!-- Section Title --> */}
    <div className="container section-title" >
    <h2>Nos Solutions</h2>
    <p>Transformez vos idées en innovations numériques avec notre expertise informatique.</p>
    </div>
    {/* <!-- End Section Title --> */}
    
    <div className="row gy-4">
    
    <div className="col-lg-4 col-md-6">
    <div className="service-item  position-relative">
    <div className="icon"> 
    <i class="fa fa-link" aria-hidden="true"></i>          
    </div>
    <h3>VPN MIKROTIK</h3>
    <p>Garder un oeil sur votre réseau peu importe votre position grace à notre VPN. <br /> Winbox - Webconfig - Mikhmon - Usermanager... </p>

    <Link to={'/'} className='btn-links' data-cursor-size="80px">
    <div>
    <button> 
    <p>Détails</p>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="4"
    >
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M14 5l7 7m0 0l-7 7m7-7H3"
    ></path>
    </svg>
    </button>
    
    </div>
    </Link>
    </div>
    </div>
    <div className="col-lg-4 col-md-6">
    <div className="service-item  position-relative">
    <div className="icon"> 
    <i class="fa fa-picture-o" aria-hidden="true"></i>             
    </div>
    <h3>Infographie - Montage vidéo</h3>
    <p>Conception d'indentité visuelle (logo) - Affiche  -  Traitement d'images - Montage 
    vidéo - Spot publicitaire - Animation logo</p>

    <Link to={'/'} className='btn-links' data-cursor-size="80px">
    <div>
    <button> 
    <p>Détails</p>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="4"
    >
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M14 5l7 7m0 0l-7 7m7-7H3"
    ></path>
    </svg>
    </button>
    
    </div>
    </Link>
    </div>
    </div>
    <div className="col-lg-4 col-md-6">
    <div className="service-item position-relative">
    <div className="icon">
    <i class="fa fa-laptop" aria-hidden="true"></i>
    </div>
    <h3>E-MARKETING</h3>
    <p>Community management - Conseils - stratégie marketing</p>
    <Link to={'/'} className='btn-links' data-cursor-size="80px">
    <div>
    <button>
    <p>Détails</p>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="4"
    >
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M14 5l7 7m0 0l-7 7m7-7H3"
    ></path>
    </svg>
    </button>
    
    </div>
    </Link>
    </div>
    </div>
    
    <div className="col-lg-4 col-md-6">
    <div className="service-item position-relative">
    <div className="icon">
    <i class="fa fa-globe" aria-hidden="true"></i>
    </div>
    <h3>Création d'applications web, mobile et de bureau</h3>
    <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
    <Link to={'/'} className='btn-links' data-cursor-size="80px">
    <div>
    <button>
    <p>Détails</p>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="4"
    >
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M14 5l7 7m0 0l-7 7m7-7H3"
    ></path>
    </svg>
    </button>
    
    </div>
    </Link>
    </div>
    </div>
    
    <div className="col-lg-4 col-md-6">
    <div className="service-item position-relative">
    <div className="icon">
    <i class="fa fa-exchange" aria-hidden="true"></i>
    </div>
    <h3>Interconnexion de site</h3>
    <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
    <Link to={'/'} className='btn-links' data-cursor-size="80px">
    <div>
    <button>
    <p>Détails</p>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="4"
    >
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M14 5l7 7m0 0l-7 7m7-7H3"
    ></path>
    </svg>
    </button>
    
    </div>
    </Link>
    </div>
    </div>
    <div className="col-lg-4 col-md-6">
    <div className="service-item position-relative">
    <div className="icon">
    <i class="fa fa-low-vision" aria-hidden="true"></i>
    </div>
    <h3>Réseaux - Contrôle d'accès</h3>
    <p>Câblage réseau - Vidéosurveillance, contrôle d'accès, domotique, téléphonie numérique.</p>
    <Link to={'/'} className='btn-links' data-cursor-size="80px">
    <div>
    <button>
    <p>Détails</p>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="4"
    >
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M14 5l7 7m0 0l-7 7m7-7H3"
    ></path>
    </svg>
    </button>
    
    </div>
    </Link>
    </div>
    </div>
    <div className="col-lg-4 col-md-6">
    <div className="service-item position-relative">
    <div className="icon">
    <i class="fa fa-unlock-alt" aria-hidden="true"></i>
    </div>
    <h3>Sécurité Informatique
    </h3>
    <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
    <Link to={'/'} className='btn-links' data-cursor-size="80px">
    <div>
    <button>
    <p>Détails</p>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="4"
    >
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M14 5l7 7m0 0l-7 7m7-7H3"
    ></path>
    </svg>
    </button>
    
    </div>
    </Link>
    </div>
    </div>

    <div className="col-lg-4 col-md-6">
    <div className="service-item position-relative">
    <div className="icon">
    <i class="fa fa-wifi" aria-hidden="true"></i>
    </div>
    <h3>Deploiement de wifi professionel
    </h3>
    <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
    <Link to={'/'} className='btn-links' data-cursor-size="80px">
    <div>
    <button>
    <p>Détails</p>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="4"
    >
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M14 5l7 7m0 0l-7 7m7-7H3"
    ></path>
    </svg>
    </button>
    
    </div>
    </Link>
    </div>
    </div>
    
    <div className="col-lg-4 col-md-6">
    <div className="service-item position-relative">
    <div className="icon">
    <i class="fa fa-user-times" aria-hidden="true"></i>
    
    </div>
    <h3>Portail captif (Hotspot)
    </h3>
    <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
    <Link to={'/'} className='btn-links' data-cursor-size="80px">
    <div>
    <button>
    <p>Détails</p>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="4"
    >
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M14 5l7 7m0 0l-7 7m7-7H3"
    ></path>
    </svg>
    </button>
    
    </div>
    </Link>
    </div>
    </div>
    <div className="col-lg-4 col-md-6">
    <div className="service-item position-relative">
    <div className="icon">
    <i class="fa fa-cogs" aria-hidden="true"></i>
    </div>
    <h3>DÉPANNAGE INFORMATIQUE</h3>
    <p>Installation système d'exploitation -  Installation logiciel et antivirus - Maintenance 
    informatique - Conseils</p>
    <Link to={'/'} className='btn-links' data-cursor-size="80px">
    <div>
    <button>
    <p>Détails</p>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="4"
    >
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M14 5l7 7m0 0l-7 7m7-7H3"
    ></path>
    </svg>
    </button>
    
    </div>
    </Link>
    </div>
    </div>
    </div>
    
    </div>
    </section>
    {/* <!-- End Our Services Section --> */}
    </>
  )}
  
  
  export default Services