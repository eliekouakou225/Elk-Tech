import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Error404 from '../../../Pages/Error404';
// import sproduct from '../../../Assets/img/sproduct_1.png'
// import { products } from '../../../Assets/Data/dataProducts'; 
import { networks } from '../../../Assets/Data/dataProducts';
import { convertTitleToUrl } from '../../Utils/utils'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useEffect } from "react";

function NetworkDetail() {
    // const { id } = useParams(); 
    const { title } = useParams();
    // const training = trainings.find(t => t.id === parseInt(id) );
    const network = networks.find((network) => convertTitleToUrl(network.title) === title);
    const pageTitle = `${network.title} - Boutique`;

    useEffect(() => {
        document.title = `${pageTitle} | Elk-Tech`;
    }, [pageTitle]);


    if (!network) {
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
                                    <div>
                                        <img src={network.image} alt={network.title} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-4">
                            <div className="s_product_text">
                                <Breadcrumb>
                                    <Breadcrumb.Item > <Link to={'/boutique'}>Boutique</Link> </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to={'/boutique/categorie/reseau'}>Réseau  </Link>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item active>{network.title}</Breadcrumb.Item>
                                </Breadcrumb>
                                <h3> {network.title} </h3>
                                <h2>{network.price} FCFA</h2>
                                <ul className="list">
                                    <li> <span>Catégorie</span> : {network.category} </li>
                                    <li>  <span>Disponibilité </span> : En Stock  </li>
                                </ul>
                                <p>
                                    {network.details}
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

export default NetworkDetail

