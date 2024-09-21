import React from 'react'
import MikrotikList from './MikrotikList'
import { mikrotiks } from '../../../Assets/Data/dataProducts';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import logoMikrotik from '../../../Assets/img/mikrotik_logo.webp';
import { useEffect } from "react";

const CategoryMikrotik = () => {
    useEffect(() => {
        document.title = "Mikrotik - Catalogue | Elk-Tech";
    }, []);
    return (

        <>
            <Breadcrumb>
                <Breadcrumb.Item href="elktech-ci.com/boutique">Boutique</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Routers
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Elie</Breadcrumb.Item>
            </Breadcrumb>
            <div className="container-fluid ">
                <div className="hero-shop-category-mikrotik">
                </div>
            </div>
            <section className="trainings m-5">
                <div className='container container-title container-title-center'>
                    <Breadcrumb>
                        <Breadcrumb.Item > <Link to={'/boutique'}>Boutique</Link> </Breadcrumb.Item>
                        <Breadcrumb.Item active>MikroTik</Breadcrumb.Item>
                    </Breadcrumb>
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
                <img src={logoMikrotik} alt="Mikrotik Ltd Logo" className='mb-5' />
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

