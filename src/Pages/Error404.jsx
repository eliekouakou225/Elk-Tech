import React from 'react'
import { Link } from 'react-router-dom';

import * as LottiePlayer from "@lottiefiles/lottie-player";

const Error404 = () => {
  return (
    <section className='error404'>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6 error404__Detais">
                    <h1 data-cursor-exclusion style={{backgroundColor: '#fff'}}>Quelque chose c'est mal passé !!!</h1> 
                    <h2>Ou voulez vous allez ?</h2>
                    <nav className='error404__link'>
                    <ul >
                            <Link to={"/"} data-cursor-size="80px"> 
                                <li>Acceuil</li>
                            </Link>
                            <Link to={"/solutions"}> 
                                <li>Solutions</li>
                            </Link>
                            <Link to={"/formations"}> 
                                <li>Formation</li>
                            </Link>
                            <Link to={"/boutique"} > 
                                <li>Boutique</li>
                            </Link>
                            <Link to={"/devis"}> 
                                <li>Devis</li>
                            </Link>
                            <Link to={"/contact"}> 
                                <li>Contact</li>
                            </Link>

                    </ul>
                    </nav>
                </div>
                <div className="col-12 col-lg-6">
               
                </div>
            </div>
        </div>

        <div>
            <div>
       <div data-cursor-magnetic>
        <h1>Magnetic Cursor</h1>
      </div>
            </div>
            <div>
            <div data-cursor-stick="#stick-title">
        <h1 id="stick-title" style={{textAlign: 'center'}}>Sticky Cursor</h1>
      </div>
            </div>
            <div>
            <div data-cursor-color="#61dbfb">
        <h1 id="stick-title">Colorized Cursor</h1>
      </div>
            </div>
            <div data-cursor-size="80px">
        <h1 id="stick-title">Sized Cursor</h1>
      </div>
      <div data-cursor-background-image="https://reactjs.org/logo-og.png" data-cursor-size="200px">
        <h1 id="stick-title">React.js</h1>
      </div>
      <div data-cursor-exclusion style={{backgroundColor: '#fff'}}>
        <h1 id="stick-title">React.js</h1>
      </div>
      <div data-cursor-text="React" data-cursor-size="100px">
        <h1 id="stick-title">React.js</h1>
      </div>

        </div>

    </section>
  )
}

export default Error404