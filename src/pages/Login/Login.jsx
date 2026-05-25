import React from 'react'
import "./Login.css"
import assets from "../../assets/assets"
import { useState } from 'react'

const Login = () => {

    const [currState, setCurrState] = useState('Sign up')


  return (
    <div className='login'> 
        <img src={assets.logo_big} alt="Logo" className="logo"/>
        <form className="login-form">
            <h2>{currState}</h2>
            {currState === 'Sign up' ? <input type="text" placeholder='Username' className='form-input' required/> : null}
            <input type="email" placeholder='Email address' className='form-input' required/>
            <input type="password" placeholder='Password' className='form-input' required/>
            <button type="submit">{currState === 'Sign up' ? 'Create account' : 'Login'}</button>
            <div className='login-term'>
                <input type='checkbox' id='terms'></input>
                <p>Agree to the terms of use & privacy policy</p>
            </div>
            <div className='login-forgot'>
                {
                    currState === 'Sign up' ? 
                    <p className='login-toggle'>Already have an account? <span onClick={() => setCurrState('Login')}>Login</span></p>
                    :
                    <p className='login-toggle'>Don't have an account? <span onClick={() => setCurrState('Sign up')}>Sign up</span></p>
                }
                
                
            </div>
        </form>
    </div>
  )
}

export default Login