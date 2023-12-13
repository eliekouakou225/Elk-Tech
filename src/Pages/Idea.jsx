import React from 'react'
import IdeaImg from './../Assets/img/idea-img.png'

const Idea = () => {
  return (
    <section>
        
        <div className="container mt-5 idea">
            <div className="row">
                <div className="col-6 col-md-6">
                    <img src={IdeaImg} alt="" />
                </div>
                <div className="col-6 col-md-6">
                    <div className="section-header">
                        <span>// Une idee, une question ?</span>
                        <h2>// Une idee, une question ?</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime omnis aliquam nesciunt voluptatibus fugit optio nihil dolorum minus? Culpa pariatur, odit nostrum quisquam adipisci asperiores molestias quo at cupiditate tempora!</p>
                                <a className="main-btn--white m-2" href="{#}">
                                  <span className="top-key"></span>
                                  <span className="text">discuter avec un expert</span>
                                  <span className="bottom-key-1"></span>
                                  <span className="bottom-key-2"></span>
                                </a>
                                <a className="main-btn--blue" href="{#}">
                                  <span className="top-key"></span>
                                  <span className="text">demander un devis</span>
                                  <span className="bottom-key-1"></span>
                                  <span className="bottom-key-2"></span>
                                </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Idea