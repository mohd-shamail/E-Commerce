import React ,{useState} from 'react'
import Tab_img from './../../assets/slider-img.png'
import Banner from './../../assets/banner-img.png'
import Mobile from './../../assets/earphones_a_2.webp'
import Cat2 from '../../assets/headphone.png';
import Cat3 from '../../assets/earbuds-prod-1.webp';
import Cat4 from '../../assets/watch_1.webp';
import './Home.css';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FiTruck } from 'react-icons/fi';
import { BiDollar } from 'react-icons/bi';
import { CiPercent } from 'react-icons/ci';
import { FaHeadphones } from 'react-icons/fa';
import HomeProduct from './HomeProduct/HomeProduct';
import { BsCart3 } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';



const Home = ({detail, view, close , setClose, addtocart}) => {
const[homeProduct ,setHomeProduct] = useState(HomeProduct)

  return (
    <>
     { close ?
    <div className='product_detail'>
      <div className='container'>
        <button onClick={ ()=> setClose(false)} ><AiOutlineClose/></button>
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
    <div className='top_banner'>
    <div className='container'>
        <div className='detail'>
        <h1>SALES</h1>
        <p className='para'>
             Convallis interdum purus adipiscing dis parturient
            posuere ac a quam a eleifend montes parturient posuere
            curae tempor.</p>
            <Link to='/product'className='link'>Shop Now <HiArrowNarrowRight/></Link>
        </div>
        <div  className='img_box'>
            <img className="banner-img" src={Banner} alt=''/>
        </div>
    </div>
    </div>
    {/* section area  starts  here */}
   
        <div className='product_type'>
     <div className='container'>
        <div className='box'>
            <div className='img_box'>
            <Link to='/product'>  <img src={Mobile} alt=''/></Link>
            </div>
        <div className='detail'>
            <p>23 Products</p>
        </div>
        </div>
        <div className='box'>
            <div className='img_box'>
            <Link to='/product'><img src={Cat3} alt=''/></Link>
            </div>
        <div className='detail'>
            <p>23 Products</p>
        </div>
        </div>
        <div className='box'>
            <div className='img_box'>
            <Link to='/product'><img src={Cat2} alt=''/></Link> 
            </div>
        <div className='detail'>
            <p>23 Products</p>
        </div>
        </div>
        <div className='box'>
            <div className='img_box'>
            <Link to='/product'><img src={Cat4} alt=''/></Link> 
            </div>
        <div className='detail'>
            <p>23 Products</p>
        </div>
        </div>
     </div>
    </div>
    <div className='about'>
        <div className='container'>
            <div className='box'>
                <div className='icon'>
                    <FiTruck/>
                </div>
                <div className='detail'>
                    <h3>Free Shopping</h3>
                    <p>Order above $1000</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <BiDollar/>
                </div>
                <div className='detail'>
                    <h3>Return & Refund </h3>
                    <p>Money back Gaurenty</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <CiPercent/>
                </div>
                <div className='detail'>
                    <h3>Member Discount </h3>
                    <p>On every Order</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <FaHeadphones/>
                </div>
                <div className='detail'>
                    <h3>Customer Support</h3>
                    <p>Everytime Call Support</p>
                </div>
            </div>
        </div>
    </div>
    {/* product page start here */}
    <div className='product'>
        <h2>Top Products</h2>
        <div className='container'>
            {
                homeProduct.map((item)=>{
                  return (<div className='box' key={item.id}>
                  <div className='img_box'>
                    <img src={item.Img} alt='item.title'/>
                    <div className='icon'> 
                    <li onClick={()=> addtocart (item)}> <BsCart3/></li>
                     <li><AiOutlineHeart/></li>
                    <li onClick={()=> view (item) }> <BsEye/></li>
                    </div>
                  </div>
                  <div className='detail'>
                    <p>{item.Cat}</p>
                    <h3>{item.Title}</h3>
                    <h4>$ {item.Price}</h4>
                  </div>
                  </div>)
                })
            }
            </div>
        </div>
        {/* section banner starts here */}
        <div className='banner'>
            <div className='container'>
                <div className='detail'>
            <h4>LATEST TTECHNOLOGY AHEAD</h4>
            <h3>Apple ipad 10.2 12th Gen-2023</h3>
            <p><BiDollar/>987</p>
            <Link to='/product' className='link'>Shop Now <HiArrowNarrowRight/></Link>
        </div>
        <div className='img_box'>
            <img src={Tab_img} alt=''/>
        </div>
        </div>
    </div>
    </>
  )
}

export default Home
