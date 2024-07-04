import React from 'react';
import { useParams } from 'react-router-dom';
import { trainings } from '../Assets/Data/dataTrainings';

import { convertTitleToUrl } from '../Components/Utils/utils'
import Error404 from './Error404'
// import TrainingImg from "../Assets/img/image-of-our-team.webp"
import TrainingImgCertified from "../Assets/img/trainings-image.webp"
import { Accordion } from "react-bootstrap";

function TrainingDetail() {
    // const { id } = useParams(); 
    const { title } = useParams();
    // const training = trainings.find(t => t.id === parseInt(id) );
    const training = trainings.find((training) => convertTitleToUrl(training.title) === title);

    if (!training) {
        return <Error404 />;
    }

    return (
        // <div className='p-150'>
        //     <h1>{training.title}</h1>
        //     <p>{training.description}</p>
        //     <p>
        //         {training.contentModule.map(modules => (
        //             <>
        //                 <p>{modules.tileModule}</p>
        //                 {modules.moduleItems.map(modulesItem => (
        //                     <li>{modulesItem} </li>
        //                 ))}
        //             </>
        //         ))}
        //     </p>
        // </div>
        <div className='trainingdetail'>
            <div className='container container-title'>
                <h2>Formation en {training.title} </h2>
                <p> Devenez expert en {training.title} en <strong> {training.duration} jours </strong> </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <figure role="figure" aria-label="Photo of skill of elk tech structure team">
                            <img src={training.image_training} className="training__img" alt="training `{training.title}`" />
                        </figure>
                    </div>
                    <div className="col-lg-6">
                        <h4>Introduction {training.title}</h4>
                        <p>{training.introduction}</p>
                        <h4>Description formation</h4>
                        <p>{training.long_description}</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark details pt-3 mt-5">
                <div className="container pt-3 pb-3">
                    <h1 className="text-white mb-4">Apprenez votre métier avec des professionnels</h1>
                    <div className="row g-5">
                        <div className="col-12 col-md-6">
                            <p className='text-white'><i className="fa fa-check-circle-o" aria-hidden="true"></i> Expérimentés</p>
                            <p className='text-white'><i className="fa fa-check-circle-o" aria-hidden="true"></i> Professionnels</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className='text-white'> <i className="fa fa-check-circle-o" aria-hidden="true"></i> Motivés</p>
                            <p className='text-white'> <i className="fa fa-check-circle-o" aria-hidden="true"></i> Suivi individuel</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="d-flex rounded p-3">
                                <i className="fa fa-users fa-3x text-white"></i>
                                <div className="ms-3">
                                    <h2 className="text-white mb-0" data-toggle="counter-up"> {training.duration} Jours </h2>
                                    <p className="text-white mb-0">Durée </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="d-flex rounded p-3">
                                <i className="fa fa-users fa-3x text-white"></i>
                                <div className="ms-3">
                                    <h2 className="text-white mb-0" data-toggle="counter-up">{training.session} séances  </h2>
                                    <p className="text-white mb-0">Nombre de séances</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="d-flex rounded p-3">
                                <i className="fa fa-users fa-3x text-white"></i>
                                <div className="ms-3">
                                    <h2 className="text-white mb-0" data-toggle="counter-up">2 ou 3 séances <span className='text-danger'>*</span></h2>
                                    <p className="text-white mb-0">Nombre de séances par semaine</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="d-flex rounded p-3">
                                <i className="fa fa-users fa-3x text-white"></i>
                                <div className="ms-3">
                                    <h2 className="text-white mb-0" data-toggle="counter-up">9h-12h ou 13h-16h <span className='text-danger'>*</span></h2>
                                    <p className="text-white mb-0">Heure de Formation</p>
                                </div>
                            </div>
                        </div>
                        <p className='text-white'><span className='text-danger'>*</span> En fonction de la disponibilité des étudiants et des formateurs</p>
                        <p className='text-white'><span className='text-danger'>NB : </span> Les jours de formation varient aussi en fonction de la disponibilité des étudiants et des formateurs.</p>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}

            <div className='container container-title'>
                <h2>De 0 à certifié {training.worker} professionnel </h2>
                <p>  C'est le meilleur moment pour apprendre. #It's possible    </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <figure role="figure" aria-label="Photo of skill of elk tech structure team">
                            <img src={TrainingImgCertified} className="training__img" alt="training `{training.title}`" />
                        </figure>
                    </div>
                    <div className="col-lg-6">
                        <p>Suivre une formation 100% pratique est crucial pour acquérir des compétences concrètes et immédiatement applicables dans le monde professionnel. En mettant l'accent sur des exercices réels et des mises en situation, ce type de formation permet aux apprenants de maîtriser les outils et les techniques de leur domaine de manière efficace. De plus, l'obtention d'un certificat en fin de formation atteste de leur expertise et de leur sérieux, renforçant leur crédibilité auprès des employeurs et ouvrant de nouvelles opportunités de carrière.</p>
                    </div>
                </div>
                <div className='container container-title container-title-center'>
                    <h2>Frais de formation </h2>
                    <p> Ormi ces frais de formations il n'y aura aucun autre frais  </p>
                </div>
                <div className="card__container mb-5">
                    <div className="card__price">
                        <h5>Inscription</h5>
                        <h4>5000FCFA</h4>
                        <p>Payable Cash ou Mobile Money</p>
                    </div>
                    <div className="card__price">
                        <h5>Frais de formation</h5>
                        <h4>{training.price}FCFA</h4>
                        <p>Payable en 03 modalités</p>
                    </div>
                </div>
                <div className="row m-5">
                    <h4 className='mb-5 mt-2'>Modules de formation</h4>
                    <Accordion>
                        {training.contentModule.map(modules => (
                            <Accordion.Item eventKey={modules.moduleid} key={modules.moduleid}>
                                <Accordion.Header className='accordion--header'>{modules.titlemodule}</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        {modules.moduleItems.map(moduleitem => (
                                            <li key={moduleitem.moduleid} ><i className="fa fa-check-circle-o" aria-hidden="true"></i> {moduleitem} </li>
                                        ))}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>

                    {/* {training.contentModule.map(modulesItem => (
                        <li>{modulesItem} </li>
                    ))} */}
                </div>
            </div>
        </div>
    );
}

export default TrainingDetail;
