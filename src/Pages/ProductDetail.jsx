import React from 'react'
import { Link } from 'react-router-dom'
import sproduct from '../Assets/img/sproduct_1.png'
const ProductDetail = () => {
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
                                <h5>previous <span>|</span> next</h5>
                                <h3>Mikrotik Rb951 Ui</h3>
                                <h2>55.000 FCFA</h2>
                                <ul className="list">
                                    <li> <span>Catégorie</span> : Mikrotik - Réseau </li>
                                    <li>  <span>Disponibilité </span> : En Stock  </li>
                                </ul>
                                <p>
                                    First replenish living. Creepeth image image. Creeping can't, won't called.
                                    Two fruitful let days signs sea together all land fly subdue
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