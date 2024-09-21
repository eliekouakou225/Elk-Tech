import React from 'react'
import AccessoriesList from './AccessoriesList';
import { accessories } from '../../../Assets/Data/dataProducts';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

const CategoryAccessories = () => {
    return (
        <>
            <div className="container-fluid ">
                <div className="hero-shop-category-computer-accessories">
                </div>
            </div>
            <section className="trainings m-5">
                <div className='container container-title container-title-center'>
                    <div>
                        <Breadcrumb>
                            <Breadcrumb.Item > <Link to={'/boutique'}>Boutique</Link> </Breadcrumb.Item>
                            <Breadcrumb.Item active>Accessoires informatique</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <h2>Notre Catalogue Accesoires informatique</h2>
                    <p>Tous les gadgets de dernière technologie à votre porté de main.</p>
                </div>
                <div className="container">
                    <div className="row g-4">
                        <AccessoriesList accessories={accessories} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoryAccessories
