import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {

    return (
        <div id="notfound">
            <div className="notfound-bg"></div>
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>NOUS SOMMES DÉSOLÉS, MAIS LA PAGE QUE VOUS AVEZ DEMANDÉE N'EST PAS TROUVÉE</h2>
                <ul>
                    <li>
                        <Link to={'/'}>
                            Acceuil <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            Solutions <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            Formations <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </Link>


                    </li>
                    <li> <Link to={'/'}>
                        Boutique <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Link></li>
                    <li>
                        <Link to={'/'}>
                            Contact <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>



    )
}

export default Error404