import React from 'react'
import NetworkList from './NetworkList';
import { networks } from '../../../Assets/Data/dataProducts';

 
const CategoryNetwork = () => {
    return (
        <>
            <section className="trainings m-5">
                <div className='container container-title container-title-center'>
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
