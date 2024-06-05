// --------------------------------- 
// Formation section
// ---------------------------------
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import data from '../../Assets/Data/Data.json'

// import required modules
import { Pagination } from 'swiper/modules';
// import student from '../../Assets/img/student.jpg'
import features1 from '../../Assets/img/features-1.jpg'
import features2 from '../../Assets/img/features-2.jpg'

const Formation = () => {
  return (

  
    <section className='m-5'>

{/* <!-- Section Title --> */}
<div class="container section-title">
        <h2>Nos Formations</h2>
        <p>« La formation est l’essence de tout succès. » Arnaud Boti</p>
  </div>
{/* <!-- End Section Title --> */}

{/* <!-- Formations Section --> */}
<section id="formations" className="formations section">

<div className="container">

  <div className="row gy-4 justify-content-between formations-item">

    <div className="col-lg-6">
      <img src={features1} className="img-fluid" alt=""/>
    </div>

    <div className="col-lg-5 d-flex align-items-center">
      <div className="content">
        <h3>Apprendre n'a jamais ete aussi facile.</h3>
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

  <div className="row gy-4 justify-content-between formations-item">

    <div className="col-lg-5 d-flex align-items-center order-2 order-lg-1">

      <div className="content">
        <h3>Nos formations sont dispensées par des professionnelles experimentees.</h3>
        <p>
        Il n'est jamais trop tard pour apprendre.
        </p>
        
        <div class="btn__main--blue-hover-orange">
        <button class="btn"><span></span><p data-start="good luck!" data-text="Formations" data-title="Details"></p></button>
      </div>
      </div>

    </div>

    <div className="col-lg-6 order-1 order-lg-2">
      <img src={features2} className="img-fluid" alt=""/>
    </div>

  </div>
  {/* <!-- Features Item --> */}

</div>

</section>
{/* <!-- /Features Details Section --> */}
<div>
  <div className="container-fluid mt-5 mb-5">


      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "#21417F",
        }}
      >
        
        <SwiperSlide>
          <div className='formations--card'>
              <h4 className='pl-2'>Infographie</h4>
              <div className='p-4'>
              
              <p className='formations--card-text'>L'infographie est une discipline qui combine l'art et la technologie pour créer des visuels attrayants et informatifs. </p>
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
        </SwiperSlide>
        <SwiperSlide>
        <div className='formations--card'>
              <h4 className='p-2'>Infographie</h4>
              <div className='p-4'>
              
              <p className='formations--card-text'>L'infographie est une discipline qui combine l'art et la technologie pour créer des visuels attrayants et informatifs. </p>
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
        </SwiperSlide>
        <SwiperSlide>
        <div className='formations--card'>
              <h4 className='p-2'>Infographie</h4>
              <div className='p-4'>
              
              <p className='formations--card-text'>L'infographie est une discipline qui combine l'art et la technologie pour créer des visuels attrayants et informatifs. </p>
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
        </SwiperSlide>
        <SwiperSlide>
        <div className='formations--card'>
              <h4 className='p-2'>Infographie</h4>
              <div className='p-4'>
              
              <p className='formations--card-text'>L'infographie est une discipline qui combine l'art et la technologie pour créer des visuels attrayants et informatifs. </p>
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
        </SwiperSlide>
        <SwiperSlide>
        <div className='formations--card'>
              <h4 className='p-2'>Infographie</h4>
              <div className='p-4'>
              
              <p className='formations--card-text'>L'infographie est une discipline qui combine l'art et la technologie pour créer des visuels attrayants et informatifs. </p>
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
        </SwiperSlide>
        <SwiperSlide>
        <div className='formations--card'>
              <h4 className='p-2'>Infographie</h4>
              <div className='p-4'>
              
              <p className='formations--card-text'>L'infographie est une discipline qui combine l'art et la technologie pour créer des visuels attrayants et informatifs. </p>
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
        </SwiperSlide>
        <SwiperSlide>
        <div className='formations--card'>
              <h4 className='p-2'>Infographie</h4>
              <div className='p-4'>
              
              <p className='formations--card-text'>L'infographie est une discipline qui combine l'art et la technologie pour créer des visuels attrayants et informatifs. </p>
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
        </SwiperSlide>
        <SwiperSlide>
        <div className='formations--card'>
              <h4 className='p-2'>Infographie</h4>
              <div className='p-4'>
              
              <p className='formations--card-text'>L'infographie est une discipline qui combine l'art et la technologie pour créer des visuels attrayants et informatifs. </p>
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
        </SwiperSlide>
        <SwiperSlide>
        <div className='formations--card'>
              <h4 className='p-2'>Infographie</h4>
              <div className='p-4'>
              
              <p className='formations--card-text'>L'infographie est une discipline qui combine l'art et la technologie pour créer des visuels attrayants et informatifs. </p>
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
        </SwiperSlide>
      </Swiper>
      </div>
</div>
    </section>

  )
}

export default Formation