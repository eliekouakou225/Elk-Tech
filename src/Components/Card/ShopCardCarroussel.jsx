import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import imageProduct1 from '../../Assets/img/features-1.jpg'
// import imageProduct2 from '../../Assets/img/features-2.jpg'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const ShopCardCarroussel = () => {
  return (
    <div className='container'>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='SwiperSlide'>
          <img src={imageProduct1} className="img-product" alt=""/>
        </SwiperSlide>
        <SwiperSlide className='SwiperSlide'>
          <img src={imageProduct1} className="img-product" alt=""/>
        </SwiperSlide>
        <SwiperSlide className='SwiperSlide'>
          <img src={imageProduct1} className="img-product" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageProduct1} className="img-product" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageProduct1} className="img-product" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageProduct1} className="img-product" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageProduct1} className="img-product" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageProduct1} className="img-product" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageProduct1} className="img-product" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageProduct1} className="img-product" alt=""/>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default ShopCardCarroussel