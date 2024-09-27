import React from 'react';
import { Link } from 'react-router-dom';
import { convertTitleToUrl } from '../../Utils/utils';
import PropTypes from 'prop-types';

function MikrotikList({ mikrotiks }) {
    return (

        <>

            <div className="single_product_list_slider">
                <div className="row align-items-center justify-content-between">
                    {mikrotiks.map(mikrotik => (
                        <div className="col-lg-3 col-sm-6" key={mikrotik.id}>
                            <div className="single_product_item">
                                <img src={mikrotik.image} alt={mikrotik.title} />

                                <div className="single_product_text">
                                    <h4>{mikrotik.title}</h4>
                                    <h3>{mikrotik.price_sansconfig} FCFA</h3>
                                    <div className='container-btn-links'>
                                        <Link to={`/boutique/categorie/mikrotik/${convertTitleToUrl(mikrotik.title)}`} className="btn-links"> Voir les détails 	&rarr;</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
            </div >



        </>

    );
}
MikrotikList.propTypes = {
    mikrotiks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            disponibility: PropTypes.string.isRequired,
            details: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default MikrotikList