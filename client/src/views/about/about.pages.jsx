import React from 'react'
import './about.styles.css'
import { Mid, Profile } from '../../assets'

const About = () => {
  return (
    <div className='about-page'>
      <img src={Profile} className='about-profile' alt="" />
      <div className='white-bg'>
        <div className="white-text">
          <h1>GOALS</h1>
          <p className="goals">
            1. Increase Supplemental Nutrition
            Assistance Program (SNAP) enrollment for eligible students.<br />
            2. Improve the accessibility of affordable, sustainably sourced and nutritious food on
            campus. <br />
            3. Raise awareness of the
            existing campus resources
            and services. <br />
            4. Improving and streamlining current food related programs and evaluating the campus
            food environment.
          </p>
        </div>
        <img src={Mid} className='about-mid' alt="" />
        <div className="mid-container">
          <div className="container-border">
            <h1>HUNGER FREE CAMPUS</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About