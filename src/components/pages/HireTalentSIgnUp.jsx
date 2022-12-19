import React, { useEffect, useState } from 'react'

const HireTalentSIgnUp = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data)
        setIsLoading(false)
      })
  }, [])
  return (
    <div>
      <h2>Create your Client account to browse talent</h2>
      <form action='' className='hire-talent-form-parent'>
        <div className='hire-talent-form-container'>
          <div className='hire-talent-form-field'>
            <label htmlFor='firstname'>First name*</label>
            <input type='text' name='firstname' id='firstname' />
          </div>
          <div className='hire-talent-form-field'>
            <label htmlFor='lastname'>Last name*</label>
            <input type='text' name='lastname' id='lastname' />
          </div>
          <div className='hire-talent-form-field'>
            <label htmlFor='companyEmail'>Work email*</label>
            <input type='email' name='company_email' id='companyEmail' />
          </div>
          <div className='hire-talent-form-field'>
            <label htmlFor='phone'>Phone number*</label>
            <input
              type='text'
              name='phone'
              id='phone'
              placeholder='716100222'
            />
          </div>
          <div className='hire-talent-form-field'>
            <label htmlFor='companyName'>Company's name*</label>
            <input type='text' name='company_name' id='companyName' />
          </div>
          <div className='hire-talent-form-field'>
            <label htmlFor='companyWebsite'>Company's Website*</label>
            <input type='text' name='company_website' id='companyWebsite' />
          </div>
          <div className='hire-talent-form-field'>
            <label htmlFor='country'>Country*</label>
            <select name='country' id='country' placeholder='Select a country'>
              {isLoading
                ? 'Loading'
                : countries.map((c, ind) => (
                    <option key={ind} value={c.name}>
                      {c.name}
                    </option>
                  ))}
              {/* <option value=''>Choose...</option>
                    <option value=''>Choose...</option> */}
            </select>
          </div>
          <div className='hire-talent-form-field'></div>
          <div className='hire-talent-form-field'>
            <label htmlFor='password'>Set password*</label>
            <input type='password' name='password' id='password' />
          </div>
          <div className='hire-talent-form-field'>
            <label htmlFor='password_confirmation'>Confirm password*</label>
            <input
              type='password'
              name='password_confirmation'
              id='password_confirmation'
            />
          </div>
        </div>
        <div className='form-check-cont'>
          <input type='checkbox' id='agree' name='agree' />
          <label htmlFor='agree'>
            I agree to the terms and conditions of Moringa
          </label>
        </div>

        {/* footer */}
        <div className='hire-talent-footer'>
          <div className='hire-navigation-bar '>
            <button type='submit'>Continue</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default HireTalentSIgnUp
