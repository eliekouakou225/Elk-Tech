import React from 'react'
import skillQuality from "../../Assets/img/quality.webp"
import skillPrice from "../../Assets/img/price.webp"
import skillConfidentiality from "../../Assets/img/confidentiality.webp"
const Skill = () => {
    return (
        <>
            <div className='container container-title container-title-right'>
                <h2>Pourquoi nous choisir ?</h2>
                <p>Choisissez-nous pour notre expertise en technologie, notre engagement à l'innovation, et notre approche centrée sur le client, garantissant des solutions sur mesure qui propulsent votre succès.</p>
            </div>
            <div className="container skill">
                <div className="row m-5 ">
                    <div className="col-12 col-lg-6 ">
                        <figure role="figure" aria-label="Photo of skill of elk tech structure team">
                            <img src={skillQuality} loading="lazy" className="skill__img" alt="Our-quality" />
                        </figure>
                    </div>
                    <div className="col-12 col-lg-6 align-middle  d-flex align-items-center">
                        <div className="content">
                            <h4>Qualité</h4>
                            <p>Chez Elk-Tech Groupe, nous plaçons la qualité au cœur de notre engagement. Nous nous efforçons de fournir des services et des produits qui répondent aux plus hauts standards de l'industrie. Notre équipe est composée de professionnels expérimentés, utilisant des technologies de pointe pour garantir que chaque projet est exécuté avec précision et fiabilité. Nous nous engageons à offrir des solutions robustes et durables, assurant ainsi une performance optimale et une satisfaction client exceptionnelle.</p>
                        </div>
                    </div>
                </div>
                <div className="row p-5 flex-column-reverse flex-lg-row" >
                    <div className="col-12 col-lg-6 align-middle  d-flex align-items-center">
                        <div className="content">
                            <h4>Prix</h4>
                            <p>Nous comprenons que le prix est un facteur crucial pour nos clients. C'est pourquoi nous proposons des solutions compétitives qui offrent un excellent rapport qualité-prix. En optimisant nos processus et en travaillant avec des partenaires stratégiques, nous sommes en mesure de maintenir des coûts accessibles tout en ne compromettant jamais la qualité. Notre objectif est de vous fournir des services de premier ordre à des prix équitables, afin que vous puissiez tirer le meilleur parti de votre investissement.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 ">
                        <figure role="figure" aria-label="Photo of skill of elk tech structure team">
                            <img src={skillPrice}  loading="lazy" className="skill__img" alt="Our-quality" />
                        </figure>
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-12 col-lg-6">
                        <figure role="figure" aria-label="Photo of skill of elk tech structure team">
                            <img src={skillConfidentiality} loading="lazy" className="skill__img" alt="Our-quality" />
                        </figure>
                    </div>
                    <div className="col-12 col-lg-6 align-middle  d-flex align-items-center">
                        <div className="content">
                            <h4>Confidentialité</h4>
                            <p>La confidentialité est une priorité absolue pour nous. Nous mettons en œuvre des mesures rigoureuses pour protéger vos informations sensibles et garantir que vos données sont traitées avec le plus grand soin. Nous respectons strictement les normes de sécurité et de confidentialité en vigueur, et nous nous engageons à préserver l'intégrité de vos informations contre tout accès non autorisé. Avec nous, vous pouvez être assuré que vos données sont en sécurité et que votre vie privée est protégée à chaque étape du processus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill