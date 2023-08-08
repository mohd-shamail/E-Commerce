import React, { useState } from 'react'
import './contact.css'
import { useAuth0 } from "@auth0/auth0-react";


const Contact = () => {
    const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
    const [users, setUser] = useState(
        {
            Name: '', Email: '', Subject: '', Message: ''
        }
    )
    let name, value
    const data = (e) => 
    {
        name = e.target.name;
        value = e.target.value;
        setUser({...users, [name]: value})
    }
  
      
  return (
    <>
    <div className='contact_container'>
        <div className='contant'>
            <h2># contact us</h2>
            <div className='form'>
                <form>
                    <input type='text' name='Name' value={users.Name} placeholder='Enter Your Full Name' required autoComplete='off' onChange={data}></input>
                    <input type='email' name='Email' value={users.Email} placeholder='Enter Your E-mail'  autoComplete='off' onChange={data}></input>
                    <input type='text' name='Subject' value={users.Subject} placeholder='Enter Your Subject'  autoComplete='off' onChange={data}></input>
                    <textarea name='Message' value={users.Message} placeholder='Your Message'  autoComplete='off' onChange={data}></textarea>
                    {
                        isAuthenticated ? 
                        <button type='submit' onClick={console.log('your response is submitted')}>send</button>
                        : <button type='submit' onClick={() => console.log('Feedback is submited') }>
                            Login to Send</button>
                    }
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact