import React from 'react'
import { useParams } from 'react-router-dom' 

const Product = () => {
    const {id} = useParams();
  return (
    <div>
      Noi dung cua product {id}
    </div>
  )
}

export default Product
