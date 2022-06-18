import React from 'react'
import './pantry.styles.css'

const Pantry = () => {
  return (
    <div className='pantry'>
      <div className="title">Enter your campus Pantry capacity</div>
      <form className='pantry-form'>
        <div className="first">
          <div className='pantry-inp'>
            <label htmlFor="name">Pantry Name</label>
            <input type="text" className='event-inputs' placeholder='Enter pantry name' />
          </div>
          <div className='pantry-inp'>
            <label htmlFor="date">Date</label>
            <input type="date" className="event-inputs" />
          </div>
        </div>
        <div className="second">
          <label htmlFor="uni-name">University Name</label>
          <br /><input type="text" className="event-inputs" placeholder='Enter university name' />
        </div>
        <label htmlFor="add" >Add items</label>
        <div className='third'>
          <div className='item-inp'>
            <input type="text" className="event-inputs" placeholder='Add food items' />
          </div>
          <div className='item-inp'>
            <input type="text" className='event-inputs' placeholder='Quantity' />
          </div>
          <div className='item-inp'>
            <button className='add-button'>Add</button>
          </div>
        </div>
        <button className="submit">Submit </button>
      </form>
    </div>
  )
}

export default Pantry