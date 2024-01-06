import React from 'react'
import ShareIcon from '../Components/ShareIcon/ShareIcon'
import Form from '../Components/Form/Form'

const Contact = () => {
  return (
    <section className='contact'>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 contact__title">
          <h1>Contact</h1>
          <h2>Développez votre activité grâce à nos solutions !</h2>
          <ShareIcon/>
        </div>
        <div className="col-12 col-md-6">
          <Form/>
        </div>
      </div>
    </div>

    <div className="container-fluid">
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.5614148409535!2d-4.082146006603138!3d5.341707148043198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc195c2d65f6049%3A0xfa9dc45c09fc48a8!2sCentre%20Auto.ci!5e0!3m2!1sfr!2sci!4v1704554095954!5m2!1sfr!2sci" 
    width="100%" 
    height="450" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">

    </iframe>
    </div>
    
    </section>
  )
}

export default Contact