import React from 'react'
import Form from '../Components/Form/Form'


const Estimate = () => {
    return (
        <div className="estimate">
            <div className='container container-title'>
                <h2>Demander un devis </h2>
                <p>Remplissez ce formulaire de demande de devis ou contactez-nous directement sur WhatsApp</p>
            </div>
            <div className="container">
                <Form />
            </div>
        </div>
    )
}

export default Estimate