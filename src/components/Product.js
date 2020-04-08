import React from 'react'

function Product(props) {
  return (
    <div>
      <h1>{props.product.name}</h1>
      <p>${props.product.price} - {props.product.description}</p>
      <hr/>
    </div>
  )
}

export default Product