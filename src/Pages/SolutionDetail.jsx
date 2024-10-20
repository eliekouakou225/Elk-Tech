import React from 'react'
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import Skill from '../Components/Skill/Skill'
import { Link } from 'react-router-dom';
import { solutions } from '../Assets/Data/dataSolutions';
import { convertTitleToUrl } from '../Components/Utils/utils'
import Error404 from './Error404'
import { Accordion } from "react-bootstrap";

const currentUrl = window.location.href;


function SolutionDetail() {

    const { title } = useParams();
    const solution = solutions.find((solution) => convertTitleToUrl(solution.title) === title);


    const pageTitle = `${solution.title} - Solution`;
    useEffect(() => {
        document.title = `${pageTitle} | Elk-Tech`;
    }, [pageTitle]);

    if (!solution) {
        return <Error404 />;
    }
    return (

        <section className='solutionsdetails'>
            <div className="container-fluid bg-header-training-detail">
                <div className="container">
                    <section className="header-training-detail ">
                        <h2> {solution.title} </h2>
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
                                        <Link to={'/solutions'} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Solutions</Link>
                                    </div>
                                </li>
                                <li aria-current="page">
                                    <div className="flex items-center">
                                        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{solution.title}</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>

                    </section>
                </div>
            </div>
            <div className="solution_infos pt-3 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <p className="mb-5">{solution.small_description}</p>
                            <h2 className="mb-4">Vous méritez l'excellence.</h2>
                            <img src={solution.image_solution2} loading="lazy" alt="service " className='Service__img mb-3' />
                            <p>{solution.long_description}</p>
                            <div className="text-box mb-5">
                                <h3>Faites la différence grace à nous</h3>
                                <p>Chez Elk-Tech Groupe, nous comprenons que chaque entreprise a des besoins spécifiques. C’est pourquoi nous nous engageons à offrir des solutions technologiques sur mesure, adaptées à vos objectifs uniques. Notre expertise diversifiée couvre une large gamme de services, incluant l'infrastructure réseau, la sécurité informatique, la gestion du WiFi professionnel, et bien plus encore. Nous sommes constamment à la pointe des dernières innovations pour vous garantir des solutions performantes, sécurisées et évolutives. Avec nous, vous bénéficiez d'un accompagnement personnalisé, d'une qualité irréprochable et d'une transparence totale dans la mise en œuvre de vos projets.</p>
                            </div>
                            <p className="mb-4">Nous nous distinguons non seulement par notre savoir-faire, mais aussi par notre engagement à offrir des tarifs compétitifs sans compromis sur la qualité. Nous comprenons l'importance d'une infrastructure fiable pour la croissance de votre entreprise, et c'est pourquoi notre équipe est disponible 24/7 pour vous fournir le support dont vous avez besoin. Avec Elk-Tech Groupe, vous choisissez un partenaire de confiance qui allie expertise, réactivité et flexibilité, afin que vous puissiez vous concentrer sur l’essentiel : la réussite de votre activité.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row m-3">
                    <div className="col-lg-6 mb-4">
                        <h4>Ceux-ci, mais pas que...</h4>
                        <Accordion>
                            {solution.skill_list.map(skill => (
                                <Accordion.Item eventKey={skill.skill_list_id} key={skill.skill_list_id}>
                                    <Accordion.Header className='accordion--header'>{skill.skill_list_title}</Accordion.Header>
                                    <Accordion.Body>
                                        {skill.skill_list_description}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                    <div className="col-lg-6  mb-4">
                        <h4>Dites-nous de quoi avez-vous besoin</h4>
                        <div className='d-flex justify-content-around'>
                            <div>
                                <Link to={'/devis'} >
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
                                <Link to={`https://wa.me/2250788898998?text=Bonjour Elk-Tech Groupe !,  J'aimerais avoir plus d'informations sur ${currentUrl}`} style={{ 'textDecoration': 'none' }}>
                                    <button className='registration-button-whatsapp'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="18" fill="currentColor" width="18"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                                        <span>Via WhatsApp</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="advantage-services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-container">
                                    <h2>Meilleur rapport qualité-prix du marché
                                    </h2>
                                    <p className="p-large">Expérimentés - Bas prix - Disponibilité </p>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-3">
                                            <div className="d-flex rounded p-3 text-start">
                                                <div className='advantage-services-icon '>
                                                    <i className="fa fa-smile-o  text-white" aria-hidden="true" ></i>
                                                </div>
                                                <div className="ms-3">
                                                    <h2 className="text-white mb-0" data-toggle="counter-up">+ 250 </h2>
                                                    <p className="text-white mb-0">Clients </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-3">
                                            <div className="d-flex rounded p-3 text-start">
                                                <div className='advantage-services-icon blue'>
                                                    <i className="fa fa-tasks  text-white" aria-hidden="true"></i>
                                                </div>
                                                <div className="ms-3">
                                                    <h2 className="text-white mb-0" data-toggle="counter-up">+ 150   </h2>
                                                    <p className="text-white mb-0">Projets réalisés</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-3">
                                            <div className="d-flex rounded p-3 text-start">
                                                <div className='advantage-services-icon purple'>
                                                    <i className="fa fa-calendar-o  text-white" aria-hidden="true"></i>
                                                </div>
                                                <div className="ms-3">
                                                    <h2 className="text-white mb-0" data-toggle="counter-up">+ 05 </h2>
                                                    <p className="text-white mb-0">Années d'expérience</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-3">
                                            <div className="d-flex rounded p-3 text-start">
                                                <div className='advantage-services-icon orange'>
                                                    <i className="fa fa-percent  text-white" aria-hidden="true"></i>
                                                </div>
                                                <div className="ms-3">
                                                    <h2 className="text-white mb-0" data-toggle="counter-up"> 99%</h2>
                                                    <p className="text-white mb-0">Taux de réussite</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h2 translate="no">#It's Possible</h2>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <Skill />
            </div>
        </section>
    )
}

export default SolutionDetail