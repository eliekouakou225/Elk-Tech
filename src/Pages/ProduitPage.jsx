import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom'

import ProductImgMain from './../Assets/img/3.jpg'

import ShareIcon from '../Components/ShareIcon/ShareIcon'

const ProduitPage = () => {
  return (
    <section className='product__page mb-5'>
        <div className="container">
            <Breadcrumb>
                    <Breadcrumb.Item href="#">Boutique</Breadcrumb.Item>
                    <Breadcrumb.Item active>Mikrotik Rb3011</Breadcrumb.Item>
    </Breadcrumb>
            <div className='product__head mb-3'>
                <div className="product__info">
                <h1 className="product__title">Mikrotik HAP 3</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti exercitationem aut, magni ratione similique eum neque esse aperiam, magnam amet nihil tempore ipsam iste sint facere eveniet sed libero itaque?</p>
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
                    <p> - Téléphone de bureau avec jusqu’à 4 comptes SIP</p>
                    <p> - Conférence jusqu’à 5 participants</p>
                    <p> - 6 touches de fonction et écran couleur 2.3″</p>
                    <p> - Ethernet Gigabit à 2 ports PoE</p>
                    <p> - Alimentation PoE “un seul câble”</p>
                    <p> - Qualité sonore HD Full Duplex</p>
                   <p> - Supporte 3cx</p>
                    <button className='buy_btn'> Acheter <i class="fa fa-whatsapp" aria-hidden="true"></i></button>
                </div>
            </div>
            <div>
                <ShareIcon/>
            </div>
        </div>
    </section>
  )
}

export default ProduitPage