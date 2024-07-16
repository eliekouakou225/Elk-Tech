import React from 'react'
import AccessoriesList from './AccessoriesList';
import { accessories } from '../../../Assets/Data/dataProducts';


const CategoryAccessories = () => {
    return (
        <>
            <section className="trainings m-5">
                <div className='container container-title container-title-center'>
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
