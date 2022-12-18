import React from 'react'
import { useNavigate } from 'react-router-dom'

const HireTalentLogin = () => {
  const navigate = useNavigate()

  const handleSignUpClick = () => {
    navigate('/hire-talent')
  }
  return (
    <>
      <div className='hire-talent-login-container'>
        <div className='hire-talent-login-body'>
          <h2>Welcome!</h2>
          <form action='' className='hire-talent-login-form'>
            <div className='hire-talent-login-form-group'>
              <label htmlFor='email'>Email address*</label>
              <input
                type='email'
                id='email-address'
                name='email'
                placeholder='e.g example@gmail.com'
              />
            </div>
            <div className='hire-talent-login-form-group'>
              <label htmlFor='password'>Password*</label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Enter password'
              />
            </div>
            <div className='hire-talent-login-form-group'>
              <button type='submit'>Sign in</button>
            </div>
          </form>
          <div className='sign-up-now'>
            <p>
              Don't have an account?
              <span onClick={handleSignUpClick}> Sign up now!</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HireTalentLogin
