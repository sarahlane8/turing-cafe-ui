const getAllReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(response => console.log(response))

    .catch(err => console.log(err))
}

export { getAllReservations }
