import React, {useState, useEffect} from 'react';
import './Cart.css'

function CartList({cart}) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  },[cart]);
  
  return (
    <div className="cart">
            {CART?.map((cartItem, cartIndex) => {
        return (
          <div key ={cartIndex}style={{width: '50%'}}>
        <div className="cart-item">
          <img src={cartItem.url} width="50%" />
          <p>{cartItem.productName}  |  {cartItem.category}</p>
          <button onClick={()=>{const _CART = CART.map((item, index) => {
    return cartIndex === index ? {...item, quantity: item.quantity + 1} : index
    });
    setCART(_CART)
          }}>+</button>
          <h5>{cartItem.quantity}</h5>
          <button onClick={() => {
            const _CART = CART.map((item, index) => {
    return cartIndex === index ? {...item, quantity: item.quantity - 1} : index
    })
    setCART(_CART);
          }
        }
          >
            -
          </button>
          <p>$ {cartItem.price * cartItem.quantity}</p>
        </div>
        </div>
        )
      })}

      <h4 className="heading-4"> Total:  $
        {
          CART.map(item => item.price * item.quantity).reduce((total, value) => total + value,0)
        }
      </h4>
    </div>
  )
}

export default CartList