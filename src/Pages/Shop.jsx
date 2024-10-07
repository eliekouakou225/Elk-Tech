/* **********************************
*******Online shop 
*************************/

import React from 'react'
import { useEffect } from "react";
import ImageCatalogNetwork from '../Assets/img/collection-item1.jpg'
import ImageCatalogMikrotik from '../Assets/img/collection-item2.jpg'
import ImageCatalogAccesoires from '../Assets/img/collection-item3.jpg'
import learning from '../Assets/img/formation.webp'
import { Link } from 'react-router-dom'


import { accessories } from '../Assets/Data/dataProducts'
import AccessoriesList from '../Components/Products/Accessories/AccessoriesList'

import { mikrotiks } from '../Assets/Data/dataProducts'
import MikrotikList from '../Components/Products/Mikrotik/MikrotikList'


import { networks } from '../Assets/Data/dataProducts'
import NetworkList from '../Components/Products/Network/NetworkList'

import PubTechnicien_portait from "../Assets/img/techncien-for-web-portrait.webp"
import PubTechnicien_paysage from "../Assets/img/techncien-for-web-paysage.webp"


const Shop = () => {
    useEffect(() => {
        document.title = "Boutique | Elk-Tech";
    }, []);
    const currentUrl = window.location.href;
    const filteredMikrotiks = mikrotiks.slice(0, 10);
    const filteredNetworks = networks.slice(0, 10);
    const filteredAccessories = accessories.slice(0, 10);
    return (
        <>

            <div >
                <div className="" style={{ marginTop: 72 }} >
                    <section className="relative py-12 bg-white sm:py-16 lg:py-20">
                        <div className="absolute inset-0">
                            <img className="object-cover w-full h-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/grid-pattern.png" alt="" />
                        </div>

                        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                            <div className="max-w-xl mx-auto text-center">
                                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">Matériel Informatique Haut de Gamme à Prix Imbattables !</h1>
                                <p className="max-w-md mx-auto mt-6 text-base font-normal leading-7 text-gray-500">Équipez-vous facilement avec nos solutions informatiques : Livraison Rapide et Sécurisée !</p>

                                <ul className="flex items-center justify-center mt-6 space-x-6 sm:space-x-8">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-xs font-medium text-gray-900 sm:text-sm"> Grande marque </span>
                                    </li>

                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-xs font-medium text-gray-900 sm:text-sm"> Prix abordable </span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-xs font-medium text-gray-900 sm:text-sm"> Support technique</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-xs font-medium text-gray-900 sm:text-sm"> Livraison partout en Afrique</span>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </section>
                </div>
            </div>

            <section id="latest-collection" >
                <div className="container-fluid mt-5">
                    <div className="row">

                        <div className="col-lg-2 ">
                            <Link to={`https://wa.me/2250788898998?text=Bonjour Elk-Tech Groupe ! j'ai besoin d'un technicien.  ${currentUrl}`} >

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

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 right-content flex-wrap">
                                    <div className="collection-item top-item">
                                        <div className="products-thumb">
                                            <Link to={'/boutique/categorie/mikrotik'} >
                                                <img src={ImageCatalogMikrotik} alt="collection item" className="small-image image-rounded" />
                                            </Link>
                                        </div>
                                        <div className="col-md-6 product-entry">

                                        </div>
                                    </div>
                                    <div className="collection-item bottom-item">
                                        <div className="products-thumb">
                                            <Link to={"/boutique/categorie/accessoires"}>

                                                <img src={ImageCatalogAccesoires} alt="collection item" className="small-image image-rounded" />
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
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
                            <Link to={'/formations'}>
                                <img src={learning} alt="" />
                            </Link>
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