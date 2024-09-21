import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 footer__contact">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <Link to={'/devis'} className='btn-estimate-footer' data-cursor-size="20px">Demander <br /> un devis <i className="fa fa-arrow-right" aria-hidden="true"></i> </Link>
                                    </div>
                                    <div className="col-8">
                                        <Link to={'/contact'} className='btn-contact' data-cursor-size="20px">
                                            <h2>Contacter-nous
                                            </h2>
                                            <span><i className="fa fa-arrow-circle-right" aria-hidden="true"></i></span>
                                        </Link>


                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <!-- Footer Start --> */}
                        <div className="container-fluid bg-dark text-white-70 footer pt-5">
                            <div className="container py-5">
                                <div className="row g-5">
                                    <div className="col-12  col-lg-3">
                                        <a href="index.html" className="d-inline-block mb-3">
                                            <h1 className="text-white" translate="no">IT'S<span className="text-primary"><br /></span>POSSIBLE <span>®</span></h1>
                                        </a>
                                        <p className="mb-0 text-white">Nous transformons vos rêves en réalité.</p>
                                    </div>
                                    <div className="col-6 col-lg-2 text-white">
                                        <h5 className="text-white mb-4">Notre Adresse</h5>
                                        <p><i className="fa fa-map-marker" aria-hidden="true"></i> Abidjan Yopougon PMI, CI</p>
                                        <p><i className="fa fa-phone" aria-hidden="true"></i> +225 07 88 89 89 98</p>
                                        <p><i className="fa fa-envelope" aria-hidden="true"></i> contact@elktech-ci.com</p>
                                        <div className="d-flex pt-2">
                                            <Link className="btn btn-outline-light btn-social" to={'/'}><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                            <Link className="btn btn-outline-light btn-social" to={'/'}><i className="fa fa-facebook" aria-hidden="true"></i> </Link>
                                            <Link className="btn btn-outline-light btn-social" to={'/'}><i className="fa fa-instagram" aria-hidden="true"></i> </Link>
                                            <Link className="btn btn-outline-light btn-social" to={'/'}><i className="fa fa-linkedin" aria-hidden="true"></i> </Link>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-2">
                                        <h5 className="text-white mb-4">Formations</h5>
                                        <Link className="btn btn-link" to={'/formations/infographie'}>Infographie</Link>
                                        <Link className="btn btn-link" to={'/formations/montage-video'}>Montage Vidéo</Link>
                                        <Link className="btn btn-link" to={'/formations/bureautique'}>Beautique</Link>
                                        <Link className="btn btn-link" to={'/formations/programmation'}>Programmation</Link>
                                        <Link className="btn btn-link" to={'/formations/reseaux'}>Réseau</Link>
                                    </div>
                                    <div className="col-6 col-lg-2" >
                                        <h5 className="text-white mb-4">Solutions</h5>
                                        <Link className="btn btn-link" to={'/solutions/infographie'}>Infographie</Link>
                                        <Link className="btn btn-link" to={'/solutions/reseaux---controle-dacces'}>Réseau</Link>
                                        <Link className="btn btn-link" to={'/solutions/creation-dapplications-web-mobile-et-de-bureau'}>Programmation</Link>
                                        <Link className="btn btn-link" to={'/securite-informatique'}>Sécurité Informatique</Link>
                                        <Link className="btn btn-link" to={'/solutions'}>Voir plus</Link>
                                    </div>
                                    <div className="col-6 col-lg-2" >
                                        <h5 className="text-white mb-4">Boutique</h5>
                                        <Link className="btn btn-link" to={'/boutique/categorie/mikrotik'}>Mikrotik</Link>
                                        <Link className="btn btn-link" to={'/boutique/categorie/reseau'}>Réseau</Link>
                                        <Link className="btn btn-link" to={'/boutique/categorie/accessoires'}>Accessoire informatique</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="copyright">
                                    <div className="row">
                                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                            <p>Make with <span className='rotating-element'>❤️</span> by Elk-Tech Groupe</p>
                                        </div>
                                        <div className="col-md-6 text-center text-md-end">
                                            <div className="footer-menu">
                                                <Link href="">Cookies</Link>
                                                <Link href="">Help</Link>
                                                <Link href="">FAQs</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Footer