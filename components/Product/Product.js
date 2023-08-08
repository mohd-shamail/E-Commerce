import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { BiDollar } from 'react-icons/bi';
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import './product.css'
import productdetail from './Productdetail';


const Product = ({product, setProduct, detail, view, close , setClose, addtocart}) => {

    
    const filtterproduct = (product) =>
    
    {
        const update = productdetail.filter((x) => 
        {
           return x.Cat === product;
        })
        setProduct(update);
    }
    const AllProducts = () => 
    {
        setProduct(productdetail)
    }
  return (
    <>
    { close ?
    <div className='product_detail'>
      <div className='container'>
        <button onClick={ ()=> setClose(false)}><AiOutlineClose/></button>
        {
          detail.map((val)=>{
            return(
              <div className='productbox'>
              <div className='img-box'>
                <img  src={val.Img} alt={val.Img}/>
              </div>
              <div className='detail'>
                <h4>{val.Cat}</h4>
                <h2>{val.Title}</h2>
                <p>A screen that Everyone will love:  wheather your
                   family is streaming or video chatting with friends Tablet AB...</p>
                   <h3><BiDollar/> {val.Price}</h3>
                   <button>Add to Cart</button>
              </div>
              </div>

            )

          })
        }
    
    <div className='productbox'></div>
      </div>
    </div> : null
}

    {/* products gallery starts here */}
    <div className='products'>
    <h2># Products</h2>
    <p>Home .  Products</p>
    <div className='container'>
    <div className='filter'>
    <div className='categories'>
        <h3>Categories</h3>
        <ul>
        <li onClick={() => AllProducts ()}>All Products</li>
                        <li onClick={() => filtterproduct ("Tablet")}>Tablet</li>
                        <li onClick={() => filtterproduct ("Smart Watch")}>Smart Watch</li>
                        <li onClick={() => filtterproduct ("Headphone")}>Headphone</li>
                        <li onClick={() => filtterproduct ("Earbuds")}>Earbuds</li>
                        <li onClick={() => filtterproduct ("Men")}>Men</li>
                        <li onClick={() => filtterproduct ("Women")}>Women</li>
                        <li onClick={() => filtterproduct ("Earphone")}>Earphone</li>
                        <li onClick={() => filtterproduct ("Bluetooth speaker")}>Bluetooth speaker</li>
        </ul>
    </div>
    </div>
    <div className='productbox'>
    <div className='contant'>
        {
            product.map((item)=>{
                return(
                <div className='box' key={item.id}>
                  <div className='img_box'>
                    <img src={item.Img} alt={item.Title}/>
                    <div className='icon'> 
                    <li onClick={() => addtocart (item)}> <AiOutlineShoppingCart/></li>
                    <li onClick={()=>(view (item)) } > <BsEye/></li>
                    <li onClick={()=> addtocart (item)}><AiOutlineHeart/></li>
                    </div>
                  </div>
                  <div className='detail'>
                    <p>{item.Cat}</p>
                    <h3>{item.Title}</h3>
                    <h4><BiDollar/>{item.Price}</h4>
                  </div>
                  </div>
                  )
            })
        }
    </div>
    </div>
    </div>
      
    </div>
    </>
  )
};

export default Product;
