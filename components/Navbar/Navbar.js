import React, { useState } from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import {BsFillHeartFill} from 'react-icons/bs';
import logo from '../../assets/logo2.png';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = ({searchbtn}) => {
     const[heart, setheart] = useState(<AiOutlineHeart />);
    const [search, setSearch] = useState('');
    const { loginWithRedirect ,logout, user, isAuthenticated } = useAuth0();
  return (
    <>
    <div>
      <div className='free'>
            <div className='icon'>
            <FaTruckMoving /> 
            </div>
            <p>FREE Shipping when shopping upto $1000</p>
    </div>
    <div className='main_header'>
        <div className='container'>
            <div className='logo'>
                <img src={logo} alt='logo'></img>
           </div>
           <div className='search_box'>
                <input type='text' value={search}
                 placeholder='Search Your Product...' 
                 autoComplete='off'
                  onChange={(e) => setSearch(e.target.value)}></input>
                <button onClick={() => searchbtn(search)}>Search</button>
                
                
         </div>
         <div className='icon'>
            {
                isAuthenticated &&
                <div className='account'>
           <div className='user_icon'>
             <AiOutlineUser />
            </div>
             <h3 className='para'>Hello, {user.name}</h3>
            </div>
                
            }
          
            <div className='second_icon'>
            <Link to="/" className='link' onClick={()=> setheart(<BsFillHeartFill/>)}>{heart}</Link>
            <Link to="/cart" className='link'>
            <p className='my_cart'>My Cart</p>
                <div className='cartIcon'>
              <BsCart4 />
                </div>
                </Link>
                </div>
        </div>
    </div>
    </div>
    <div className='header'>
        <div className='container'>
            <div className='nav'>
            <ul>
            <li>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li>
                    <Link to='/product'className='link'>Product</Link>
                </li>
                <li>
                    <Link to='/about'className='link'>About</Link>
                </li>
                <li>
                    <Link to='/contact'className='link'>contact</Link>
                </li>
            </ul>
            </div>
            <div className='auth'>
                {
                    isAuthenticated ?
                    <button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log out <CiLogout/></button>   :
                    <button onClick={()=>loginWithRedirect()}>Log In <CiLogin/></button> 
                }
            </div>
 </div>
    </div>
    </div>
    </>
  );
};

export default Navbar;
