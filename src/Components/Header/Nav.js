import React from 'react';
import logo from '../../Assets/img/mainlogo.png'
import { Link } from 'react-router-dom';
import {useState} from "react";

//import image Assest
import home from '../../Assets/img/home.webp'
import solutions from '../../Assets/img/solutions.webp'
import training from '../../Assets/img/training.webp'
import shop from '../../Assets/img/shop.webp'
import contact from '../../Assets/img/contact.webp'

const Nav = () => {

  const [navOpen, setNavOpen] = useState(false);

  return (  

    <nav className="nav-main"> 
            <div className="nav-container">
                <div className="navbar">
                    <div className="container">               
                        <div className="logo"  >
                            <Link to={'/'} data-cursor-size="20px">
                            
                            <img src={logo} alt="" /> 
                            </Link>
                        </div> 
                        <div> 
                        <Link to="/devis" data-cursor-size="20px">
                            <button className="btn__nav"  > Demander un devis </button>
                        </Link>
                        </div>
                        
                        <div className="menu-toggle" onClick={() => setNavOpen(!navOpen) } data-cursor-size="20px">
                            <div className={navOpen ? "hamBox hamboxOpen" : "hamBox"} >
                                <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                                <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
                            </div>
                        </div>
                    </div>
                    <div className="nav-overlay" style={{ top: navOpen ? "0" : "-100%", transitionDelay: navOpen ? "0s" : "0s",  }}>

                        <div className="lines">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div> 

                        <div className="menu">
                            <div className="menu__item">
                                <Link to="/" className="menu__item-link" onClick={() => setNavOpen(!navOpen) }>Acceuil</Link>
                                <img src={home} alt="some img" className="menu__item-img"/>
                                <div className="marquee"> 
                                    <div className="marquee__inner"> 
                                        <span>Acceuil</span>
                                        <span>Acceuil</span>
                                        <span>Acceuil</span>
                                        <span>Acceuil</span>
                                        <span>Acceuil</span>
                                    </div>
                                </div>
                            </div>
                            <div className="menu__item">
                                <Link to="/solutions"  className="menu__item-link" onClick={() => setNavOpen(!navOpen) }>Solutions</Link>
                                <img src={solutions} alt="some img" className="menu__item-img"/>
                                <div className="marquee">
                                    <div className="marquee__inner">
                                        <span>Solutions</span>
                                        <span>Solutions</span>
                                        <span>Solutions</span>
                                        <span>Solutions</span>
                                        <span>Solutions</span>
                                    </div>
                                </div>
                            </div>
                            <div className="menu__item">
                            <Link to="/formations"  className="menu__item-link" onClick={() => setNavOpen(!navOpen) }>Formations</Link>
                                <img src={training} alt="some img" className="menu__item-img"/>
                                <div className="marquee">
                                    <div className="marquee__inner">
                                        <span>Formations</span>
                                        <span>Formations</span>
                                        <span>Formations</span>
                                        <span>Formations</span>
                                        <span>Formations</span>
                                    </div>
                                </div>
                            </div>
                            <div className="menu__item">
                            <Link to="/boutique" className="menu__item-link" onClick={() => setNavOpen(!navOpen) }>Boutique</Link>
                                <img src={shop} alt="some img" className="menu__item-img"/>
                                <div className="marquee">
                                    <div className="marquee__inner">
                                        <span>Boutique</span>
                                        <span>Boutique</span>
                                        <span>Boutique</span>
                                        <span>Boutique</span>
                                        <span>Boutique</span>
                                    </div>
                                </div>
                            </div>
                            <div className="menu__item">
                            <Link to="/contact"  className="menu__item-link" onClick={() => setNavOpen(!navOpen) }>Contact</Link>
                                <img src={contact} alt="some img" className="menu__item-img"/>
                                <div className="marquee">
                                    <div className="marquee__inner">
                                        <span>Contact</span>
                                        <span>Contact</span>
                                        <span>Contact</span>
                                        <span>Contact</span>
                                        <span>Contact</span>
                                    </div>
                                </div>
                            </div> 
                        </div>
            
                    </div>
                </div>
            </div>
    </nav>

  )
}

export default Nav