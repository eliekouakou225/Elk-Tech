import React from 'react'
import Product from '../Components/Shop/Product'

const Shop = () => { 
  return ( 
   <section className='shop__page mb-5'>
    <div className='container'>
      
    <div className="section-header">
                        <span>//Boutique</span>
                        <h2>//Boutique</h2>
      <h3>Bienvenu dans notre boutique acheter la quailié.</h3>
                    </div>
      </div>
      <div>
      </div>
<div className="container-fluid">
 
        <div className='row'>
          <div className="col-6 col-md-4 col-lg-3">
            <Product/>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <Product/>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <Product/>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <Product/>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <Product/>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <Product/>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <Product/>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <Product/>
          </div>
          </div>
          </div>

   </section>
  )
}

export default Shop