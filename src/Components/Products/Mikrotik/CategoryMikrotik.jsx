import React from 'react'
import MikrotikList from './MikrotikList'
import { mikrotiks } from '../../../Assets/Data/dataProducts';
import { Link } from 'react-router-dom';
import logoMikrotik from '../../../Assets/img/mikrotik_logo.webp';
import { useEffect } from "react";

const CategoryMikrotik = () => {
    useEffect(() => {
        document.title = "Mikrotik - Catalogue | Elk-Tech";
    }, []);
    return (

        <>

            <div className="container-fluid ">
                <div className="hero-shop-category-mikrotik">
                </div>
            </div>
            <section className="trainings m-5">
                <div className='container container-title container-title-center'>
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link to={'/boutique'} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Boutique
                                </Link>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Mikrotik</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <h2>Notre superbe catalogue Mikrotik </h2>
                    <p>RouterOS est hautement configurable, permettant une personnalisation poussée pour répondre à des besoins spécifiques.</p>
                </div>
                <div className="container">
                    <div className="row g-4">
                        <MikrotikList mikrotiks={mikrotiks} />
                    </div>
                </div>
            </section>
            <div className='container container-title'>
                <img src={logoMikrotik} alt="Mikrotik Ltd Logo" className='mb-5' loading="lazy"/>
                <h2>Apropos de Mikrotik </h2>
                <p>Mikrotīkls Ltd., connu sous l’appellation internationale MikroTik, est un fabricant de matériel de réseau informatique basé en Lettonie. Il vend des composantes de réseau sans fil et des routeurs.</p>
                <h2>RouterOS</h2>
                <p>Le produit vedette de MikroTik est le système d'exploitation MikroTik RouterOS, dont le système d'exploitation est bâti sur le kernel Linux. Ce système d'exploitation, livré sur la gamme de routeurs vendu par MikroTik, inclus des fonctionnalités telles qu'un Pare-Feu, un serveur et un client VPN, contrôler le trafic en fonction d'une qualité de service (QOS), un accès réseau sans fil, ou bien des fonctionnalités de routage plus avancé tel que l'utilisation de protocoles de routage dynamique tel que BGP, OSPF, etc. Le système peut également être utilisé afin de créer un portail captif. Il est de plus possible de déployer une copie de ce système sur un ordinateur traditionnel, afin d'en faire un routeur. Une version "Cloud Hosted Router" (Abrégée CHR) est disponible afin de permettre la virtualisation de ce système.

                    Ce système d'exploitation possède une licence multi-niveaux, chaque niveau offrant davantage de fonctionnalités. Les frais de licence seront définis sur le niveau sélectionné. Une interface graphique, nommée Winbox, est également disponible afin de configurer le système. Enfin, une API permet de personnaliser le système et le surveiller.</p>
            </div>



        </>
    )
}

export default CategoryMikrotik

