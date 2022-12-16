import React from 'react'

const Signup = () => {
  return (
    <div>
      welcome to the signup page
      <div className='signup-container login-container'>
        <div className='image-signup-container'>
          <div className='image-container'>
            <img
              src='https://images.pexels.com/photos/1192057/pexels-photo-1192057.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='developer'
            />
          </div>
          <div className='overlay-div'></div>
          <div className='image-container-content'>
            <h2>One of us?</h2>
            <p>Sign in if you already has an account. We've missed you!</p>
            <button>Login</button>
          </div>
        </div>
        <div className='login-form-container'>
          <h2>Time to feel at home</h2>
          <form className='login-form'>
            <div className='form-input-group'>
              <label htmlFor='fname'>First Name</label>
              <input
                className='form-control'
                type='text'
                name='fname'
                id='fname'
              />
            </div>
            <div className='form-input-group'>
              <label htmlFor='lname'>Last Name</label>
              <input
                className='form-control'
                type='text'
                name='lname'
                id='lname'
              />
            </div>
            <div className='form-input-group'>
              <label htmlFor='email'>email</label>
              <input
                className='form-control'
                type='email'
                name='email'
                id='email'
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
      </div>
    </div>
  )
}

export default Signup
