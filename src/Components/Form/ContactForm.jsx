// import React, { useState } from 'react'
// // import { Form } from 'react-router-dom'
// import emailjs from '@emailjs/browser';
// const ContactForm = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         //Your EmailJS service ID
//         const serviceId = 'service_2a60adl';
//         const templateId = 'template_4570bch';
//         const publicKey = 'Pj9xJh3MvxMNIYXCL';

//         const templateParams = {
//             from_name: name,
//             from_email: email,
//             to_name: 'Web Wizard',
//             message: message,
//         }
//         emailjs.send(serviceId, templateId, templateParams, publicKey)
//             .then((response) => {
//                 console.log('Email sent successfully', response);
//                 setName('');
//                 setEmail('');
//                 setMessage('');
//                 setIsSubmitted(true);
//             })
//             .catch((error) => {
//                 console.error('Error send Mail');
//             })
//     }
//     return (
//         <>
//             <div style={{ marginTop: '200px' }}>
//                 {isSubmitted ? (  // Afficher le message de confirmation après envoi
//                     <p>Merci ! Votre message a bien été envoyé.</p>
//                 ) : (
//                     <form onSubmit={handleSubmit} className='emailForm' >
//                         <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
//                         <input type="email" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//                         <input type="text" placeholder='Your Name' value={message} onChange={(e) => setMessage(e.target.value)} />
//                         <textarea name="" cols="30" rows="10" id=""></textarea>
//                         <button type='submit'>Send Email</button>
//                     </form>

//                 )}
//             </div>
//         </>
//     )
// }

// export default ContactForm





import React, { useState } from 'react'
// import { Form } from 'react-router-dom'
import emailjs from '@emailjs/browser';
const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState([]);



    // Fonction pour valider les données
    const validate = () => {
        const newErrors = [];

        // Validation du champ Nom
        if (!name.trim()) {
            newErrors.push('Le nom est requis.');
        }

        // Validation du champ Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pour valider l'email
        if (!email.trim()) {
            newErrors.push('L\'email est requis.');
        } else if (!emailPattern.test(email)) {
            newErrors.push('L\'email est invalide.');
        }

        // Validation du champ Message
        if (!message.trim()) {
            newErrors.push('Le message est requis.');
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
            from_email: email,
            to_name: 'Web Wizard',
            message: message,
        }
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully', response);
                setName('');
                setEmail('');
                setMessage('');
                setIsSubmitted(true);
                setErrors([]);
            })
            .catch((error) => {
                console.error('Error send Mail');
            })
    }
    return (
        <>
            <div style={{ marginTop: '200px' }}>
                {isSubmitted ? (  // Afficher le message de confirmation après envoi
                    <p>Merci ! Votre message a bien été envoyé.</p>
                ) : (
                    <form onSubmit={handleSubmit} className='emailForm' >
                        {errors.length > 0 && (
                            <div style={{ color: 'red' }}>
                                <ul>
                                    {errors.map((error, index) => (
                                        <li key={index}>{error}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder='Your Name' value={message} onChange={(e) => setMessage(e.target.value)} />
                        <textarea name="" cols="30" rows="10" id=""></textarea>
                        <button type='submit'>Send Email</button>
                    </form>

                )}
            </div>
        </>
    )
}

export default ContactForm