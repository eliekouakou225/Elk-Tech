import React from 'react'
import { useEffect } from "react";
import ShareIcon from '../Components/ShareIcon/ShareIcon'
import Form from '../Components/Form/Form'

const Contact = () => {
    useEffect(() => {
        document.title = "Contact | Elk-Tech";
    }, []);
    return (
        <div style={{ backgroundColor : '#F7F7F7' }}>
            <section className='contact m-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 contact__title">
                            <h1>Contact</h1>
                            <h2>Développez votre activité grâce à nos solutions !</h2>
                            <ShareIcon />
                        </div>
                        <div className="col-12 col-lg-6">
                            <Form />
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <iframe title="Location on google maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.4936051943123!2d-4.084385325524923!3d5.341354435771851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1c1001d0df321%3A0x716728031872935f!2sElk%20Tech%20Groupe!5e0!3m2!1sfr!2sci!4v1727469082105!5m2!1sfr!2sci"
                        width="100%"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>

            </section>
        </div>
    )
}

export default Contact