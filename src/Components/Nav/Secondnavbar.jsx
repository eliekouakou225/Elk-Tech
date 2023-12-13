import React from 'react'

const Secondnavbar = () => {
  return (
    <div className="secondnavbar">
<ul>
            <li>
                <a href="{#}">
                    {/* <!-- this anchor text for link your About page to another page --> */}
                    <div className="icon">
                        <i className="fa fa-file" aria-hidden="true"></i>
                        {/* <!-- this is file icon link get form fornt-awesome icon for about -->	 */}
                        <i className="fa fa-file" aria-hidden="true"></i>
                        {/* <!-- copy and paste the file icon link here for hover effect -->		 */}
                    </div>
                    <div className="name"><span data-text="About">A propos</span></div>
                    {/* <!-- we are create second menu item name About --> */}
                </a>
            </li>
            <li>
                <a href="{#}">
                    {/* <!-- this anchor text for link your service page to another page --> */}
                    <div className="icon">
                        <i className="fa fa-cogs" aria-hidden="true"></i>
                        {/* <!-- this is cogs icon link get form fornt-awesome iocn for service menu -->	 */}
                        <i className="fa fa-cogs" aria-hidden="true"></i>
                        {/* <!-- copy and paste the cogs icon link here for hover effect -->	 */}
                    </div>
                    <div className="name"><span data-text="Services">Solution</span></div>
                    {/* <!--- we are create third menu item name services --> */}
                </a>
            </li>

            <li>
                <a href="{#}">
                    {/* <!-- this anchor text for link your home to another page --> */}
                    <div className="icon">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        {/* <!-- this is picture icon link get form fornt-awesome icon for portfolio --> 		 */}
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        {/* <!-- copy and paste the home icon link here for hover effect -->		 */}
                    </div>
                    <div className="name"><span data-text="Contact">Contact</span></div>
                    {/* <!-- we create first menu item name home --> */}
                </a>
            </li>
            <li>
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

            </li>

           
        </ul>



    </div>
  )
}

export default Secondnavbar