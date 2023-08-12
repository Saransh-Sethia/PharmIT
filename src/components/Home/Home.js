import React, {useState} from 'react';
import products from '../Products';
import './Home.css';

function Home({addToCart}) {

  return (
    <div className="product">
      {products.map((product, id) => {
        return (
          <div key ={product.id}style={{width: "50%" }}>
        <div className="product-item">
          <img src={product.url} width="50%" />
          <p>{product.productName}  |  {product.category}</p>
          <p>${product.price}</p>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
        </div>
        )
      })}

    </div>
  )
}

export default Home