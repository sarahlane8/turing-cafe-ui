import React, { Component } from 'react';
import './App.css';
import { getAllReservations, postReservation, deleteReservation } from '../../apiCalls.js'
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'



class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
     getAllReservations()
      .then(data => {
        this.setState({reservations: data})
      })
    }

    addReservation = reservation => {
      const { name, date, time, number } = reservation;
      this.setState({
        reservations: [...this.state.reservations, reservation]
      })
      postReservation({name, date, time, number})
    }

    deleteMadeReservation = reservationId => {
      const filteredReservations = this.state.reservations.filter(reservation => {
        return reservation.id !== reservationId
      })
      this.setState({reservations: filteredReservations})
      deleteReservation(reservationId)
    }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} deleteMadeReservation={this.deleteMadeReservation} />
        </div>
      </div>
    )
  }

}

export default App;
