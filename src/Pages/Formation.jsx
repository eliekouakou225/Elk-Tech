
import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom';


const Formation = () => {
  return (
    <section className='formation__page'> 
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <nav className='articles__nav'>
              <ul>
                  <ul>
                    <NavLink to={'/solutions/infographie'} activeClassName="active" >
                      <li className='tile--services'>Bureautique</li>
                    </NavLink>
                    <NavLink to={'/solutions/electricite' } activeClassName="active" >
                      <li className='tile--services'>Infographie</li>
                    </NavLink>
                    <NavLink to={'/solutions/montagevideo' } activeClassName="active" >
                      <li className='tile--services'>Montage video</li>
                    </NavLink>
                    <NavLink to={'/solutions/programmation' } activeClassName="active" >
                      <li className='tile--services'>Programmation</li>
                    </NavLink>
                    <NavLink to={'/solutions/electricite' } activeClassName="active" >
                      <li className='tile--services'>Electrité</li>
                    </NavLink>

                  </ul>
              </ul>
            </nav>
          </div>
          <div className="col-12 col-md-6">
            <Outlet/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Formation