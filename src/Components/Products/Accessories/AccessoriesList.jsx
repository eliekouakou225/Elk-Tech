import React from 'react';
import { Link } from 'react-router-dom';
import { convertTitleToUrl } from '../../Utils/utils';
import PropTypes from 'prop-types';


function AccessoriesList({ accessories }) {

    return (

        <>

            <div className="single_product_list_slider">
                <div className="row align-items-center justify-content-between">
                    {accessories.map(accessorie => (
                        <div className="col-lg-3 col-sm-6" key={accessorie.id}>
                            <div className="single_product_item">
                                <img src={accessorie.image} alt={accessorie.title} />

                                <div className="single_product_text">
                                    <h4>{accessorie.title}</h4>
                                    <h3>{accessorie.price} FCFA</h3>
                                    <div className='container-btn-links'>
                                        <Link to={`/boutique/categorie/accessoires/${convertTitleToUrl(accessorie.title)}`} className="btn-links"> Voir les détails 	&rarr;</Link>
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
AccessoriesList.propTypes = {
    accessories: PropTypes.arrayOf(
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

export default AccessoriesList

