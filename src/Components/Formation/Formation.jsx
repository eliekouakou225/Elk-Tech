import React from 'react'
import logo1 from '../../Assets/logos/3m.svg'
import logo2 from '../../Assets/logos/barstool-store.svg'
import logo3 from '../../Assets/logos/budweiser.svg'
import logo4 from '../../Assets/logos/buzzfeed.svg'
import logo5 from '../../Assets/logos/forbes.svg'
import logo6 from '../../Assets/logos/menshealth.svg'
import logo7 from '../../Assets/logos/mrbeast.svg'

import * as LottiePlayer from "@lottiefiles/lottie-player";
//import { Circle } from "react-awesome-shapes";

const Formation = () => {
  return (

    <div className='formation mt-5'>

      <div className="container">
        <div className="row">
        <div className='Section__title m-5'>
 
            <h3> Formation</h3>
        </div>
          <div className="col col-md-6">
              <lottie-player
                    autoplay
                    loop
                    mode="normal"
                    // src="https://lottie.host/7d5c2098-6709-42c7-9442-c942dd89434c/w7raLHpjvb.json"
                    src="https://lottie.host/50df6a9c-5ae8-458a-96ad-5f127ca2dad5/kWiMyot0u6.json"
                    style={{ width: '50'}}
                ></lottie-player>
          </div>
          <div className="col col-md-6">
                <ul>
                    <li>Apprennez simplement chez nous ou dans nos locaux</li>
                    <li>Des formations qui s'adapte à votre besoin</li>
                    <li>Des formations qui s'adapte à votre besoin</li>
                    <li>Des formations qui s'adapte à votre besoin</li>
                    <li>Des formations qui s'adapte à votre besoin</li>
                    <li>Des formations qui s'adapte à votre besoin</li>
                </ul>
                <div>
       <div className="logos">
      <div className="logos-slide">
        <img src={logo1} alt='logo'/>
        <img src={logo2} alt='logo' />
        <img src={logo3} alt='logo' />
        <img src={logo4} alt='logo'/>
        <img src={logo5} alt='logo' />
        <img src={logo6} alt='logo'/>
        <img src={logo7} alt='logo' />
        <img src={logo1} alt='logo'/>
      </div>

      <div className="logos-slide">
            <img src={logo1} alt='logo'/>
            <img src={logo2} alt='logo' />
            <img src={logo3} alt='logo'/>
            <img src={logo4} alt='logo' />
            <img src={logo5} alt='logo'/>
            <img src={logo6} alt='logo' />
            <img src={logo7} alt='logo' />
            <img src={logo1} alt='logo'/>
      </div>
        </div>
       </div>
       <div className='m-3'>
                    <a className="btn__main" href="{#}">
                        <span className="top-key"></span>
                        <span className="text">EN SAVOIR PLUS</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </a>
                    </div> 
          </div>
        </div>
    </div>
    <div className="container">
      <div className="col-6"> <p>Il n'est jamais trop trad pour commancé a apprendre.</p> </div>
    </div>
    </div>
  )
}

export default Formation