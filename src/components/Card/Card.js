import React from 'react'
import './Card.css'

const Card = ({ id, name, date, time, number, deleteMadeReservation }) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button className="cancel-btn" onClick={ () => deleteMadeReservation(id)}>Cancel</button>
    </div>
  )
}


export default Card
