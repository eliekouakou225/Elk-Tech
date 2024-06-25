import React from 'react'
import { useParams } from 'react-router-dom';
import Skill from '../Components/Skill/Skill'

// import ServiceImg from '../Assets/img/image-of-our-team.webp'

import { solutions } from '../Assets/Data/dataSolutions';
import { convertTitleToUrl } from '../Components/Utils/utils'
import Error404 from './Error404'
import { Accordion } from "react-bootstrap";

// import TrainingImg from "../Assets/img/image-of-our-team.webp"
// import TrainingImgCertified from "../Assets/img/trainings-image.webp"


function SolutionDetail() {
    // const { id } = useParams(); 
    const { title } = useParams();
    // const training = trainings.find(t => t.id === parseInt(id) );
    const solution = solutions.find((solution) => convertTitleToUrl(solution.title) === title);

    if (!solution) {
        return <Error404 />;
    }
    return (
        <section className='solutionsdetails'>
            <div className='container container-title'>
                <h2>{solution.title} </h2>
                <p>Phrase d'accroche sur l'infographie</p>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <img src={solution.image_solution } alt="service " className='Service__img' />
                    </div>
                    <div className="col-12 col-md-8">
                        <h4>Description {solution.title}</h4>
                        <p>{solution.long_description}</p>
                        <h4>Faites la différence grace à nous</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magni in voluptas minima incidunt illum eum cumque soluta recusandae animi corrupti quidem, quis adipisci est, a architecto totam hic nostrum?</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h4>Quelque </h4>
                        <Accordion> 
                            {solution.skill_list.map(skill => (
                                <Accordion.Item eventKey={skill.skill_list_id}>
                                    <Accordion.Header className='accordion--header'>{skill.skill_list_title}</Accordion.Header>
                                    <Accordion.Body>
                                    {skill.skill_list_description}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion> 
                    </div>
                    <div className="col-12 col-md-6">
                        <h4>DIte nous de quoi avez vous besoin</h4>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark details pt-3 mt-5">
                <div className="container pt-3 pb-3">
                    <h1 className="text-white mb-4">Meilleur rapport qualité-prix du marché</h1>
                    <div className="row g-5">
                        <div className="col-12 col-md-6">
                            <p className='text-white'><i className="fa fa-check-circle-o" aria-hidden="true"></i> Expérimentés</p>
                            <p classNameName='text-white'><i className="fa fa-check-circle-o" aria-hidden="true"></i> Professionnels</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className='text-white'> <i class="fa fa-check-circle-o" aria-hidden="true"></i> Bas prix</p>
                            <p className='text-white'> <i class="fa fa-check-circle-o" aria-hidden="true"></i> Conseils client</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="d-flex rounded p-3">
                                <i className="fa fa-users fa-3x text-white"></i>
                                <div className="ms-3">
                                    <h2 className="text-white mb-0" data-toggle="counter-up">+ 250 </h2>
                                    <p className="text-white mb-0">Clients </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="d-flex rounded p-3">
                                <i className="fa fa-users fa-3x text-white"></i>
                                <div className="ms-3">
                                    <h2 className="text-white mb-0" data-toggle="counter-up">+ 150   </h2>
                                    <p className="text-white mb-0">Projets réalisés</p>
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
                                    <h2 className="text-white mb-0" data-toggle="counter-up">9h-12h ou 13h-15h <span className='text-danger'>*</span></h2>
                                    <p className="text-white mb-0">Heure de Formation</p>
                                </div>
                            </div>
                        </div>
                        <p className='text-white'><span className='text-danger'>*</span> En fonction de la disponibilité des étudiants et des formateurs</p>
                        <p className='text-white'><span className='text-danger'>NB : </span> Les jours de formation varient aussi en fonction de la disponibilité des étudiants et des formateurs.</p>
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