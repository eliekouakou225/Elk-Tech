import React from 'react'
import product1 from './../../Assets/img/product/product1.png'

const Product = () => {
  return (
    <>
          <div className="product" data-cursor-text="Details" data-cursor-size="100px">
            <img src={product1} alt="" className='product__img' />
            <h2 className='product__marque' >Mikrotik Hap ac3</h2>
            <h4 className='product__price'>FCFA • 155.000</h4>
          </div>
    </>
  )
}

export default Product