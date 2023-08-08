import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import Home from './Home/Home';
import  Product from './Product/Product';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';

const Rout = ({product , setProduct, detail, view, 
  close , setClose,cart, setCart,addtocart}) => {
  return (
    <Routes>
     <Route path='/' element={<Home  detail={detail}
      view={view}
      addtocart={addtocart}
      close={close}
      setClose={setClose}/>} />
     <Route path='/product'element={<Product  product={product} 
     setProduct={setProduct}
      detail={detail}
      view={view}
      close={close}
      setClose={setClose}
      addtocart={addtocart}
      />} />
     <Route path='/cart' element= {<Cart
     cart={cart}
     setCart={setCart}
     addtocart={addtocart}
     />}/>
     <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default Rout;
