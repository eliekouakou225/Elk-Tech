import React from 'react'
import Product from '../Components/Shop/Product'

const Shop = () => { 
  return ( 
   <section className='shop__page mb-5'>
    <div className="container section-title" >
  <h2>master-solution</h2>
  <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div>

<div className="container">
 
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