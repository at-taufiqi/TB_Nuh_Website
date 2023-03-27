

import React from 'react'
import ProductCard from './ProductCard'

const Productlist = ({data}) => {
  return (
    <>
    {
        data?.map((item, index) =>(
            <ProductCard item={item} key={index} />
        ))
    }   
    </>
  )
}

export default Productlist