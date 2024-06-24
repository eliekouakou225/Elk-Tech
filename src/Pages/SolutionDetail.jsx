import React from 'react'
import Skill from '../Components/Skill/Skill'

import ServiceImg from '../Assets/img/image-of-our-team.webp'
const SolutionDetail = () => {
    return (
        <section className='solutionsdetails'>
            <div className='container container-title'>
                <h2>L'infographie </h2>
                <p>Phrase d'accroche sur l'infographie</p>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <img src={ServiceImg} alt="service " className='Service__img' />
                    </div>
                    <div className="col-12 col-md-8">
                        <h4>Description inforgraphie</h4>
                        <p>Description ipsum dolor sit amet consectetur adipisicing elit. Quia dignissimos rem ipsam necessitatibus quisquam omnis? Ipsa reprehenderit perferendis, dicta in laboriosam ducimus. Quae, repudiandae incidunt ex facilis maiores quis voluptatibus!</p>
                        <h4>Faites la différence grace à nous</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magni in voluptas minima incidunt illum eum cumque soluta recusandae animi corrupti quidem, quis adipisci est, a architecto totam hic nostrum?</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark details pt-3 mt-5">
                <div className="container pt-3 pb-3">
                    <h1 className="text-white mb-4">Meilleur qualité-prix du marché</h1>
                    <div className="row g-5">
                        <div className="col-12 col-md-6">
                            <p className='text-white'><i class="fa fa-check-circle-o" aria-hidden="true"></i> Expérimentés</p>
                            <p className='text-white'><i class="fa fa-check-circle-o" aria-hidden="true"></i> Professionnels</p>
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