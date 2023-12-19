import React from 'react'
import IdeaImg from './../../Assets/img/idea-img.png'

const Idea = () => {
  return (
    <section>
        
        <div className="container mt-5 idea">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <img src={IdeaImg} alt="" />
                </div>
                <div className="col-12 col-lg-6 d-flex flex-column">
                    <div className="section-header">
                        <span>// Une idee, une question ?</span>
                        <h2>// Une idee, une question ?</h2>
                    </div>
                    <p>Loreelie kouakou o nihil dolorum minus? Culpa pariatur, odit nostrum quisquam adipisci asperiores molestias quo at cupiditate tempora!</p>
                           <div className='d-flex '>

                           <div class="btn__main--container">
    <div class="main-btn--orange">
          <span>Discuter avec un expert </span>
          <svg>
            <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
            <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
          </svg>
    </div>
  </div>
  <div class="btn__main--container">
    <div class="main-btn--blue">
          <span>Contact </span>
          <svg>
            <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
            <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
          </svg>
    </div>
  </div>
                           </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Idea