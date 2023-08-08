import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './cart.css'
import { AiOutlineClose } from 'react-icons/ai';

const Cart = ({cart, setCart}) => {
    
      // increace qty
      const incqty = (product) => 
      {
          const exsit = cart.find((x) => 
          {
              return x.id === product.id
          })
          setCart(cart.map((item) => 
          {
              return item.id === product.id ? {...exsit, qty: exsit.qty + 1} : item
          }))
      }
  
      // Dec Qty
      const decqty = (product) => 
      {
          const exsit = cart.find((x) => 
          {
              return x.id === product.id
          })
          setCart(cart.map((item) => 
          {
              return item.id === product.id ? {...exsit, qty: exsit.qty - 1} : item
          }))
      }
      //Remove cart product
      const removeproduct = (product) => 
      {
          const exsit = cart.find((x) => 
          {
              return x.id === product.id
          })
          if(exsit.qty > 0)
          {
              setCart(cart.filter((x) => 
              {
                  return x.id !== product.id
              }))
          }
      }
      // Total price
      const Totalprice = cart.reduce((price, items) => price + items.qty * items.Price, 0)


return(
    <div className='cartcontainer'> 
         { cart.length === 0 && 
            <div className='emptycart'>
            <h2 className='empty'>Cart is Empty</h2>
            <Link to='/product' className='emptycartbtn'>Shop Now</Link>
            </div>
    }
         <div className='contant'>
            {
                cart.map((item)=>{
                    return(
                        <div className='cart_item'>
                            <div className='img_box'>
                                <img src={item.Img} alt='no image'/>
                                </div> 
                                
                            <div className='detail'>
                                <div className='info'>
                                <h4>{item.Cat}</h4>
                                <h3>{item.Title}</h3>
                                <p>Price: ${item.Price}</p>
                                <div className='qty'>
                                    <button className='incqty' onClick={() => incqty(item)}>+</button>
                                    <input type='text' value={item.qty}></input>
                                    <button className='decqty' onClick={() => decqty(item)}>-</button>
                                </div>
                                <h4 className='subtotal'>sub total: ${item.Price * item.qty}</h4>
                                </div>
                                <div className='close'>
                                <button onClick={() => removeproduct(item)}><AiOutlineClose /></button>
                                </div>
                            </div>
                             
                        </div>
                       
                    )

                })
            }
         </div>
         {
            cart.length > 0 &&
            <>
            <h2 className='totalprice'>total: $ {Totalprice}</h2>
            <button className='checkout'>Checkout</button>
            </>
        }
    </div>
)
}
   

export default Cart;