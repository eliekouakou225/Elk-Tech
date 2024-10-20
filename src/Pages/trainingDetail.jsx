import React from 'react';
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { trainings } from '../Assets/Data/dataTrainings';
import { Link } from 'react-router-dom';
import { convertTitleToUrl } from '../Components/Utils/utils'
import Error404 from './Error404'
import TrainingImgCertified from "../Assets/img/certified.webp"
import { Accordion } from "react-bootstrap";

function TrainingDetail() {
    const { title } = useParams();
    const training = trainings.find((training) => convertTitleToUrl(training.title) === title);
    const pageTitle = `${training.title} - Formation`;
    const currentUrl = window.location.href;
    useEffect(() => {
        document.title = `${pageTitle} | Elk-Groupe`;
    }, [pageTitle]);


    if (!training) {
        return <Error404 />;
    }

    return (
        <>
            <div className="container-fluid bg-header-training-detail">
                <div className="container">
                    <section className="header-training-detail ">
                        <h2>Formation en {training.title} </h2>
                        <p> Devenez expert en {training.title} en <strong> {training.duration} jours </strong> </p>
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                <li className="inline-flex items-center">
                                    <Link to={'/'} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                        </svg>
                                        Acceuil
                                    </Link>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <Link to={'/formations'} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Formations</Link>
                                    </div>
                                </li>
                                <li aria-current="page">
                                    <div className="flex items-center">
                                        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{training.title}</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </section>
                </div>
            </div>
            <div className='trainingdetail'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <figure role="figure" aria-label="Photo of skill of elk tech structure team">
                                <img loading="lazy" src={training.image_training} className="training__img" alt="training `{training.title}`" />
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
                                <img src={TrainingImgCertified} loading="lazy" className="training__img" alt="training `{training.title}`" />
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
                    <div className='registration-button-section'>
                        <h4 className='mt-2'>S'inscrire maintenant</h4>
                        <p className='mb-5'>Prenez une longueur d'avance dans votre carrière  avec notre formation pratique dès aujourd'hui !</p>
                        <div className='d-flex justify-content-around'>
                            <div>
                                <Link to={'/formation/inscription'} >
                                    <button className="registration-button-form">
                                        <div>
                                            <div className="pencil"></div>
                                            <div className="folder">
                                                <div className="top">
                                                    <svg viewBox="0 0 24 27">
                                                        <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                                                    </svg>
                                                </div>
                                                <div className="paper"></div>
                                            </div>
                                        </div>
                                        Via le formulaire
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <Link to={`https://wa.me/2250788898998?text=Bonjour Elk-Tech Groupe !,  j'ai pris connaissance de toutes les informations concernant la formation en ${training.title}.  Je souhaite effectuer mon inscription. ${currentUrl}`} style={{ 'textDecoration': 'none' }}>
                                    <button className='registration-button-whatsapp'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="18" fill="currentColor" width="18"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                                        <span>Via WhatsApp</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row m-5">
                        <h4 className='mb-5 mt-2'>Modules de formation</h4>
                        <Accordion>
                            {training.contentModule.map(modules => (
                                <Accordion.Item eventKey={modules.moduleid} key={modules.moduleid}>
                                    <Accordion.Header >{modules.titlemodule}</Accordion.Header>
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default TrainingDetail;
