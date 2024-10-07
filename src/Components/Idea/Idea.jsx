import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';



const Idea = () => {
    return (
        <section>
            <div className='container container-title'>
                <h2>Un projet, une question ? </h2>
                <p>Vous avez des questions ou des projets ? Contactez-nous et ensemble, réalisons l'extraordinaire.</p>
            </div>
            <div className="container idea">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <Player
                            autoplay
                            loop
                            src="https://lottie.host/4a81874e-9e68-435e-bb1b-414fd65b1a65/UBIuQc7Bz6.json"
                            style={{ height: '300px', width: '500px' }}
                            className='lottie-Player'
                        >
                            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column">
                        <p>Notre équipe est là pour vous écouter et vous accompagner. Que ce soit pour une simple demande d'information ou pour discuter de collaborations potentielles, nous sommes disponibles et réactifs. N'hésitez pas à nous contacter par téléphone, par email ou via notre formulaire en ligne. Nous nous engageons à vous répondre dans les plus brefs délais. Ensemble, faisons avancer vos idées. <strong>#It's possible</strong> </p>
                        <div className='d-flex justify-content-center '>
                            <div className="btn__main--container">
                                <div className="btn__main--orange-hover-blue">
                                    <Link to={'devis'}>
                                        <button className="btn" data-cursor-size="20px"><span></span><p data-start="good luck!" data-text="devis" data-title="Demander"></p></button>
                                    </Link>
                                </div>
                            </div>
                            <div className="btn__main--blue-hover-orange">
                                <Link to={'contact'}>
                                    <button className="btn" data-cursor-size="20px"><span></span><p data-start="good luck!" data-text="Maintenant" data-title="Contacter"></p></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Idea