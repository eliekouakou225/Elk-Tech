// src/components/Home.js
import React from 'react';
// import React, { useState } from 'react';
import SolutionSectionList from './SolutionList/SolutionSectionList';
import { solutions } from '../../Assets/Data/dataSolutions';

const SolutionSection = () => {

    return (
        <section id="solutions" className="solutions sections-bg">
            <div className="container" >

                {/* <!-- Section Title --> */}
                <div className='container container-title container-title-center'>
                    <h2>Nos Solutions</h2>
                    <p>Transformez vos idées en innovations numériques avec notre expertise informatique. </p>

                </div>
                {/* <!-- End Section Title --> */}

                <div className="row gy-4">
                    <SolutionSectionList solutions={solutions} />
                </div>

            </div>
        </section>
    );
}

export default SolutionSection;
