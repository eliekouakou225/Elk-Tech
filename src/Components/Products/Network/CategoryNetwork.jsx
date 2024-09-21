import React from 'react'
import NetworkList from './NetworkList';
import { networks } from '../../../Assets/Data/dataProducts';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import { useEffect } from "react";

const CategoryNetwork = () => {
    useEffect(() => {
        document.title = " Réseau - Catalogue | Elk-Tech";
    }, []);
    return (
        <>
            <section className="trainings m-5">
                <div className='container container-title container-title-center'>
                    <Breadcrumb>
                        <Breadcrumb.Item > <Link to={'/formations'}>Boutique</Link> </Breadcrumb.Item>
                        <Breadcrumb.Item active>Réseau</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2>Notre superbe catalogue Réseaux </h2>
                    <p>Quand le besoin de connectivité est inéluctable à tous.</p>
                </div>
                <div className="container">
                    <div className="row g-4">
                        <NetworkList networks={networks} />
                    </div>
                </div>
            </section>



        </>
    )
}

export default CategoryNetwork
