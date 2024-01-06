import React from 'react'

const Form = () => {
  return (
    <>
      <section class="Contact__form">
   <form class="contact-form row">
      <div class="form-field col-lg-6">
         <input id="name" class="input-text js-input" type="text" required/>
         <label class="label" for="name">Nom <span className='require' >*</span></label>
      </div>
      <div class="form-field col-lg-6 ">
         <input id="company" class="input-text js-input" type="text" required/>
         <label class="label" for="company">Prénom <span className='require' >*</span> </label>
      </div>
      <div class="form-field col-lg-6 ">
         <input id="email" class="input-text js-input" type="email" required/>
         <label class="label" for="email">E-mail <span className='require' >*</span></label>
      </div>
       <div class="form-field col-lg-6 ">
         <input id="phone" class="input-text js-input" type="text" required/>
         <label class="label" for="phone">Télephone <span className='require' >*</span></label>
      </div>
      <div class="form-field col-lg-6 ">
         <input id="company" class="input-text js-input" type="text" required/>
         <label class="label" for="company">Nom de l'Entreprise</label>
      </div>
       <div class="form-field col-lg-6 ">
         <input id="site" class="input-text js-input" type="url" required/>
         <label class="label" for="site">Site web url</label>
      </div>
      <div class="form-field col-lg-12">
         <input id="message" class="input-text js-input" type="text" required/>
         <label class="label" for="message">Message</label>
      </div>
      <div class="form-field col-lg-6 ">
        <p>Je suis interessé par...</p>
      <select class="form-select" aria-label="Default select example">
          <option selected>Choisir </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
       <div class="form-field col-lg-6 ">
        <p>J'ai un fichier</p>
        <label for="file-upload" class=" file-upload">
            <input id="file-upload" type="file" style={{ display: "none" }}/>
            <span>Ajouter une pièces jointe</span>
            <span> <i class="fa fa-paperclip" aria-hidden="true"></i> </span>
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
      <div class="form-field col-lg-12">
         <input class="submit-btn" type="submit" value="Submit"/>
      </div>
   </form>
</section>  
    </>
  )
}

export default Form