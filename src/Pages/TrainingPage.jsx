import React from 'react'
import { useEffect } from "react";
import TrainingPageList from '../Components/Training/TrainingList/TrainingPageList';
import { trainings } from '../Assets/Data/dataTrainings';
import TrainingTestimonials from '../Components/Training/TrainingTestimonials';
import headerTrainingImg from '../Assets/img/header-training-img.webp'
import { Link } from 'react-router-dom'
import Lottie from "lottie-react";
import animationTraining from '../Assets/Animation/Animation-learning.json';

const TrainingPage = () => {
    useEffect(() => {
        document.title = "Formations | Elk-Tech";
    }, []);
    return (
        <>
            <section className="header-training  mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5">
                            <div className="text-container">
                                <h1 className="h1-large">Rejoignez-nous et maîtrisez votre futur !</h1>
                                <p className="p-large">Découvrez les métiers d'aujourd'hui et ceux de demain grâce à notre programme de formation en constante évolution.</p>
                                <div className="btn__main--orange-hover-blue">
                                    <Link to={"/formations#our-training-courses"}>
                                        <button className="btn"><span></span><p data-start="good luck!" data-text="Modules" data-title="Explorer"></p></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7">
                            <div className="image-container">
                                <img className="img-fluid" loading="lazy" src={headerTrainingImg} alt="alternative" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mt-5">
                <div className="row">
                    <div className="advantage-services">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-container">
                                        <h2>Aucune raison valable de ne pas vous faire former. </h2>
                                        <p className="p-large">Inscrivez-vous dès aujourd'hui et rejoignez notre réseau de professionnels pour rester à la pointe de l'actualité et partager vos expériences !</p>
                                        <h2 translate="no">#It's Possible</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-4">
                        <div className="card-infos-trainings d-flex align-items-start">
                            <div className='card-infos-trainings_number'>1</div>
                            <div>
                                <div className="card-infos-trainings__head d-flex align-items-center  ">
                                    <h5>Accessibilité</h5>
                                </div>
                                <div className="card-infos-trainings__body">
                                    <p>Connectez-vous ou venez en personne, nos formations dynamiques, conçues pour vous propulser vers l'excellence sont partout.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card-infos-trainings d-flex align-items-start">
                            <div className='card-infos-trainings_number'>2</div>
                            <div>
                                <div className="card-infos-trainings__head d-flex align-items-center  ">
                                    <h5>Qualité</h5>
                                </div>
                                <div className="card-infos-trainings__body">
                                    <p>Saisissez cette opportunité unique d'investir dans votre avenir, avec des experts chevronnés pour vous guider à chaque étape.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card-infos-trainings d-flex align-items-start">
                            <div className='card-infos-trainings_number'>3</div>
                            <div>
                                <div className="card-infos-trainings__head d-flex align-items-center  ">
                                    <h5>Prix</h5>
                                </div>
                                <div className="card-infos-trainings__body">
                                    <p>Développez vos compétences sans vous ruiner grâce à nos formations à prix réduits. Nos formateurs expérimentés sont là pour vous guider à chaque étape. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="trainings m-5">
                <div className='container container-title container-title-right' id="our-training-courses">
                    <h2 >Nos Formations </h2>
                    <p>Formation pratique, résultats garantis !</p>
                </div>
                <div className="container">
                    <div className="row g-4">
                        <TrainingPageList trainings={trainings} />
                    </div>
                </div>
            </section>
            <div className="section training-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wrapper">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="counter">
                                            <h2 className="timer count-title count-number" >+ 300</h2>
                                            <p className="count-text ">Etudiants satisfaits</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="counter">
                                            <h2 className="timer count-title count-number">+ 10</h2>
                                            <p className="count-text ">Formations</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="counter">
                                            <h2 className="timer count-title count-number" data-to="50" data-speed="1000">+10</h2>
                                            <p className="count-text ">Formateurs chevronnés </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="counter end">
                                            <h2 className="timer count-title count-number">+ 05</h2>
                                            <p className="count-text ">Années d'expérience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section"> 
                <div className="container our-trainers">
                    <Lottie animationData={animationTraining} loop={true} className='our-trainers-animation' />
                    <h5>En ligne comme en présentiel, nos formateurs experts sont près de vous et prêts pour vous.</h5>
                    <p>Que ce soit en ligne ou en présentiel, nos formateurs sont des experts engagés à vous accompagner à chaque étape de votre apprentissage. Ils sont disponibles pour répondre à vos questions, vous guider dans la compréhension des concepts et s'assurer que vous atteignez vos objectifs. Toujours à l'écoute, ils adaptent leur pédagogie pour que vous profitiez au maximum de chaque session, quel que soit le mode de formation que vous choisissez.</p>
                    <h5>It's Possible</h5>
                </div>
            </div>
            <div className="conatiner-fluid bg-gray">
                <div className='container container-title pt-5 '>
                    <h2>...Et maintenant Ils en témoignent.</h2>
                    <p>Nous serions très honorés d'afficher vos impressions sur nos plateformes.</p>
                    <TrainingTestimonials />
                </div>
            </div>
        </>
    )
}

export default TrainingPage