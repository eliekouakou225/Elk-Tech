import React from 'react'
import { Outlet, NavLink, useLocation  } from 'react-router-dom';


const Solutions = () => {

  const location = useLocation();

  return (
    <section className='solutions'> 
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <nav className='articles__nav'>
              <ul>
                <li className='tile--services'>INFOGRAPHIE - MONTAGNE VIDEO</li>
                  <ul>
                    <NavLink to={'/solutions/infographie'} activeClassName="active" data-cursor-size="80px"
>
                      <li className='subtitle' >INFOGRAPHIE</li>
                    </NavLink>
                    <NavLink to={'/solutions/montagevideo'} activeClassName="active" data-cursor-size="80px">
                      <li className='subtitle'>MONTAGNE VIDEO</li>
                    </NavLink>

                  </ul>
                <li className='tile--services'>
                  CONCEPTION WEB
                  </li>
                  <ul>
                    <NavLink exact to="/solutions/conception-web" activeClassName="active" data-cursor-size="80px">
                        <li className='subtitle'>CONCEPTION WEB
                        </li>
                    </NavLink> 
                  </ul>
                <li className='tile--services'>CÂBLAGE RÉSEAU - TÉLÉCOMMUNICATION</li>
                  <ul>
                  <NavLink  to="/solutions/cablage-reseau" activeClassName="active" data-cursor-size="80px">
                        <li className='subtitle'>CÂBLAGE RÉSEAU
                        </li>
                    </NavLink> 
                  <NavLink  to="/solutions/telecommunication" activeClassName="active" data-cursor-size="80px">
                        <li className='subtitle'>TÉLÉCOMMUNICATION
                        </li>
                    </NavLink> 
                  </ul>
                <li className='tile--services'>VIDÉOSURVEILLANCE - CONTRÔLE D'ACCÈS</li>
                  <ul>
                  <NavLink  to="/solutions/video-surveillence" activeClassName="active" data-cursor-size="80px">
                        <li className='subtitle'>VIDÉOSURVEILLANCE
                        </li>
                    </NavLink> 
                  <NavLink  to="/solutions/controls-d-acces" activeClassName="active" data-cursor-size="80px">
                        <li className='subtitle'>CONTRÔLE D'ACCÈS
                        </li>
                    </NavLink> 

                  </ul>
                <li className='tile--services'>E-Marketing</li>
                  <ul>
                  <NavLink  to="/solutions/e-marketing" activeClassName="active" data-cursor-size="80px">
                        <li className='subtitle'>E-Marketing
                        </li>
                    </NavLink> 
                  </ul>
                <li className='tile--services'>Dépannage informatique</li>
                  <ul>
                  <NavLink  to="/solutions/maintenance" activeClassName="active" data-cursor-size="80px">
                        <li className='subtitle'>Dépannage informatique
                        </li>
                    </NavLink> 
                  </ul>

              </ul>
            </nav>
          </div>
          <div className="col-12 col-md-8">
          {location.pathname === '/solutions' ? (
        <div>
          12
        </div>
      ) : (
        <Outlet/> 
      )}

          </div>
        </div>
      </div>

    </section>
  )
}

export default Solutions