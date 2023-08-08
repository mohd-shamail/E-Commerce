import React, {useState} from 'react'
import Navbar from './components/Navbar/Navbar';
import Rout from './components/rout';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import productdetail from './components/Product/Productdetail';
import Cart from './components/Cart/Cart';

const App = () => {
  const[cart, setCart] = useState([]);

  const [close, setClose] = useState(false);
   // //product detail
   const [detail, setDetail] = useState([]);
  // //filter product
  const [product, setProduct] = useState(productdetail)
  const searchbtn = (product) => 
  {
    const change = productdetail.filter((x) => 
    {
      return x.Cat === product;
    })
    setProduct(change)
    
  }
  //product detail
  const view = (product) => 
  {
    setDetail([{...product}]);
    setClose(true);
  }

  // add to cart
  const addtocart = (product) => 
  {
    const exsit = cart.find((x) => 
    {
      return x.id === product.id
    })
    if(exsit)
    {
      alert("This Product is already added to cart")
    }
    else
    { 
      setCart([...cart, {...product, qty:1}])
      alert("product is added to cart")
    }
  } 
 
  return (
    <>
    <BrowserRouter>
    <Navbar searchbtn={searchbtn} />
    <Rout product= {product} setProduct={setProduct} 
    detail={detail} view={view}
     close={close} setClose={setClose} 
     cart={cart} setCart={setCart} addtocart={addtocart}
     />
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App