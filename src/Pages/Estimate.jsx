import React from 'react'
import Form from '../Components/Form/Form'


const Estimate = () => {
  return (
    <div className="estimate">
            <div className="container">
            {/* <h1>Devis</h1> */}
            <div className="section-header">
                        <span>//DEMANDER UN DEVIS</span>
                        <h2>//DEMANDER UN DEVIS</h2>
      {/* <h3>Bienvenu dans notre boutique acheter la quailié.</h3> */}
            <p>Remplissez ce formulaire de demande de devis</p>
                    </div>
           <Form/>     
            </div>
        </div>
  )
}

export default Estimate