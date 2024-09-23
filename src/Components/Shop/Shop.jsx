import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import Mikrotik from '../../Assets/img/Mikrotik.png'

const Shop = () => {
    return (
        <>
            <div className='container container-title'>
                <h2>Boutique</h2>
                <p>Visitez notre boutique en ligne et profitez de nos offres exceptionnelles pour construire un réseau performant et sécurisé.</p>
            </div>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[EffectFade, Pagination, Navigation]}
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
                            <div className="row d-flex align-items-center">
                                <div className="col-12 col-lg-6">
                                    <h3>Mikrotik RB500</h3>
                                    <p>Le routeur de laboratoire domestique robuste ultime avec USB 3.0, Ethernet 1G et 2,5G et une cage SFP+ 10G. Vous pouvez monter quatre de ces nouveaux routeurs dans un seul espace de montage en rack 1U ! Une puissance de traitement sans précédent dans un si petit format.</p>
                                    <div className="btn__main--orange-hover-blue">
                                        <button className="btn"><span></span><p data-start="good luck!" data-text="Elk-Tech Groupe" data-title="En Savoir plus"></p></button>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <img src={Mikrotik} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-products">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-12 col-lg-6">
                                    <h3>Mikrotik </h3>
                                    <p>Le routeur de laboratoire domestique robuste ultime avec USB 3.0, Ethernet 1G et 2,5G et une cage SFP+ 10G. Vous pouvez monter quatre de ces nouveaux routeurs dans un seul espace de montage en rack 1U ! Une puissance de traitement sans précédent dans un si petit format.</p>
                                    <div className="btn__main--orange-hover-blue">
                                        <button className="btn"><span></span><p data-start="good luck!" data-text="Elk-Tech Groupe" data-title="En Savoir plus"></p></button>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <img src={Mikrotik} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-products">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-12 col-lg-6">
                                    <h3>Mikrotik 555555</h3>
                                    <p>Le routeur de laboratoire domestique robuste ultime avec USB 3.0, Ethernet 1G et 2,5G et une cage SFP+ 10G. Vous pouvez monter quatre de ces nouveaux routeurs dans un seul espace de montage en rack 1U ! Une puissance de traitement sans précédent dans un si petit format.</p>
                                    <div className="btn__main--orange-hover-blue">
                                        <button className="btn"><span></span><p data-start="good luck!" data-text="Elk-Tech Groupe" data-title="En Savoir plus"></p></button>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <img src={Mikrotik} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-products">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-12 col-lg-6">
                                    <h3>Mikrotik jjjjjj</h3>
                                    <p>Le routeur de laboratoire domestique robuste ultime avec USB 3.0, Ethernet 1G et 2,5G et une cage SFP+ 10G. Vous pouvez monter quatre de ces nouveaux routeurs dans un seul espace de montage en rack 1U ! Une puissance de traitement sans précédent dans un si petit format.</p>
                                    <div className="btn__main--orange-hover-blue">
                                        <button className="btn"><span></span><p data-start="good luck!" data-text="Elk-Tech Groupe" data-title="En Savoir plus"></p></button>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <img src={Mikrotik} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-products">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-12 col-lg-6">
                                    <h3>Mikrotik ppppp</h3>
                                    <p>Le routeur de laboratoire domestique robuste ultime avec USB 3.0, Ethernet 1G et 2,5G et une cage SFP+ 10G. Vous pouvez monter quatre de ces nouveaux routeurs dans un seul espace de montage en rack 1U ! Une puissance de traitement sans précédent dans un si petit format.</p>
                                    <div className="btn__main--orange-hover-blue">
                                        <button className="btn"><span></span><p data-start="good luck!" data-text="Elk-Tech Groupe" data-title="En Savoir plus"></p></button>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <img src={Mikrotik} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-products">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-12 col-lg-6 ">
                                    <h3>Mikrotik cccc</h3>
                                    <p>Le routeur de laboratoire domestique robuste ultime avec USB 3.0, Ethernet 1G et 2,5G et une cage SFP+ 10G. Vous pouvez monter quatre de ces nouveaux routeurs dans un seul espace de montage en rack 1U ! Une puissance de traitement sans précédent dans un si petit format.</p>
                                    <div className="btn__main--orange-hover-blue">
                                        <button className="btn"><span></span><p data-start="good luck!" data-text="Elk-Tech Groupe" data-title="En Savoir plus"></p></button>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <img src={Mikrotik} className="img-fluid" alt="" />
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