import React from 'react'
import "./Login.css"
import assets from "../../assets/assets"

const Login = () => {

    


  return (
    <div className='login'> 
        <img src={assets.logo_big} alt="Logo" className="logo"/>
        <form className="login-form">
            <h2>Sign Up</h2>
            <input type="text" placeholder='Username' className='form-input' required/>
            <input type="email" placeholder='Email address' className='form-input' required/>
            <input type="password" placeholder='Password' className='form-input' required/>
            <button type="submit">Create account</button>
            <div className='login-term'>
                <input type='checkbox' id='terms'></input>
                <p>Agree to the terms of use & privacy policy</p>
            </div>
            <div className='login-forgot'>
                <p className='login-toggle'>Already have an account? <span>Login</span></p>
            </div>
        </form>
    </div>
  )
}

export default Login