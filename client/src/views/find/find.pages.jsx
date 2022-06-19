import React from 'react'
import './find.styles.css'

const Find = () => {
  return (
    <div className='page'>
      <div className='page-title'>Find Nearest Campus Garden</div>
      <div className='find-map'></div>
      <div>
        <div className="capacity-container">
          <div className='page-title'>Pantry Capacity</div>
          <p className="capacity-check">Check your universitys pantry Capacity</p>
          <p className="capacity-date">18 Jun, 2022</p>
          <div class="select">
            <select id="standard-select">
              <option value="Option 1">Stanford University</option>
              <option value="Option 2">University of California</option>
              <option value="Option 3">University of Michigan</option>
              <option value="Option 4">Brown University</option>
              <option value="Option 5">Arizona State University</option>
              <option value="Option length">University of Toronto</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Find