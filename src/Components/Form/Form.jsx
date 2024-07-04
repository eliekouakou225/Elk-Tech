import React from 'react'

const Form = () => {
  return (
    <>
      <section className="Contact__form">
   <form className="contact-form row">
      <div className="form-field col-lg-6">
         <input id="name" className="input-text js-input" type="text" required/>
         <label className="label" htmlFor="name">Nom <span className='require' >*</span></label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="surmane" className="input-text js-input" type="text" required/>
         <label className="label" htmlFor="surmane">Prénom <span className='require' >*</span> </label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="email" className="input-text js-input" type="email" required/>
         <label className="label" htmlFor="email">E-mail <span className='require' >*</span></label>
      </div>
       <div className="form-field col-lg-6 ">
         <input id="phone" className="input-text js-input" type="text" required/>
         <label className="label" htmlFor="phone">Télephone <span className='require' >*</span></label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="company" className="input-text js-input" type="text" required/>
         <label className="label" htmlFor="company">Nom de l'Entreprise</label>
      </div>
       <div className="form-field col-lg-6 ">
         <input id="site" className="input-text js-input" type="url" required/>
         <label className="label" htmlFor="site">Site web url</label>
      </div>
      <div className="form-field col-lg-12">
         <input id="message" className="input-text js-input" type="text" required/>
         <label className="label" htmlFor="message">Message</label>
      </div>
      <div className="form-field col-lg-6 ">
        <p>Je suis interessé par...</p>
      <select className="form-select" aria-label="Default select example">
          <option selected>Choisir </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
       <div className="form-field col-lg-6 ">
        <p>J'ai un fichier</p>
        <label htmlFor="file-upload" className=" file-upload">
            <input id="file-upload" type="file" style={{ display: "none" }}/>
            <span>Ajouter une pièces jointe</span>
            <span> <i className="fa fa-paperclip" aria-hidden="true"></i> </span>
        </label>
      </div>
       <div className="form-field col-lg-12 ">
        <p>Budget : (FCFA) </p>
        <div className="radio-group">
		<label className="radio">
			<input type="radio" value="500k" name="budget"/>
			{'>'} 500k
			<span></span>
		</label>
		<label className="radio">
			<input type="radio" value="500k2M" name="budget"/>
			500k - 2M 
			<span></span>
		</label>
		<label className="radio">
			<input type="radio" value="500k2M" name="budget"/>
			{'<'} 2M
			<span></span>
		</label>
		
	</div>           
      </div>
      <div className="form-field col-lg-12">
         <input className="submit-btn" type="submit" value="Submit"/>
      </div>
   </form>
</section>  
    </>
  )
}

export default Form