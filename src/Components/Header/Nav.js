import React from 'react';
import logo from '../../Assets/img/mainlogo.png'
import { Link } from 'react-router-dom';
import {useState} from "react";

//import image Assest
import un from '../../Assets/img/1.jpg'
import deux from '../../Assets/img/2.jpg'
import trois from '../../Assets/img/3.jpg'
import quartre from '../../Assets/img/4.jpg'
import cinq from '../../Assets/img/5.jpg'

const Nav = () => {

  const [navOpen, setNavOpen] = useState(false);

  return ( 

    <nav className="nav-main">
            <div className="nav-container">
                <div className="navbar">
                    <div className="container">               
                        <div className="logo"  >
                            <Link to={'/'} >
                            
                            <img src={logo} alt="" /> 
                            </Link>
                        </div>
                        <div> 
                        <Link to="/devis">
                            <button class="btn__nav"  > Demander un devis </button>
                        </Link>
                        </div>
                        
                        <div className="menu-toggle" onClick={() => setNavOpen(!navOpen) }>
                            <div className={navOpen ? "hamBox hamboxOpen" : "hamBox"} >
                                <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                                <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
                            </div>
                        </div>
                    </div>
                    <div className="nav-overlay" style={{ top: navOpen ? "0" : "-100%", transitionDelay: navOpen ? "0s" : "0s", }}>

                        <div className="lines">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div> 

                        <div className="menu">
                            <div className="menu__item">
                                <Link to="/" className="menu__item-link" onClick={() => setNavOpen(!navOpen) }>Acceuil</Link>
                                <img src={trois} alt="some img" className="menu__item-img"/>
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
                                <Link to="/solutions"  className="menu__item-link" onClick={() => setNavOpen(!navOpen) }>Solution</Link>
                                <img src={deux} alt="some img" className="menu__item-img"/>
                                <div className="marquee">
                                    <div className="marquee__inner">
                                        <span>Solution</span>
                                        <span>Solution</span>
                                        <span>Solution</span>
                                        <span>Solution</span>
                                        <span>Solution</span>
                                    </div>
                                </div>
                            </div>
                            <div className="menu__item">
                            <Link to="/formations"  className="menu__item-link" onClick={() => setNavOpen(!navOpen) }>Formations</Link>
                                <img src={quartre} alt="some img" className="menu__item-img"/>
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
                                <img src={un} alt="some img" className="menu__item-img"/>
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
                                <img src={cinq} alt="some img" className="menu__item-img"/>
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