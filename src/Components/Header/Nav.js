import React from 'react';
import logo from '../../Assets/img/mainlogo.png'
import '../../styles/components/_navbar.scss';
import {useState} from "react";
import un from '../../Assets/img/1.jpg'
import deux from '../../Assets/img/2.jpg'
import trois from '../../Assets/img/3.jpg'
import quartre from '../../Assets/img/4.jpg'
import cinq from '../../Assets/img/5.jpg'

const Nav = () => {

  const [navOpen, setNavOpen] = useState(false);


  return (
    <div className="container">
   <div className="nav">
        <div className="nav-container">
            <div className="navbar">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
                <div> 
                  <button class="btn__nav"> Demander un devis</button>
                </div>
                <div className="menu-toggle" onClick={() => setNavOpen(!navOpen) }>
                    <div className={navOpen ? "hamBox hamboxOpen" : "hamBox"}>
                        <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                        <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
                    </div>
                </div>
            </div>
            <div className="nav-overlay" style={{
              top: navOpen ? "0" : "-100%",
              transitionDelay: navOpen ? "0s" : "0s",
            }}>
<div className="content-menu">
<div className="lines">
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
  </div>
<div className="menu">
    <div className="menu__item">
        <a href='{} ' className="menu__item-link">Acceuil</a>
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
        <a  className="menu__item-link">Solution</a>
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
        <a  className="menu__item-link">Boutique</a>
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
        <a  className="menu__item-link">A propos</a>
        <img src={quartre} alt="some img" className="menu__item-img"/>
        <div className="marquee">
            <div className="marquee__inner">
                <span>A propos</span>
                <span>A propos</span>
                <span>A propos</span>
                <span>A propos</span>
                <span>A propos</span>
            </div>
        </div>
    </div>
    <div className="menu__item">
        <a  className="menu__item-link">Contact</a>
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
   </div>
   </div>
  )
}

export default Nav