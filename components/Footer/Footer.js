import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import Logo from '../../assets/logo2.png';
import Payment from '../../assets/payment.png';
import './footer.css'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src={Logo} alt='logo1'></img>
                </div>
                <div className='detail'>
                    <p>We are a team of designers and developers that create high quality WordPress</p>
                    <div className='icon'>
                        <li><RiFacebookFill /></li>
                        <li><AiOutlineInstagram /></li>
                        <li><AiOutlineTwitter /></li>
                        <li><BsYoutube /></li>
                    </div>
                </div>
            </div>
            <div className='account'>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>shipping</li>
                    <li>return</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li className='list'>Terma & Condition</li>
                    </ul>
                    <br/><br/>
                    <div className='right'>
                <img src={Payment} alt='no internet' height='50px' width='400px'/>
            </div>
              
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;