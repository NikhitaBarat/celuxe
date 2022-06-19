import React from 'react'
import './nomtach.style.css'
import { NotFoundBg } from '../../assets'

const Nomatch = () => {
  return (
    <div className='no-match-page'>
      <div className="event-bg">
        <img className="host-event-bg" src={NotFoundBg} alt="" />
        <div className="overlay-bg"></div>
        <div className="overlay-bg"></div>
      </div>
      <div className="nf-text">
        <h1>404</h1>
        <p>Either you aren't cool enough to visit this page or it doesn't exist like your social life.</p>
      </div>
    </div>
  )
}

export default Nomatch