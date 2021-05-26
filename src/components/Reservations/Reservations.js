import React from 'react'
import Card from '../Card/Card'
import './Reservations.css'

const Reservations = ({ reservations, deleteMadeReservation }) => {
  const reservationCards = reservations.map(reservation => {
    return (
      <Card
        key={reservation.id}
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        deleteMadeReservation={deleteMadeReservation}
      />
    )
  })
  return (
    <div className='reservation-grid'>
    {reservationCards}
    </div>
  )
}

export default Reservations
