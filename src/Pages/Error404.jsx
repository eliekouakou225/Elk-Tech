import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {

    return (
        <div id="notfound">

            {/* <!--dust particel--> */}
            <div>
                <div className="starsec"></div>
                <div className="starthird"></div>
                <div className="starfourth"></div>
                <div className="starfifth"></div>
            </div>
            {/* <!--Dust particle end---> */}


            <div className="lamp__wrap">
                <div className="lamp">
                    <div className="cable"></div>
                    <div className="cover"></div>
                    <div className="in-cover">
                        <div className="bulb"></div>
                    </div>
                    <div className="light"></div>
                </div>
            </div>
            {/* <!-- END Lamp --> */}
            <section className="error">
                {/* <!-- Content --> */}
                <div className="error__content">
                    <div className="error__message message">
                        <h1 className="message__title">Page non trouvée</h1>
                        <p className="message__text">Nous sommes désolés, la page que vous recherchiez n'est pas trouvée ici. Le lien que vous avez suivi est peut-être erroné ou n'existe plus.</p>
                    </div>
                    <div className="error__nav e-nav">
                        <Link to={'/'} className="e-nav__link"></Link>
                    </div>
                </div>
                {/* <!-- END Content --> */}

            </section>


        </div>



    )
}

export default Error404