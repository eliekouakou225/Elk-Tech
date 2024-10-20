import React from 'react';
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import module1 from '../../Assets/img/modulesFormation/client-1.png'
import module2 from '../../Assets/img/modulesFormation/client-2.png'
import module3 from '../../Assets/img/modulesFormation/client-3.png'
import module4 from '../../Assets/img/modulesFormation/client-4.png'
import module5 from '../../Assets/img/modulesFormation/client-5.png'
import module6 from '../../Assets/img/modulesFormation/client-6.png'
import module7 from '../../Assets/img/modulesFormation/client-7.png'
import module8 from '../../Assets/img/modulesFormation/client-7.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';


// import required modules
import { Scrollbar } from 'swiper/modules';

export default function Client() {
  return (
    <div className='client'>
      <Swiper

      slidesPerView={1}
      spaceBetween={10}
      scrollbar={{
        hide: false,
      }}
  breakpoints={{
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 50,
  },
}}
modules={[Scrollbar]}
className="mySwiper"


      >
        <SwiperSlide><img src={module1} loading="lazy" className="img-fluid img-client" alt=""/></SwiperSlide>
        <SwiperSlide><img src={module2} loading="lazy" className="img-fluid img-client" alt=""/></SwiperSlide>
        <SwiperSlide><img src={module3} loading="lazy" className="img-fluid img-client" alt=""/> </SwiperSlide>
        <SwiperSlide><img src={module4} loading="lazy" className="img-fluid img-client" alt=""/> </SwiperSlide>
        <SwiperSlide><img src={module5} loading="lazy" className="img-fluid img-client" alt=""/> </SwiperSlide>
        <SwiperSlide><img src={module6} loading="lazy" className="img-fluid img-client" alt=""/> </SwiperSlide>
        <SwiperSlide><img src={module7} loading="lazy" className="img-fluid img-client" alt=""/> </SwiperSlide>
        <SwiperSlide><img src={module8} loading="lazy" className="img-fluid img-client" alt=""/> </SwiperSlide>
        <SwiperSlide><img src={module1} loading="lazy" className="img-fluid img-client" alt=""/> </SwiperSlide>
      </Swiper>
    </div>
  );
}
