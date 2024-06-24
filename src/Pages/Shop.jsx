import React from 'react'
import HeroShopImage from '../Assets/img/couch.png'
import ImageCatalogNetwork from '../Assets/img/collection-item1.jpg'
import Accesoires from '../Assets/img/collection-item2.jpg'
import Accesoires2 from '../Assets/img/collection-item3.jpg'

import ProductItem from '../Components/Products/ProductItem'

const Shop = () => {
    return (
        <>
            {/* <!-- Start Hero Section --> */}
            <div className="hero-shop">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
                                <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                                <p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src={HeroShopImage} className="img-fluid" alt=' on Hero ' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section --> */}
            <section id="latest-collection">
                <div className="container-fluid mt-5">
                    <div className="row">

                        <div className="col-2 ">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod voluptate blanditiis delectus, consequatur odio sequi aspernatur illum ad dicta reiciendis praesentium laudantium ab temporibus veniam repellendus alias explicabo earum illo.
                        </div>
                        <div className="col-10">
                            <div className="product-collection row">
                                <div className="col-lg-7 col-md-12 left-content">
                                    <div className="collection-item">
                                        <div className="products-thumb">
                                            <img src={ImageCatalogNetwork} alt="collection item" className="large-image image-rounded rounded" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 product-entry">
                                            <div className="categories">Equipements</div>
                                            <h3 className="item-title">Reseau</h3>
                                            <p>Des équipements haut de gamme maintenant à votre portée.</p>
                                            <div className="btn-wrap">
                                                <a href="shop.html" className="d-flex align-items-center">shop collection <i className="icon icon-arrow-io"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 right-content flex-wrap">
                                    <div className="collection-item top-item">
                                        <div className="products-thumb">
                                            <img src={Accesoires} alt="collection item" className="small-image image-rounded" />
                                        </div>
                                        <div className="col-md-6 product-entry">
                                            <div className="categories">Bien au-delà de simples routeurs.</div>
                                            <h3 className="item-title">Mikrotik</h3>
                                            <div className="btn-wrap">
                                                <a href="shop.html" className="d-flex align-items-center">shop collection <i className="icon icon-arrow-io"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collection-item bottom-item">
                                        <div className="products-thumb">
                                            <img src={Accesoires2} alt="collection item" className="small-image image-rounded" />
                                        </div>
                                        <div className="col-md-6 product-entry">
                                            <div className="categories">Quand le rapport qualité-prix se combine.</div>
                                            <h3 className="item-title">Accesoires</h3>
                                            <div className="btn-wrap">
                                                <a href="shop.html" className="d-flex align-items-center">shop collection <i className="icon icon-arrow-io"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-10">
                            <h2>Nos produits</h2>
                            <ProductItem />
                        </div>
                        <div className="col-2"></div>
                    </div>

                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="image-large">

                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-10">
                            <ProductItem />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Shop