// --------------------------------- 
// Formation section
// ---------------------------------
import React, { useRef, useState } from 'react';
// import TrainingCarousel from './TrainingCarousel/TrainingCarousel'
import { Link } from 'react-router-dom';

import TrainingSectionList from './TrainingList/TrainingSectionList';
import { trainings } from '../../Assets/Data/dataTrainings';

// import student from '../../Assets/img/student.jpg'
import trainingsImage from '../../Assets/img/trainings-image.webp'
import ourTeacherImage from '../../Assets/img/our-teachers.webp'


const TrainingSection = () => {
    return (


        <section className='m-5'>

            {/* <!-- Section Title --> */}
            <div className='container container-title container-title-right'>
                <h2>Nos Formations </h2>
                <p>« L'apprentissage est un trésor qui suivra son propriétaire partout » Confucius</p>
            </div>
            {/* <!-- End Section Title --> */}

            {/* <!-- Formations Section --> */}
            <section id="trainings" className="trainings section">

                <div className="container">

                    <div className="row gy-4 justify-content-between trainings-item">

                        <div className="col-lg-6">
                            <figure role="figure" aria-label="Trainings image">
                                <img src={trainingsImage} className="img-fluid" alt="Trainings" />
                            </figure>
                        </div>

                        <div className="col-lg-5 d-flex align-items-center">
                            <div className="content">
                                <h3>Apprendre n'a jamais ete aussi facile.</h3>
                                <p>
                                    Avec nos méthodes de formation exclusivement basées sur la pratique, nous demandons à nos apprenants de ne faire aucun effort de rétention. C'est la méthode d'enseignement qui détermine ce que l'on retient.
                                </p>
                                <div className="btn__main--orange-hover-blue">
                                    <Link to={'formations'}>
                                        <button className="btn"><span></span><p data-start="good luck!" data-text="davantage" data-title="Apprendre"></p></button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- Features Item --> */}

                    <div className="row gy-4 justify-content-between trainings-item">

                        <div className="col-lg-5 d-flex align-items-center order-2 order-lg-1">

                            <div className="content">
                                <h3>Formateurs experimentées.</h3>
                                <p>
                                    Les formations que nous proposons sont dispensées par des professionnelles expérimentées.
                                </p>

                                <div className="btn__main--blue-hover-orange" >
                                    <Link to={'formations'}>
                                        <button className="btn" data-cursor-size="20px"><span></span><p data-start="good luck!" data-text="Formations" data-title="Details"></p></button>
                                    </Link>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6 order-1 order-lg-2">
                            <figure role="figure" aria-label="teachers for Elk Tech groupe">
                                <img src={ourTeacherImage} className="img-fluid" alt="teachers for Elk Tech groupe" />
                            </figure>
                        </div>

                    </div>
                    {/* <!-- Features Item --> */}

                </div>

            </section>

            {/* <!-- /Training Carousel  Section --> */}
            <div className="container-fluid mt-5">
                <div className='container container-title'>
                    <h2>Bien plus que de simples formations </h2>
                    <p>Investissez dans l'avenir avec nos formations durables, conçues pour vous fournir des compétences intemporelles et une expertise solide. <br /> </p>

                </div>
                <TrainingSectionList trainings={trainings} />
            </div>
        </section>

    )
}

export default TrainingSection