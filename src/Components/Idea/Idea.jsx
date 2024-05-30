import React from 'react'
import IdeaImg from './../../Assets/img/idea-img.png'
// import ShopCardCarroussel from '../Card/ShopCardCarroussel'


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
                    <img src={IdeaImg} alt="" />
                </div>
                <div className="col-12 col-lg-6 d-flex flex-column">
                
                    
                   
                           <div className='d-flex '>

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