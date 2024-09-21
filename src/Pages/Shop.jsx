import React from 'react'
import { useEffect } from "react";
import HeroShopImage from '../Assets/img/depannage-informatique-item-6-1024x523.png'
import ImageCatalogNetwork from '../Assets/img/collection-item1.jpg'
import Accesoires from '../Assets/img/collection-item2.jpg'
import Accesoires2 from '../Assets/img/collection-item3.jpg'
import learning from '../Assets/img/formation.webp'
import { Link } from 'react-router-dom'
// import { products } from '../Assets/Data/dataProducts'
import imgShop1 from '../Assets/img/img_shop.png'
import imgShop2 from '../Assets/img/img_shop2.png'
import imgShop3 from '../Assets/img/img_shop3.png'
import imgShop4 from '../Assets/img/img_shop4.png'

import { accessories } from '../Assets/Data/dataProducts'
import AccessoriesList from '../Components/Products/Accessories/AccessoriesList'

import { mikrotiks } from '../Assets/Data/dataProducts'
import MikrotikList from '../Components/Products/Mikrotik/MikrotikList'


import { networks } from '../Assets/Data/dataProducts'
import NetworkList from '../Components/Products/Network/NetworkList'

// import ProductItem from '../Components/Products/ProductItem'
import PubTechnicien_portait from "../Assets/img/techncien-for-web-portrait.webp"
import PubTechnicien_paysage from "../Assets/img/techncien-for-web-paysage.webp"


const Shop = () => {
    // const filteredProducts = products.slice(0, 5);
    useEffect(() => {
        document.title = "Boutique | Elk-Tech";
    }, []);
    const filteredMikrotiks = mikrotiks.slice(0, 10);
    const filteredNetworks = networks.slice(0, 10);
    const filteredAccessories = accessories.slice(0, 10);
    return (
        <>
            {/* <!-- Start Hero Section --> */}

            <div className="hero-shop">
                <div className="container ">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Matériel Informatique  <span className="d-block"> Haut de Gamme à Prix Imbattables !</span></h1>
                                <p className="mb-4 text-white">Équipez-vous facilement avec nos solutions informatiques : Livraison Rapide et Sécurisée !</p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                {/* <img src={HeroShopImage} className="img-fluid" alt=' on Hero ' /> */}
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex align-items-end">
                        <div className="col-3">
                            <img src={imgShop1} alt="" />
                        </div>
                        <div className="col-3">
                            <img src={imgShop2} alt="" />
                        </div>
                        <div className="col-3">
                            <img src={imgShop3} alt="" />
                        </div>
                        <div className="col-3">
                            <img src={imgShop4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section --> */}
            <section id="latest-collection">
                <div className="container-fluid mt-5">
                    <div className="row">

                        <div className="col-lg-2 ">
                            <Link to={"/home"}>

                                <img src={PubTechnicien_portait} alt="" className='portrait-image image-rounded rounded' />
                                <img src={PubTechnicien_paysage} alt="" className='paysage-image image-rounded rounded' />
                            </Link>
                        </div>
                        <div className="col-lg-10">
                            <div className="product-collection row">
                                <div className="col-lg-7 col-md-12 left-content">
                                    <div className="collection-item">
                                        <div className="products-thumb">
                                            <Link to={"/boutique/categorie/reseau"}>
                                                <img src={ImageCatalogNetwork} alt="collection item" className="large-image image-rounded rounded" />
                                            </Link>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 product-entry">
                                            {/* <div className="categories">Equipements</div>
                                            <h3 className="item-title text-danger">Reseau</h3>
                                            <p>Des équipements haut de gamme maintenant à votre portée.</p>
                                            <div className="btn-wrap">
                                                <a href="shop.html" className="d-flex align-items-center">shop collection <i className="icon icon-arrow-io"></i>
                                                </a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 right-content flex-wrap">
                                    <div className="collection-item top-item">
                                        <div className="products-thumb">
                                            <Link to={'/boutique/categorie/mikrotik'} >
                                                <img src={Accesoires} alt="collection item" className="small-image image-rounded" />
                                            </Link>
                                        </div>
                                        <div className="col-md-6 product-entry">
                                            {/* <div className="categories">Bien au-delà de simples routeurs.</div>
                                            <h3 className="item-title">Mikrotik</h3> */}
                                            {/* <div className="btn-wrap">
                                                <a href="shop.html" className="d-flex align-items-center">shop collection <i className="icon icon-arrow-io"></i>
                                                </a>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="collection-item bottom-item">
                                        <div className="products-thumb">
                                            <Link to={"/boutique/categorie/accessoires"}>

                                                <img src={Accesoires2} alt="collection item" className="small-image image-rounded" />
                                            </Link>
                                        </div>
                                        {/* <div className="col-md-6 product-entry">
                                            <div className="categories">Quand le rapport qualité-prix se combine.</div>
                                            <h3 className="item-title">Accesoires</h3>
                                            <div className="btn-wrap">
                                                <a href="shop.html" className="d-flex align-items-center">shop collection <i className="icon icon-arrow-io"></i>
                                                </a>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className='container container-title'>
                            <h2>Quelques produits de notre catalogue Mikrotik</h2>
                            <p>MikroTik fabrique des routeurs, des commutateurs et des systèmes sans fil pour tous les usages, des petits bureaux ou des maisons aux réseaux des FAI des opérateurs.</p>
                        </div>
                        <div className="col-10">
                            <MikrotikList mikrotiks={filteredMikrotiks} />
                            <div className='container-btns'>
                                <div className="btn__main--orange-hover-blue">
                                    <Link to={'/boutique/categorie/mikrotik'}><button className="btn"><span></span><p data-start="good luck!" data-text="Mikrotik" data-title="Voir plus"></p></button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <img src={learning} alt="" />
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className='container container-title'>
                            <h2>Quelques produits de notre catalogue réseau informatique</h2>
                            <p>MikroTik fabrique des routeurs, des commutateurs et des systèmes sans fil pour tous les usages, des petits bureaux ou des maisons aux réseaux des FAI des opérateurs.</p>
                        </div>

                        <div className="col-12">
                            <NetworkList networks={filteredNetworks} />
                        </div>
                        <div className='container-btns'>
                            <div className="btn__main--orange-hover-blue">
                                <Link to={'/boutique/categorie/reseau'}><button className="btn"><span></span><p data-start="good luck!" data-text="Accessoires" data-title="Voir plus"></p></button></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className='container container-title'>
                            <h2>Quelques produits de notre catalogue Accessoire informatique</h2>
                            <p>MikroTik fabrique des routeurs, des commutateurs et des systèmes sans fil pour tous les usages, des petits bureaux ou des maisons aux réseaux des FAI des opérateurs.</p>
                        </div>
                        <div className="col-12">
                            <AccessoriesList accessories={filteredAccessories} />
                        </div>
                        <div className='container-btns'>
                            <div className="btn__main--orange-hover-blue">
                                <Link to={'/boutique/categorie/accessoires'}><button className="btn"><span></span><p data-start="good luck!" data-text="Accessoires" data-title="Voir plus"></p></button></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Shop