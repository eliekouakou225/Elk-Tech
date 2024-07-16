import React from 'react'
import MikrotikList from './MikrotikList'
import { mikrotiks } from '../../../Assets/Data/dataProducts';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const CategoryMikrotik = () => {
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
                <div className="hero-shop-category">

                </div>
            </div>
            <section className="trainings m-5">
                <div className='container container-title container-title-center'>
                    <h2>Notre superbe catalogue Mikrotik </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex necessitatibus, nemo iste ut alias excepturi neque corporis qui officiis nihil explicabo hic nostrum tempora deleniti totam quae a aspernatur?</p>
                </div>
                <div className="container">
                    <div className="row g-4">
                        <MikrotikList mikrotiks={mikrotiks} />
                    </div>
                </div>
            </section>



        </>
    )
}

export default CategoryMikrotik

