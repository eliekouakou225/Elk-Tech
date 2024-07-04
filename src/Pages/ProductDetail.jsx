import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Error404 from './Error404';
import sproduct from '../Assets/img/sproduct_1.png'
import { products } from '../Assets/Data/dataProducts';
import { convertTitleToUrl } from '../Components/Utils/utils'
import Breadcrumb from 'react-bootstrap/Breadcrumb';


function ProductDetail() {
    // const { id } = useParams(); 
    const { title } = useParams();
    // const training = trainings.find(t => t.id === parseInt(id) );
    const product = products.find((product) => convertTitleToUrl(product.title) === title);

    if (!product) {
        return <Error404 />;
    }

    return (
        <>
            <div className="product_image_area section_padding p-500">
                <div className="container">
                    <div className="row s_product_inner justify-content-between">
                        <div className="col-lg-7 col-xl-7">
                            <div className="product_slider_img">
                                <div id="vertical">
                                    <div data-thumb="img/product/single-product/product_1.png">
                                        <img src={sproduct} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-4">
                            <div className="s_product_text">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="elktech-ci.com/boutique">Boutique</Breadcrumb.Item>
                                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                        Routers
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item active>{product.title}</Breadcrumb.Item>
                                </Breadcrumb>
                                <h3> {product.title} </h3>
                                <h2>{product.price} FCFA</h2>
                                <ul className="list">
                                    <li> <span>Catégorie</span> : {product.category} </li>
                                    <li>  <span>Disponibilité </span> : En Stock  </li>
                                </ul>
                                <p>
                                    {product.details}
                                </p>
                                <div className="card_area d-flex justify-content-between align-items-center">
                                    <Link href="{#}" className="btn_buy" data-cursor-size="20px">Commender</Link>
                                    <Link href=" {#} " className="like_us" data-cursor-size="20px">shared icon <i className="ti-heart"></i> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail