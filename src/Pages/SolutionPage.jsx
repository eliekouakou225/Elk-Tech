import React from 'react'
import { useEffect } from "react";
import SolutionPageList from '../Components/Solution/SolutionList/SolutionPageList';
import { solutions } from '../Assets/Data/dataSolutions';
import SolutionTestimonials from '../Components/Solution/SolutionTestimonials';
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
import imgHeader from '../Assets/img/illustration-solution.webp'
const SolutionPage = () => {
    useEffect(() => {
        document.title = "Solutions | Elk-Tech";
    }, []);
    return (

        <>
            <div className="overflow-x-hidden bg-gray-50 header-solution-page">
                <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
                    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="inline-flex px-4 py-2 text-base text-gray-900 border border-gray-200 rounded-full font-pj">Entreprise et particulier</p>
                            <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Rêves à Réalité <br /> <span translate="no">It's possible</span> </h1>
                            <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 font-inter">Parce que chaque entreprise et chaque projet sont uniques, nous vous offrons des solutions sur mesure.</p>

                            <div className="relative inline-flex mt-10 group">
                                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#0092ff] to-[#F8B234] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                                <Link to={"/solutions#our-services"} title="" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                                    Voir Nos Services
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 md:mt-20">
                        <img loading="lazy" className="object-cover object-top w-full h-auto mx-auto scale-150 2xl:max-w-screen-2xl xl:scale-100" src={imgHeader} alt="" />
                    </div>
                </section>
            </div>
            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Pourquoi Elk-Tech Groupe ?</h2>
                        <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Votre partenaire technologique de confiance pour des solutions sur mesure et innovantes.</p>
                    </div>

                    <div className="relative mt-12 lg:mt-20">
                        <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                            <img loading="lazy" className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                        </div>

                        <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                    <span className="text-xl font-semibold text-gray-700"> 1 </span>
                                </div>
                                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Qualité inégalée</h3>
                                <p className="mt-4 text-base text-gray-600">Nous mettons un point d'honneur à offrir des solutions de haute qualité, en utilisant des technologies éprouvées et des méthodologies de pointe, pour garantir la performance et la durabilité de vos systèmes.</p>
                            </div>

                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                    <span className="text-xl font-semibold text-gray-700"> 2 </span>
                                </div>
                                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Prix compétitifs</h3>
                                <p className="mt-4 text-base text-gray-600">Chez Elk-Tech Groupe, nous allions excellence et accessibilité. Nos solutions sur mesure sont proposées à des tarifs compétitifs, vous permettant d'optimiser vos investissements technologiques sans compromis sur la qualité.</p>
                            </div>

                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                    <span className="text-xl font-semibold text-gray-700"> 3 </span>
                                </div>
                                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Disponibilité 24/7</h3>
                                <p className="mt-4 text-base text-gray-600">Notre équipe est disponible à tout moment pour répondre à vos besoins, que ce soit pour du support technique, des conseils ou des interventions d’urgence, assurant ainsi une continuité de service optimale.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="solutionsPage m-5" id='our-services' >
                <div className='container container-title'>
                    <h2>Nos Solutions</h2>
                    <p>Découvrez nos solutions innovantes qui transforment vos défis en opportunités, en vous offrant efficacité, simplicité et résultats durables.</p>
                </div>
                <div className="container">
                    <div className="row g-4">
                        <SolutionPageList solutions={solutions} />
                    </div>
                </div>
            </section>
            <section className="faqs">
                <div className="container container-title container-title-right">
                    <h2>Questions fréquemment posées</h2>
                    <p>Tout ce que vous devez savoir sur nos services et solutions</p>
                    <Accordion>
                        <div className="row">
                            <div className="col-12 col-lg-6 mt-3">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Quelle est la disponibilité de votre équipe en cas de problème technique ?</Accordion.Header>
                                    <Accordion.Body>
                                        Notre équipe est disponible 24/7 pour toute assistance technique, que ce soit pour des interventions urgentes ou des questions de maintenance.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                            <div className="col-12 col-lg-6 mt-3">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Pouvez-vous adapter vos solutions aux besoins spécifiques de mon entreprise ?</Accordion.Header>
                                    <Accordion.Body>
                                        Oui, toutes nos solutions sont personnalisables pour répondre précisément aux besoins de votre entreprise. Après une évaluation initiale, nous vous fournirons une proposition sur mesure dans un délai de 3 à 5 jours.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                            <div className="col-12 col-lg-6 mt-3">
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Quels sont les délais d'installation pour une nouvelle infrastructure informatique ?</Accordion.Header>
                                    <Accordion.Body>
                                        Les délais d'installation varient selon la complexité du projet, mais généralement, une petite à moyenne infrastructure est déployée en 2 à 4 semaines. Nous vous donnerons un calendrier précis après l'analyse de vos besoins.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                            <div className="col-12 col-lg-6 mt-3">
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Offrez-vous des services de maintenance après l’installation ?</Accordion.Header>
                                    <Accordion.Body>
                                        Oui, nous proposons des contrats de maintenance sur mesure, disponibles 24/7 pour assurer la continuité et la sécurité de votre infrastructure. Les tarifs de maintenance varient en fonction du niveau de service requis.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                            <div className="col-12 col-lg-6 mt-3">
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Proposez-vous des solutions de cybersécurité ?</Accordion.Header>
                                    <Accordion.Body>
                                        Absolument, nous offrons des solutions complètes de cybersécurité, y compris pare-feu, systèmes de détection d'intrusion et surveillance 24/7, disponibles à des tarifs compétitifs. Le coût dépendra de la taille et de la complexité de votre infrastructure.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                            <div className="col-12 col-lg-6 mt-3">
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Pouvez-vous intégrer des solutions cloud à notre infrastructure existante ?</Accordion.Header>
                                    <Accordion.Body>
                                        Oui, nous intégrons des solutions cloud de manière transparente avec votre infrastructure actuelle. L'intégration prend généralement entre 1 et 3 semaines, selon l'ampleur du projet, et nous offrons des tarifs compétitifs.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                            <div className="col-12 col-lg-6 mt-3">
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>Est-il possible de gérer à distance les solutions que vous intégrez ?</Accordion.Header>
                                    <Accordion.Body>
                                        Oui, toutes nos solutions incluent des options de gestion à distance, disponibles immédiatement après l'installation. Cela permet une surveillance continue et une intervention rapide en cas de besoin, pour un coût abordable.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                            <div className="col-12 col-lg-6 mt-3">
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>Quels types d'entreprises bénéficient de vos services ?</Accordion.Header>
                                    <Accordion.Body>
                                        Nous servons des entreprises de toutes tailles, des PME aux grandes entreprises. Nos solutions sont disponibles dans des délais flexibles et à des prix adaptés à chaque budget.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                            <div className="col-12 col-lg-6 mt-3">
                                <Accordion.Item eventKey="8">
                                    <Accordion.Header>Offrez-vous des formations pour l’utilisation des nouvelles solutions ?</Accordion.Header>
                                    <Accordion.Body>
                                        Oui, nous fournissons des formations complètes en ligne ou sur site. La formation est disponible immédiatement après l'installation et son coût est inclus dans la majorité de nos projets.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                            <div className="col-12 col-lg-6 mt-3">
                                <Accordion.Item eventKey="9">
                                    <Accordion.Header>Quels sont les coûts associés à vos services d’intégration ?</Accordion.Header>
                                    <Accordion.Body>
                                        Les coûts varient selon la taille et la complexité du projet. Nous proposons des devis gratuits dans un délai de 48 heures après l'analyse de vos besoins, et nos tarifs sont transparents et compétitifs.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                        </div>
                    </Accordion>
                </div>
            </section >
            <div className='container container-title container-title-right'>
                <h2>...Et maintenant Ils en témoignent.</h2>
                <p>Nous serions très honorés d'afficher vos impressions sur nos plateformes.</p>
            </div>

            <SolutionTestimonials />
        </>
    )
}

export default SolutionPage

