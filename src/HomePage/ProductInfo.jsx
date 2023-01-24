import React from 'react'
import ProductButton from './ProductButton'

const ProductInfo = ({ image, text }) => {
  return (
    <>
       
       <div className='Product_container'>
        <img src={image} alt="" className='ProductImg' />
        <h2>{text}</h2>
        <ProductButton />
       </div>

    </>
  )
}

export default ProductInfo