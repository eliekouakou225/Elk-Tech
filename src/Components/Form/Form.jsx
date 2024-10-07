import React, { useState } from 'react'
import emailjs from '@emailjs/browser';


const Form = () => {
    const [name, setName] = useState('');
    const [surmane, setSurmane] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [site, setSite] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [category, setCategory] = useState('');
    const [budget, setBudget] = useState('');


    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState([]);



    // Fonction pour valider les données
    const validate = () => {
        const newErrors = [];

        // Validation du champ Nom
        if (!name.trim()) {
            newErrors.push('Merci de renseigner votre Nom.');
        }

        if (!surmane.trim()) {
            newErrors.push('Merci de renseigner votre Prénom.');
        }

        // Validation du champ Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pour valider l'email
        if (!email.trim()) {
            newErrors.push('Merci de renseigner votre Email.');
        } else if (!emailPattern.test(email)) {
            newErrors.push('Merci de renseigner un Email valide.');
        }

        const phonePattern = /^\+?[0-9]{8,16}$/; // Regex pour vérifier que ce sont des chiffres entre 8 et 16 caractères
        if (!phone.trim()) {
            newErrors.push('Merci de renseigner votre Numéro de téléphone.');
        } else if (!phonePattern.test(phone)) {
            newErrors.push('Le numéro de téléphone doit contenir entre 8 et 16 chiffres.');
        }

        // Validation du champ Message
        if (!message.trim()) {
            newErrors.push('Merci de saisir votre message.');
        }
        // Validation du champ Catégorie
        if (category === '') {
            newErrors.push('Merci de choisir une catégorie valide.');
        }

        // Validation du champ Budget (boutons radio)
        if (!budget) {
            newErrors.push('Merci de choisir un budget.');
        }






        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (validationErrors.length > 0) {
            setErrors(validationErrors); // Afficher les erreurs s'il y en a
            return;
        }

        //Your EmailJS service ID
        const serviceId = 'service_2a60adl';
        const templateId = 'template_4570bch';
        const publicKey = 'Pj9xJh3MvxMNIYXCL';

        const templateParams = {
            from_name: name,
            from_surmane: surmane,
            email: email,
            phone: phone,
            site: site,
            company: company,
            category: category,
            budget: budget,
            to_name: 'Elk-Tech Groupe',
            message: message,
        }
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully', response);
                setName('');
                setSurmane('');
                setEmail('');
                setPhone('');
                setSite('');
                setCompany('');
                setBudget('');
                setMessage('');
                setCategory('');
                setIsSubmitted(true);
                setErrors([]);
            })
            .catch((error) => {
                console.error('Error send Mail');
            })
    }
    return (
        <>
            <section className="Contact__form">
                <div style={{ marginTop: '200px' }}>
                    {isSubmitted ? (  // Afficher le message de confirmation après envoi
                        <div className="alert alert-success">
                            <p>
                                <strong>Votre e-mail a bien été envoyé. Merci de nous avoir contactés !</strong> #It's possible
                            </p>
                        </div> 

                    ) : (
                        <form className="contact-form row" onSubmit={handleSubmit}>
                            {errors.length > 0 && (
                                <div className="alert alert-danger">
                                    <ul>
                                        <h4 style={{ color: 'red' }}><i className="fa fa-exclamation-circle" aria-hidden="true"></i> <strong>Erreur !</strong> Il semble que certaines informations manquent ou sont incorrectes dans le formulaire.</h4>
                                        {errors.map((error, index) => (
                                            <li key={index} style={{ listStyleType: 'circle', color: 'red' }}>{error}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div className="form-field col-lg-6">
                                <input id="name" className="input-text js-input" type="text" onChange={(e) => setName(e.target.value)} />
                                <label className="label" htmlFor="name">Nom <span className='require' >*</span></label>
                            </div>
                            <div className="form-field col-lg-6 ">
                                <input id="surmane" className="input-text js-input" type="text" onChange={(e) => setSurmane(e.target.value)} />
                                <label className="label" htmlFor="surmane">Prénom <span className='require' >*</span> </label>
                            </div>
                            <div className="form-field col-lg-6 ">
                                <input id="email" className="input-text js-input" type="email" onChange={(e) => setEmail(e.target.value)} />
                                <label className="label" htmlFor="email">E-mail <span className='require' >*</span></label>
                            </div>
                            <div className="form-field col-lg-6 ">
                                <input id="phone" className="input-text js-input" type="tel" onChange={(e) => setPhone(e.target.value)} />
                                <label className="label" htmlFor="phone">Télephone <span className='require' >*</span></label>
                            </div>
                            <div className="form-field col-lg-6 ">
                                <input id="company" className="input-text js-input" type="text" onChange={(e) => setCompany(e.target.value)} />
                                <label className="label" htmlFor="company">Nom de l'Entreprise</label>
                            </div>
                            <div className="form-field col-lg-6 ">
                                <input id="site" className="input-text js-input" type="text" onChange={(e) => setSite(e.target.value)} />
                                <label className="label" htmlFor="site">Site web url</label>
                            </div>
                            <div className="form-field col-lg-12">
                                <input id="message" className="input-text js-input" type="text" onChange={(e) => setMessage(e.target.value)} />
                                <label className="label" htmlFor="message">Message</label>
                            </div>
                            <div className="form-field col-lg-6 ">
                                <p>Je suis interessé par...</p>
                                <select className="form-select" aria-label="Default select example" name="category" id='solution-id' value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="">Choisir</option>
                                    <option value="Infographie">Infographie</option>
                                    <option value="Mikrotik-admin">Config Mikrotik / Gestion wifi</option>
                                    <option value="E-Marketing">E-Marketing</option>
                                    <option value="Dev-site">Dev site / Applis</option>
                                    <option value="Interconnexion-de-site">Interconnexion de site </option>
                                    <option value="Network">Network </option>
                                    <option value="Security">Sécurité Informatique</option>
                                    <option value="Wifi-Pro">Deploiement de Wi-Fi Pro</option>
                                    <option value="Videosurveillance">Vidéosurveillance </option>
                                    <option value="Depannage">Dépannage Informatique</option>
                                </select>
                            </div>
                            <div className="form-field col-lg-6 ">
                                <p>J'ai un fichier</p>
                                <label htmlFor="file-upload" className=" file-upload">
                                    <input id="file-upload" type="file" style={{ display: "none" }} />
                                    <span>Ajouter une pièces jointe</span>
                                    <span> <i className="fa fa-paperclip" aria-hidden="true"></i> </span>
                                </label>
                            </div>
                            <div className="form-field col-lg-12 ">
                                <p>Budget : (FCFA) </p>
                                <div className="radio-group">
                                    <label className="radio">
                                        <input type="radio" value="500k" name="budget" onChange={(e) => setBudget(e.target.value)} />
                                        {'>'} 500k
                                        <span></span>
                                    </label>
                                    <label className="radio">
                                        <input type="radio" value="500k-2M" name="budget" onChange={(e) => setBudget(e.target.value)} />
                                        500k - 2M
                                        <span></span>
                                    </label>
                                    <label className="radio">
                                        <input type="radio" value="2M" name="budget" onChange={(e) => setBudget(e.target.value)} />
                                        {'<'} 2M
                                        <span></span>
                                    </label>

                                </div>
                            </div>
                            <div className="col-lg-12">
                                 <div className="btn__main--orange-hover-blue">
                                        <button className="btn" type="submit" ><span></span><p data-start="good luck!" data-text="Maintenant" data-title="Envoyer"></p></button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </section>
        </>
    )
}

export default Form