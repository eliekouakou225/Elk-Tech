import React from 'react'
import NetworkList from './NetworkList';
import { networks } from '../../../Assets/Data/dataProducts';

 
const CategoryNetwork = () => {
    return (
        <>
            <section className="trainings m-5">
                <div className='container container-title container-title-center'>
                    <h2>Notre superbe catalogue Réseaux </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex necessitatibus, nemo iste ut alias excepturi neque corporis qui officiis nihil explicabo hic nostrum tempora deleniti totam quae a aspernatur?</p>
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
