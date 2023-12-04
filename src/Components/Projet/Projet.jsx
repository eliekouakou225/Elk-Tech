import React from 'react'
// import ReactGlobe from 'react-globe';
// import initGlobe from '../Gbobe/globe';
// import './style.css';



const Projet = () => {
  // initGlobe(document.getElementById('globe-app'));
  return (
    <div className='Projet p-4'>
    <div className='container__fluid'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
            <h2>Recents projets</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint impedit quibusdam eligendi. Sit laborum suscipit recusandae, id placeat similique, iste pariatur voluptate et sequi ullam ut adipisci vel corrupti vitae.
              <div>
              <a className="btn__main" href="{#}">
                            <span className="top-key"></span>
                            <span className="text">EN SAVOIR PLUS</span>
                            <span className="bottom-key-1"></span>
                            <span className="bottom-key-2"></span>
                        </a>

              </div>
            </p>
            </div>
            <div className="col-12 col-md-6">
            
            {/* <div id="globe-app" className="globe-app">
              
            </div> */}
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Projet