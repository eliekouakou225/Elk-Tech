import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import MikrotikCatalog from '../../Assets/img/mikrotik_router.webp';
import SwitchCatalog from '../../Assets/img/switch-catalogue.webp';
import CameraIp from '../../Assets/img/camera-ip.webp';
import Deskphones from '../../Assets/img/deskphones.webp';
import Accessories from '../../Assets/img/accesoires.webp';

const Shop = () => {
    return (
        <>
            <div className='container container-title'>
                <h2>Boutique</h2>
                <p>Visitez notre boutique en ligne et profitez de nos offres exceptionnelles pour construire un réseau performant et sécurisé.</p>
            </div>
            <Swiper
                spaceBetween={10}
                effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
                className="mySwiper"
                style={{
                    "--swiper-pagination-color": "#FFFFFF",
                    "--swiper-navigation-color": "#21417F",
                    "--swiper-navigation-size": "25px",
                    "--swiper-pagination-bullet-size": "12px",

                }}
            >
                <SwiperSlide>
                    <div className="slider-products">
                        <div className="container">
                            <div className="row ">
                                <div className="col-12 col-lg-6 ">
                                    <h3>Découvrez nos switchs</h3>
                                    <p>La solution idéale pour renforcer la performance et la fiabilité de votre réseau. Que ce soit pour un usage domestique ou professionnel, nos modèles offrent des fonctionnalités avancées pour une gestion efficace du trafic et une connectivité fluide. Faites le choix de la qualité pour optimiser votre infrastructure réseau.</p>
                                    <div className="btn__main--orange-hover-blue">
                                        <Link to={'/boutique/categorie/reseau'}>
                                            <button className="btn"><span></span><p data-start="good luck!" data-text="Catalogue" data-title="Voir plus"></p></button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <img src={SwitchCatalog} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-products">
                        <div className="container">
                            <div className="row ">
                                <div className="col-12 col-lg-6 ">
                                    <h3>Explorez notre sélection de solutions Mikrotik</h3>
                                    <p>Conçues pour répondre à tous vos besoins en matière de réseau. Que vous cherchiez à améliorer la gestion de votre Wi-Fi, à configurer des routeurs performants ou à interconnecter plusieurs sites, nos équipements Mikrotik offrent puissance, flexibilité et sécurité. Optimisez votre infrastructure avec des solutions réseau fiables et évolutives.</p>
                                    <div className="btn__main--orange-hover-blue">
                                        <Link to={'/boutique/categorie/mikrotik'}>
                                            <button className="btn"><span></span><p data-start="good luck!" data-text="Catalogue" data-title="Voir plus"></p></button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <img src={MikrotikCatalog} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-products">
                        <div className="container">
                            <div className="row ">
                                <div className="col-12 col-lg-6 ">
                                    <h3>Caméras IP et analogiques </h3>
                                    <p>Explorez notre gamme de caméras IP et analogiques pour assurer la sécurité de vos espaces. Que vous recherchiez une solution de surveillance moderne avec des caméras IP haute définition ou la robustesse des systèmes analogiques, nous avons l’équipement adapté à vos besoins. Profitez d’une installation facile, d’une qualité d’image optimale et d’un contrôle à distance pour une tranquillité d’esprit totale.</p>
                                    <div className="btn__main--orange-hover-blue">
                                        <Link to={'/boutique'}>
                                            <button className="btn"><span></span><p data-start="good luck!" data-text="Catalogue" data-title="Voir plus"></p></button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 d-flex justify-content-center">
                                    <img src={CameraIp} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-products">
                        <div className="container">
                            <div className="row ">
                                <div className="col-12 col-lg-6 ">
                                    <h3>Découvrez notre gamme de téléphones IP</h3>
                                    <p>conçue pour offrir des solutions de communication claires et efficaces au sein de votre entreprise. Grâce à une technologie de pointe, nos téléphones IP assurent une qualité d’appel optimale et une intégration parfaite avec vos systèmes réseau existants. Améliorez votre productivité et simplifiez vos échanges professionnels avec des équipements fiables et performants, adaptés à vos besoins en téléphonie moderne.</p>
                                    <div className="btn__main--orange-hover-blue">
                                        <Link to={'/boutique'}>
                                            <button className="btn"><span></span><p data-start="good luck!" data-text="Catalogue" data-title="Voir plus"></p></button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <img src={Deskphones} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-products">
                        <div className="container">
                            <div className="row ">
                                <div className="col-12 col-lg-6">
                                    <h3>Explorez notre gamme d’accessoires informatiques</h3>
                                    <p>Améliorez votre expérience utilisateur avec des produits de qualité. Que vous ayez besoin de câbles, claviers, souris, hubs USB, ou tout autre accessoire, nous avons tout ce qu’il vous faut pour compléter et optimiser votre setup. Fiabilité, performance et ergonomie sont au rendez-vous pour répondre à tous vos besoins technologiques.</p>
                                    <div className="btn__main--orange-hover-blue">
                                        <Link to={'/boutique/categorie/accessoires'}>
                                            <button className="btn"><span></span><p data-start="good luck!" data-text="Catalogue" data-title="Voir plus"></p></button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <img src={Accessories} className="img-fluid" alt="" />
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