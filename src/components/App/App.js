import React, { Component } from 'react';
import './App.css';
import { getAllReservations } from '../../apiCalls.js'


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
        this.setState({reservations: data}, () => console.log(this.state))
      })
    }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>

        </div>
      </div>
    )
  }

}

export default App;
