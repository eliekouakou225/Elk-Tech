import React from 'react'
import TrainingPageList from '../Components/Training/TrainingList/TrainingPageList';
import { trainings } from '../Assets/Data/dataTrainings';
import { testimonials } from '../Assets/Data/dataTrainings';
import TrainingTestimonials from '../Components/Training/TrainingTestimonials';


const TrainingPage = () => {
    return (
        <>
            <section className="trainings m-5">
                <div className='container container-title container-title-right'>
                    <h2>Nos Formations </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex necessitatibus, nemo iste ut alias excepturi neque corporis qui officiis nihil explicabo hic nostrum tempora deleniti totam quae a aspernatur?</p>
                </div>
                <div className="container">
                    <div className="row g-4">
                        <TrainingPageList trainings={trainings} />
                    </div>
                </div> 
            </section>
            <TrainingTestimonials testimonials={testimonials} />

            
        </>
    )
}

export default TrainingPage