import React from 'react'


const About = () => {
  return (
      <div className="container-fluid mt-5 mb-5">
            <div className='about   '>
            <div className='Section__title m-5'>
                  <h3> A propos</h3> 
            </div>
              <div className="row">
                <div className="col-2"> 
                </div>
                <div className="col-10 text p-3">
                    <div className="row">
                        <div className="col-6 about__img">
                        <div className="box"></div>
                    </div>
                  <div className="col-6 about__text">
                        <h2>Partager notre expertise au service de votre réussite, voilà le socle de notre philosophie</h2>
                        <div className='about__horizontal-line'></div>
                        <p>Notre raisonnement stratégique et commercial est structuré et transparent : nous apportons à l’ensemble de nos partenaires tout notre savoir-faire en déployant nos solutions avec une approche stratégique.</p>
                        <div>

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
              </div>
                

            </div>
            <div>
            </div>

        </div>
  )
}

export default About