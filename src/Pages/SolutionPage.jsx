import React from 'react'
import SolutionPageList from '../Components/Solution/SolutionList/SolutionPageList';
import { solutions } from '../Assets/Data/dataSolutions';
import SolutionTestimonials from '../Components/Solution/SolutionTestimonials';
// import { testimonials } from '../Assets/Data/dataSolutions';
const SolutionPage = () => {
    return (
        <>
            <section className="solutionsPage m-5">
                <div className='container container-title'>
                    <h2>Nos Solutions</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex necessitatibus, nemo iste ut alias excepturi neque corporis qui officiis nihil explicabo hic nostrum tempora deleniti totam quae a aspernatur?</p>
                </div>
                <div className="container">
                    <div className="row g-4">
                        <SolutionPageList solutions={solutions} />
                    </div>
                </div>
            </section>
            <SolutionTestimonials  /> 
        </>
    ) 
}

export default SolutionPage

