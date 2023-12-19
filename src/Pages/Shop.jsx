import React from 'react'
import Product from '../Components/Shop/Product'

const Shop = () => { 
  return ( 
   <section className='shop__page'>
    <div className='container'>
      <h1>Boutique</h1>
      <h2>Bienvenu dans notre boutique acheter la quailié.</h2>
      </div>
<div className="container">


        <div className='row'>
          <div className="col-12 col-md-6 col-lg-3">
            <Product/>
          </div>
          </div>
          </div>

   </section>
  )
}

export default Shop