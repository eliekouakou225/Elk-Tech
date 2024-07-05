import React from 'react'
// import product from '../../Assets/img/product_1.png'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { convertTitleToUrl } from './../Utils/utils';

function ProductItem({ products }) { 
    return (    
        <> 
            <div className="single_product_list_slider">
                <div className="row align-items-center justify-content-between">
                {products.map(product => (
                    <div className="col-lg-3 col-sm-6" key={product.id}>
                        <div className="single_product_item">
                            <img src={product.image} alt={product.title} />
                            <div className="single_product_text">
                                <h4>{product.title}</h4>
                                <h3>{product.price} FCFA</h3>
                                <div className='container-btn-links'>
                                <Link to={`/boutique/${convertTitleToUrl(product.title)}`} className="btn-links"> Voir les détails 	&rarr;</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
                 
                </div>
            </div >

        </>
    )
}
ProductItem.propTypes = {
    products: PropTypes.arrayOf(
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
export default ProductItem

