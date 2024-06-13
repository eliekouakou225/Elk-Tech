import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import nestedobjectdata from '../Assets/Data/data.json';

const Training = () => {
  return (
    <React.Fragment>
    <section className='p-150'>  
<div className="solutions m-5">
<div class="container section-title" >
        <h2>Nos Formations</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, animi.</p> 
      </div>
    <div className="container">
      <div className="row solution_card-container">
      {nestedobjectdata.map( (trainingdata, index)=>(

        <div className="col-12 card-list-item " data-cursor-size="80px" key={index+1}>
          <div className="card-list-item--text">
              <h2>{trainingdata.title}</h2>
              <p>{trainingdata.small_description}</p>
              <Link to={'/'} className='btn-links' data-cursor-size="80px">
                Voir les Détails <i class="fa fa-long-arrow-right" aria-hidden="true"></i>

    </Link>
          </div>
          <div className="card-list-item--image">
          <svg width="190" height="190" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="190" height="190" rx="20" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M94.3637 67.6331C94.8895 67.1073 94.678 66.2121 93.9726 65.9772L53.8962 52.6316C53.1146 52.3713 52.3712 53.1147 52.6314 53.8963L65.9771 93.9727C66.212 94.6781 67.1072 94.8896 67.6329 94.3639L77.7136 84.2832C78.1041 83.8927 78.7373 83.8927 79.1278 84.2832L91.6125 96.7679C92.0031 97.1584 92.6362 97.1584 93.0267 96.7679L96.7678 93.0269C97.1583 92.6363 97.1583 92.0032 96.7678 91.6126L84.2831 79.1279C83.8926 78.7374 83.8926 78.1042 84.2831 77.7137L94.3637 67.6331Z" fill="white"/>
<path d="M33.3402 35.9606V38.9858C33.3402 42.7674 33.2236 45.6208 32.9905 47.546C32.7573 49.4712 32.0694 51.2474 30.9269 52.8746C29.8076 54.5019 27.9656 55.877 25.4006 57C28.4086 58.1689 30.4838 59.9336 31.6264 62.2942C32.7689 64.632 33.3402 67.8864 33.3402 72.0576V78.6239C33.3402 80.3886 33.4685 81.7294 33.725 82.6461C34.0048 83.5629 34.576 84.2504 35.4388 84.7088C36.3249 85.1901 37.7239 85.4307 39.6359 85.4307H41V91H37.9221C34.098 91 31.2999 89.9343 29.5278 87.8028C27.779 85.6714 26.9046 82.0158 26.9046 76.8362V71.7139C26.9046 67.6343 26.3333 64.6893 25.1908 62.8787C24.0715 61.0681 22.0079 60.0711 19 59.8878V54.1122C21.4017 53.9747 23.1622 53.3674 24.2814 52.2902C25.4006 51.213 26.1118 49.8379 26.4149 48.1648C26.7414 46.4917 26.9046 44.3374 26.9046 41.7017V38.3327C26.9046 34.3906 27.2077 31.3539 27.814 29.2224C28.4436 27.091 29.6444 25.5211 31.4165 24.5126C33.1887 23.5042 35.7652 23 39.1463 23H41V28.5349H40.2305C38.3651 28.5349 36.9428 28.7068 35.9634 29.0506C34.9841 29.3714 34.2962 30.0361 33.8998 31.0445C33.5268 32.0529 33.3402 33.6916 33.3402 35.9606Z" fill="#35BA67"/>
<path d="M83.6598 38.9858V35.9606C83.6598 33.6916 83.4732 32.0529 83.1002 31.0445C82.7038 30.0361 82.0159 29.3714 81.0366 29.0506C80.0572 28.7068 78.6349 28.5349 76.7695 28.5349H76V23H77.8537C81.2348 23 83.8113 23.5042 85.5835 24.5126C87.3556 25.5211 88.5564 27.091 89.186 29.2224C89.7923 31.3539 90.0954 34.3906 90.0954 38.3327V41.7017C90.0954 44.3374 90.2586 46.4917 90.5851 48.1648C90.8882 49.8379 91.5994 51.213 92.7186 52.2902C93.8378 53.3674 95.5983 53.9747 98 54.1122V59.8878L91.5994 57C89.0344 55.877 87.1924 54.5019 86.0731 52.8746C84.9306 51.2474 84.2427 49.4712 84.0095 47.546C83.7764 45.6208 83.6598 42.7674 83.6598 38.9858Z" fill="#35BA67"/>
</svg>

          </div>
        </div>
               
      ))
      }
      </div>
      
    </div>
</div>
<div className="testimonials m-5">


<Swiper

spaceBetween={30}
centeredSlides={true}
autoplay={{
  delay: 2500,
  disableOnInteraction: false,
}}
pagination={{
  clickable: true,
}}
navigation={true}
modules={[Autoplay, Pagination, Navigation]}
        className='container-testimonials'
        style={{
          "--swiper-pagination-color": "#21417F",
          "--swiper-navigation-color": "#21417F",
          "--swiper-navigation-size": "30px",
        }}
      >
        <SwiperSlide >
        <div class="card-testimonials-item">
        <div class="header">
          <div class="image">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>

          </div>
          <div>
            <div class="stars">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <p class="name">Jean Marc Kouadio</p>
            <p class="satisfaction">Bravo</p>
          </div>
        </div>

        <p class="message">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          voluptatem alias ut provident sapiente repellendus.
        </p>
</div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </div>
      </section> 
      </React.Fragment>
  )
}

export default Training