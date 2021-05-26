import React, { Component } from 'react';
import './App.css';
import { getAllReservations } from '../../apiCalls.js'
import Reservations from '../Reservations/Reservations'



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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} />
        </div>
      </div>
    )
  }

}

export default App;
