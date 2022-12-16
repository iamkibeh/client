import React from 'react'
import '../../styles/Login.css'

function Login() {
  return (
    <div>
      <h1>Welcome to Login Page</h1>
      <div className='login-container'>
        <div className='login-form-container'>
          <h2>Welcome Back</h2>
          <form className='login-form'>
            <div className='form-input-group'>
              <label htmlFor='username'>Username</label>
              <input
                className='form-control'
                type='text'
                name='username'
                id='username'
              />
            </div>
            <div className='form-input-group'>
              <label htmlFor='password'>Password</label>
              <input
                className='form-control'
                type='password'
                name='password'
                id='password'
              />
            </div>

            <div className='forgot-pass'>
              <p>Forgot password?</p>
            </div>

            <div className='login-button-container'>
              <button className='login-button' type='submit'>
                Sign In
              </button>
              <button className='google-btn'>connect with google</button>
            </div>
          </form>
        </div>
        <div className='image-signup-container'>
          <div className='image-container'>
            <img
              src='https://images.pexels.com/photos/1192057/pexels-photo-1192057.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='developer'
            />
          </div>
          <div className='overlay-div'></div>
          <div className='image-container-content'>
            <h2>New here?</h2>
            <p>Sign up and discover great amount of new opportunities!</p>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
