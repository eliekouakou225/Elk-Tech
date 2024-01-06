import React from 'react'

import ProductImgMain from './../Assets/img/3.jpg'

import ShareIcon from '../Components/ShareIcon/ShareIcon'
import { Link } from 'react-router-dom'

const Single = () => {
  return (
    <section className='single__page mb-5'>
        <div className="container">
            <p>
            <Link to='/boutique' > <i class="fa fa-arrow-left" aria-hidden="true"></i> Retour </Link>

            </p>
            <div className='product__head mb-3'>
                <div className="product__info">
                <h1 className="product__title">Mikrotik HAP 3</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti exercitationem aut, magni ratione similique eum neque esse aperiam, magnam amet nihil tempore ipsam iste sint facere eveniet sed libero itaque?</p>
                    <div class="btn__main--container">
                        <div class="main-btn--orange">
                            <span>Commencer </span>
                            <svg>
                                <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                                <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                            </svg>
                        </div>
                    </div>
                    </div>
                <div className="product__img">
                    <img src={ProductImgMain} alt="" />
                </div>
            </div>
            <div className="product__body">
                
                <div className='product__img-1'>
                    <img src={ProductImgMain} alt="" />
                </div>
                <div className='product__img-2'>
                    <img src={ProductImgMain} alt="" />
                </div>
                <div className='product__description'>
                    <h4>Caracteristique</h4>
                    <p> <span>Model : </span> </p>
                    <p> <span>Ram :</span> </p>
                    <p> <span>SSD :</span> </p>
                    <p> <span> Processeur : </span> </p>
                    <h4>Description</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum excepturi eos eligendi eveniet, commodi deleniti molestias odit nemo at vero quisquam cum ad cupiditate, suscipit, quae sequi asperiores eum.</p>
                
                </div>
            </div>
            <div>
                <ShareIcon/>
            </div>
            {/* <div className="row">
                <div className="col-12 col-md-6 product__head">
                    <h1 className="product__title">Mikrotik HAP 3</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti exercitationem aut, magni ratione similique eum neque esse aperiam, magnam amet nihil tempore ipsam iste sint facere eveniet sed libero itaque?</p>
                    <div class="btn__main--container">
                        <div class="main-btn--orange">
                            <span>Commencer </span>
                            <svg>
                                <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                                <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 product__img">
                    <img src={ProductImgMain} alt="" />
                </div>
            </div> */}
         
         {/* <div className="row">
            <div className="col-4 col-lg-3 product__img--2">
            <img src={ProductImgMain} alt="" />
            </div>
            <div className="col-8 col-md-6 col-lg- product__img--3">
            <img src={ProductImgMain} alt="" />
            </div>
            <div className="col-12 col-lg-3 product__caract">
            <h4>Caracteristique</h4>
                <p> <span>Model : </span> </p>
                <p> <span>Ram :</span> </p>
                <p> <span>SSD :</span> </p>
                <p> <span> Processeur : </span> </p>
                <h4>Description</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum excepturi eos eligendi eveniet, commodi deleniti molestias odit nemo at vero quisquam cum ad cupiditate, suscipit, quae sequi asperiores eum.</p>
            </div>
         </div> */}

        </div>
    </section>
  )
}

export default Single