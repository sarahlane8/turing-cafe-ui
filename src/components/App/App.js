import React, { Component } from 'react';
import './App.css';
import { getAllReservations } from '../../apiCalls.js'
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
      console.log(reservation)
      this.setState({
        reservations: [...this.state.reservations, reservation]
      })
    }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} />
        </div>
      </div>
    )
  }

}

export default App;
