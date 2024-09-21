import React from 'react';
import { testimonials } from '../../Assets/Data/dataSolutions';
import Quotes from '../../Assets/img/quotes.svg';



const SolutionTestimonials = () => {
    return (

        <section className="testimonials">
            <div className="cards-testimonials-container ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                {testimonials.map(testimonials => (
                                    <div className="col-lg-4" key={testimonials.id}>
                                        <div className="card-testimonial">
                                            <img className="quotes" src={Quotes} alt="alternative" />
                                            <div className="card-body">
                                                <p className="testimonial-text">{testimonials.msg}</p>
                                                <div className="testimonial-author">{testimonials.name}</div>
                                            </div>
                                            <div className="gradient-floor blue-to-purple"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SolutionTestimonials