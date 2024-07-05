import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Error404 from '../../../Pages/Error404';
// import sproduct from '../../../Assets/img/sproduct_1.png'
// import { products } from '../../../Assets/Data/dataProducts';
import { mikrotiks } from '../../../Assets/Data/dataProducts';
import { convertTitleToUrl } from '../../../Components/Utils/utils'
import Breadcrumb from 'react-bootstrap/Breadcrumb';


function MikrotikDetail() {
    // const { id } = useParams(); 
    const { title } = useParams();
    // const training = trainings.find(t => t.id === parseInt(id) );
    const mikrotik = mikrotiks.find((mikrotik) => convertTitleToUrl(mikrotik.title) === title);

    if (!mikrotik) {
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
                                        <img src={mikrotik.image} alt={mikrotik.title} />
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
                                    <Breadcrumb.Item active>{mikrotik.title}</Breadcrumb.Item>
                                </Breadcrumb>
                                <h3> {mikrotik.title} </h3>
                                <h2>{mikrotik.price} FCFA</h2>
                                <ul className="list">
                                    <li> <span>Catégorie</span> : {mikrotik.category} </li>
                                    <li>  <span>Disponibilité </span> : En Stock  </li>
                                </ul>
                                <p>
                                    {mikrotik.details}
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

export default MikrotikDetail


