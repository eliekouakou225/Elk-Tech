import React from 'react'

import product1 from './../../Assets/img/product/product1.png'

const Product = () => {
  return (
    <>
          {/* <div className="product">
             <div className="product__header">
              <div className='product--share' ><i class="fa fa-share-alt" aria-hidden="true"></i></div>
              <img src={product1} alt="" />
             </div>
             <div className="product__body">
              <h2>Mikrotik Hap ac3</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quisquam quasi veritatis vondis.</p>
             </div>
             <div className="product__footer">
                <h4>FCFA • 155.000</h4>
               <button className='btn--products'>DETAILS <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                             </div>
          </div> */}
          <div className="product">
            <img src={product1} alt="" className='product__img' />
            <h2 className='product__marque' >Mikrotik Hap ac3</h2>
            <h4 className='product__price'>FCFA • 155.000</h4>
          </div>
    </>
  )
}

export default Product