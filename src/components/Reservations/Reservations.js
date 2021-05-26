import React from 'react'

const Reservations = ({ reservations }) => {
  const reservationCards = reservations.map(reservation => {
    return (
      <Card
        key={reservation.id}
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    )
  })
  return (
    {resrvationCards}
  )
}

export default Reservations
