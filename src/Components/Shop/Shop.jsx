import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Mikrotik from '../../Assets/img/Mikrotik.png'

const Shop = () => {
  return (
    <>
    <div class="section-title mt-5">
    <div className="container">
    <h2>Boutique</h2>
    <p>Visitez notre boutique en ligne et profitez de nos offres exceptionnelles pour construire un réseau performant et sécurisé.</p>
    
    </div>
    </div>
    {/* <div className="container-fluid catalog p-5">
    <div className="container">
    <div className="row">
    <div className="col-12 col-lg-6">
    <h2>Votre Solution pour un Réseau de Qualité.</h2>
    <h1>Bénéficiez des marques les plus renommées à un prix incroyablement bas.</h1>
    <div class="btn__main--orange-hover-blue">
    <button class="btn"><span></span><p data-start="good luck!" data-text="Produits" data-title="Afficher tous "></p></button>
    </div>
    </div>
    <div className="col-12 col-lg-6">
    <img src={ImageProducts} className="img-fluid" alt=""/>
    
    </div>
    
    </div>
    </div>
    
    
  </div> */}
  <Swiper
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 70000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  modules={[Autoplay, Pagination, Navigation]}
  className="mySwiper"
  style={{
    "--swiper-pagination-color": "#21417F",
    "--swiper-navigation-color": "#21417F",
    "--swiper-navigation-size": "30px"
  }}
  >
  <SwiperSlide>
  <div className="slider-products">
  <div className="container">
  <div className="row">
  <div className="col-12 col-lg-6">
  <h3>Mikrotik RB5009</h3>
  <p>Le routeur de laboratoire domestique robuste ultime avec USB 3.0, Ethernet 1G et 2,5G et une cage SFP+ 10G. Vous pouvez monter quatre de ces nouveaux routeurs dans un seul espace de montage en rack 1U ! Une puissance de traitement sans précédent dans un si petit format.</p>
  <div class="btn__main--orange-hover-blue">
  <button class="btn"><span></span><p data-start="good luck!" data-text="Elk-Tech Groupe" data-title="En Savoir plus"></p></button>
  </div>
  </div>
  <div className="col-12 col-lg-6">
  <img src={Mikrotik} className="img-fluid" alt=""/>
  </div>
  </div>
  </div>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="slider-products">
  <div className="container">
  <div className="row">
  <div className="col-12 col-lg-6">
  <h3>Mikrotik RB5009</h3>
  <p>Le routeur de laboratoire domestique robuste ultime avec USB 3.0, Ethernet 1G et 2,5G et une cage SFP+ 10G. Vous pouvez monter quatre de ces nouveaux routeurs dans un seul espace de montage en rack 1U ! Une puissance de traitement sans précédent dans un si petit format.</p>
  <div class="btn__main--orange-hover-blue">
  <button class="btn"><span></span><p data-start="good luck!" data-text="Elk-Tech Groupe" data-title="En Savoir plus"></p></button>
  </div>
  </div>
  <div className="col-12 col-lg-6">
  <img src={Mikrotik} className="img-fluid" alt=""/>
  </div>
  </div>
  </div>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="slider-products">
  <div className="container">
  <div className="row">
  <div className="col-12 col-lg-6">
  <h3>Mikrotik RB5009</h3>
  <p>Le routeur de laboratoire domestique robuste ultime avec USB 3.0, Ethernet 1G et 2,5G et une cage SFP+ 10G. Vous pouvez monter quatre de ces nouveaux routeurs dans un seul espace de montage en rack 1U ! Une puissance de traitement sans précédent dans un si petit format.</p>
  <div class="btn__main--orange-hover-blue">
  <button class="btn"><span></span><p data-start="good luck!" data-text="Elk-Tech Groupe" data-title="En Savoir plus"></p></button>
  </div>
  </div>
  <div className="col-12 col-lg-6">
  <img src={Mikrotik} className="img-fluid" alt=""/>
  </div>
  </div>
  </div>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="slider-products">
  <div className="container">
  <div className="row">
  <div className="col-12 col-lg-6">
  <h3>Mikrotik RB5009</h3>
  <p>Le routeur de laboratoire domestique robuste ultime avec USB 3.0, Ethernet 1G et 2,5G et une cage SFP+ 10G. Vous pouvez monter quatre de ces nouveaux routeurs dans un seul espace de montage en rack 1U ! Une puissance de traitement sans précédent dans un si petit format.</p>
  <div class="btn__main--orange-hover-blue">
  <button class="btn"><span></span><p data-start="good luck!" data-text="Elk-Tech Groupe" data-title="En Savoir plus"></p></button>
  </div>
  </div>
  <div className="col-12 col-lg-6">
  <img src={Mikrotik} className="img-fluid" alt=""/>
  </div>
  </div>
  </div>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="slider-products">
  <div className="container">
  <div className="row">
  <div className="col-12 col-lg-6">
  <h3>Mikrotik RB5009</h3>
  <p>Le routeur de laboratoire domestique robuste ultime avec USB 3.0, Ethernet 1G et 2,5G et une cage SFP+ 10G. Vous pouvez monter quatre de ces nouveaux routeurs dans un seul espace de montage en rack 1U ! Une puissance de traitement sans précédent dans un si petit format.</p>
  <div class="btn__main--orange-hover-blue">
  <button class="btn"><span></span><p data-start="good luck!" data-text="Elk-Tech Groupe" data-title="En Savoir plus"></p></button>
  </div>
  </div>
  <div className="col-12 col-lg-6">
  <img src={Mikrotik} className="img-fluid" alt=""/>
  </div>
  </div>
  </div>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="slider-products">
  <div className="container">
  <div className="row">
  <div className="col-12 col-lg-6">
  <h3>Mikrotik RB5009</h3>
  <p>Le routeur de laboratoire domestique robuste ultime avec USB 3.0, Ethernet 1G et 2,5G et une cage SFP+ 10G. Vous pouvez monter quatre de ces nouveaux routeurs dans un seul espace de montage en rack 1U ! Une puissance de traitement sans précédent dans un si petit format.</p>
  <div class="btn__main--orange-hover-blue">
  <button class="btn"><span></span><p data-start="good luck!" data-text="Elk-Tech Groupe" data-title="En Savoir plus"></p></button>
  </div>
  </div>
  <div className="col-12 col-lg-6">
  <img src={Mikrotik} className="img-fluid" alt=""/>
  </div>
  </div>
  </div>
  </div>
  </SwiperSlide>
  
  </Swiper>
  </>
)
}

export default Shop