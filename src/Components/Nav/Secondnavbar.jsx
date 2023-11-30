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
                <a href="{#}">
                    {/* <!-- this anchor text for link your cart page to another page --> */}
                    <div className="icon">
                        <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                        {/* <!-- this is cart icon link get form fornt-awesome icon for cart --> 		 */}
                        <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                        {/* <!-- copy and paste the cart icon link here for hover effect -->		 */}
                    </div>
                    <div className="name"><span data-text="Boutique">Boutique</span></div>
                    {/* <!-- we are create eight menu item name Cart --> */}
                </a>
            </li>

           
        </ul>



    </div>
  )
}

export default Secondnavbar