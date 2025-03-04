const getAllReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .catch(err => console.log(err))
}

const postReservation = reservation => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    body: JSON.stringify(reservation),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .catch(err => console.log(err))
}

const deleteReservation = reservationId => {
  return fetch(`http://localhost:3001/api/v1/reservations/${reservationId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .catch(err => console.log(err))
}
export { getAllReservations, postReservation, deleteReservation }
