import React from 'react'
import * as AiIcons from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'
import '../../styles/hero-section.css'

const HeroSection = () => {
  return (
    <section>
      <div className='hero-sec-container'>
        <div className='overlaying-cont'>
          <div className='overlay-blur-child'>
            <div className='hero-sec-title'>
              <div className='hero-sec-text'>
                <h1 className='hero-sec-page-title'>
                  Nurturing Africa’s Tech Talent
                </h1>
                <p className='hero-sec-text-description'>
                  Through market-aligned skills training, we help learners build
                  new career possibilities with greater confidence and
                  capability.
                </p>
                <div className='hero-sec-page-button'>
                  <a href='/courses'>
                    <button>See available courses</button>
                  </a>
                  <a href='/hire-talent'>
                    <button>Hire Talent</button>
                  </a>
                </div>
              </div>
            </div>
            <div className='sponsors-container'>
              <div className='sponsors'>
                <div className='credits'>
                  <div className='credit'>
                    <div className='credits-icon'>
                      <img
                        src='https://moringaschool.com/wp-content/uploads/2022/10/2022-edtech-50-holoniq.png'
                        alt=''
                      />
                    </div>
                    <div className='credits-text'>
                      <p>
                        Moring listed among the promising EdTech startups from
                        Sub-saharan Africa by HolonIQ
                      </p>
                    </div>
                  </div>
                  <div className='credit'>
                    <div className='credits-icon'>
                      <img
                        src='https://moringaschool.com/wp-content/uploads/2022/01/world-economic-forum-e1641838422364.png'
                        alt=''
                      />
                    </div>
                    <div className='credits-text'>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
                    </div>
                  </div>
                  <div className='credit'>
                    <div className='credits-icon'>
                      <img
                        src='https://moringaschool.com/wp-content/uploads/2022/10/2022-edtech-50-holoniq.png'
                        alt=''
                      />
                    </div>
                    <div className='credits-text'>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Labore laborum
                      </p>
                    </div>
                  </div>
                </div>
                <div className='ratings'>
                  <div className='ratings-text'>
                    <p>95% Approval Rating from Graduates</p>
                  </div>
                  <div className='ratings-icon'>
                    <AiIcons.AiFillStar
                      style={{ fill: 'orange', width: '2rem', height: '2rem' }}
                    />
                    <AiIcons.AiFillStar
                      style={{ fill: 'orange', width: '2rem', height: '2rem' }}
                    />
                    <AiIcons.AiFillStar
                      style={{ fill: 'orange', width: '2rem', height: '2rem' }}
                    />
                    <BsStarHalf
                      style={{ fill: 'orange', width: '2rem', height: '2rem' }}
                    />
                  </div>
                </div>
                <div className='patners'>
                  <h4>Our Patners:</h4>
                  <div className='patners-logos'>
                    <div className='patner'>
                      <img
                        src='https://moringaschool.com/wp-content/uploads/2021/10/safaricom.png'
                        alt='safaricom logo'
                      />
                    </div>

                    <div className='patner'>
                      <img
                        src='https://moringaschool.com/wp-content/uploads/2021/08/dob-equity.png'
                        alt='equity logo'
                      />
                    </div>
                    <div className='patner'>
                      <img
                        src='https://moringaschool.com/wp-content/uploads/2021/08/mcf.png'
                        alt='master card logo'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='hero-section-footer'>
              <h3>
                New Program Alert! A New Full-Stack Software Development Course
                by Moringa and Flatiron School <span>See Details</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
