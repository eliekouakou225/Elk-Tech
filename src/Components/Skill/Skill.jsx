import React from 'react'
import skillQuality from "../../Assets/img/image-of-our-team.webp"
const Skill = () => {
    return (
        <>
            <div className='container container-title container-title-right'>
                <h2>Nos Atouts </h2>
                <p>« La formation est l’essence de tout succès. » Arnaud Boti</p>
            </div>
            <div className="container skill">
                <div className="row m-5">
                    <div className="col-12 col-lg-6 ">
                        <figure role="figure" aria-label="Photo of skill of elk tech structure team">
                            <img src={skillQuality} className="skill__img" alt="Our-quality" />
                        </figure>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h4>Qualité</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consectetur unde ipsum vero voluptates! Fugiat, dolor corporis. Officiis eligendi illo mollitia, placeat ipsam possimus velit eveniet dolore hic, eius ratione!</p>
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-12 col-lg-6">
                        <h4>Prix</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fuga eligendi quos eum corporis nam dolorem, amet quaerat dolore impedit? Est autem iusto, maxime sint tenetur sed consequuntur soluta dignissimos.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <figure role="figure" aria-label="Photo of skill of elk tech structure team">
                            <img src={skillQuality} className="skill__img" alt="Our-quality" />
                        </figure>
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-12 col-lg-6">
                    <figure role="figure" aria-label="Photo of skill of elk tech structure team">
                            <img src={skillQuality} className="skill__img" alt="Our-quality"/>
                        </figure>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h4>Confidentialité</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, alias animi? Natus vitae reiciendis, ipsa, sapiente assumenda molestias perspiciatis iure blanditiis incidunt, quasi commodi sint unde voluptatum? Aperiam, optio quas!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill