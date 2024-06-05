import React from 'react'
// import IdeaIcon from './../../Assets/Animation/idea.json'
// import ShopCardCarroussel from '../Card/ShopCardCarroussel'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
// import Lottie from 'react-lottie';




const Idea = () => {
  return (
    <section className='m-5'>
    <div class="container section-title" data-aos="fade-up">
    <h2>Une idee, une question ?</h2>
    <p>Contactez-nous ! Nous serons enchantés de vous écouter.</p>
    </div>
    {/* <ShopCardCarroussel/>  */}
    <div className="container mt-5 idea">
    <div className="row">
    <div className="col-12 col-lg-6">
    <Player
    autoplay
    loop
    src="https://lottie.host/4a81874e-9e68-435e-bb1b-414fd65b1a65/UBIuQc7Bz6.json"
    style={{ height: '300px', width: '500px'}}
    className='lottie-Player'
    >
    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>
    </div>
    <div className="col-12 col-lg-6 d-flex flex-column">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio laborum possimus ipsam quae? Veritatis dolores, quo, vitae totam libero assumenda similique voluptates odio temporibus nesciunt minima recusandae reiciendis, repudiandae quisquam.</p>
    <div className='d-flex justify-content-center '>
     
    <div class="btn__main--container">
    <div class="btn__main--orange-hover-blue">
    <button class="btn"><span></span><p data-start="good luck!" data-text="Maintenant" data-title="Commencer"></p></button>
    </div>
    </div>
    <div class="btn__main--blue-hover-orange">
    <button class="btn"><span></span><p data-start="good luck!" data-text="Maintenant" data-title="Commencer"></p></button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Idea