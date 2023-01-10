import React from 'react'
import '../../styles/moringa-about.css'
import { imageCard } from './card-content'

const About = () => {
  return (
    <>
      <div className='discover-grow-trans-sec'>
        <section>
          <div className='discover-about'>
            <h2 className='section-title'>
              <span style={{ color: 'rgba(250,81,15, 1)' }}>Discover. </span>
              <span style={{ color: 'darkgreen' }}>Grow. </span>
              <span style={{ color: 'blue' }}>Transform</span>
            </h2>
            <div className='fade-right'>
              <p>
                In Moringa we are transforming the way tech education is done in
                African Markets.
                <strong>
                  All our programs are delivered through a blended learning
                  approach that combines market-aligned courses, a classroom
                  team of talented mentors with the skills and knowledge to
                  deliver growth and results for learners, and an environment
                  that supports student creativity, job market preparation in a
                  fun, open, and transformative learning experience.
                </strong>
                We celebrate our diversity and value strong, professional
                relationships that help our students build their futures with
                greater confidence, capability, and possibility.
              </p>
            </div>
          </div>
          <div className='more-about'>
            <ul>
              {imageCard.map((card, ind) => (
                <li key={ind}>
                  <div className='image-sec'>
                    <img src={card.image} alt='moringa-school-images' />
                  </div>
                  <div
                    className='text-centre-about'
                    style={{ backgroundColor: card.color }}
                  >
                    <h5>{card.title}</h5>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
