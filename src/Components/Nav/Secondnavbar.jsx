// --------------------------------- 
// small navigation located under the hero section
// ---------------------------------
import React from 'react'
import { Link } from 'react-router-dom'

const Secondnavbar = () => {
  return (
    <div className="secondnavbar">
<ul>
            <li> 
                <Link to={'/solutions'} >
                    <div className="icon">
                    <i class="fa fa-cubes" aria-hidden="true"></i>
                    <i class="fa fa-cubes" aria-hidden="true"></i>
                    </div>
                    <div className="name"><span data-text="About">Solutions</span></div>
                </Link>
            </li>
            <li>
                <Link to={'/formations'}>
                    <div className="icon">
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                        <i className="fa fa-cogs" aria-hidden="true"></i>
                    </div> 
                    <div className="name"><span data-text="formations">Formations</span></div>
                </Link>
            </li>

            <li>
                <Link to={'/contact'} href="{#}">
                    <div className="icon">
                    <i class="fa fa-comments" aria-hidden="true"></i>
                    <i class="fa fa-comments" aria-hidden="true"></i>
                    </div>
                    <div className="name"><span data-text="Contact">Contacts</span></div>
                </Link>
            </li>
            <li>
              <Link to={'/boutique'}>

            <button class="cssbuttons-io-button">
  Boutique
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>
              </Link>

            </li>

           
        </ul>



    </div>
  )
}

export default Secondnavbar