import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
  this.state = {
    name: '',
    date: '',
    time: '',
    number: ''
  }
}

handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

submitReservation = event => {
  event.preventDefault()
  const {name, date, time, number} = this.state;
  const reservation = {
    name,
    date,
    time,
    number
  }
  this.props.addReservation(reservation)
}

  render() {
    return (
      <form className='form' >
          <input
            type="text"
            name='name'
            value={this.state.name}
            placeholder="Name"
            onChange={event => this.handleChange(event)}
          />

          <input
            type="text"
            name='date'
            value={this.state.date}
            placeholder="Date (mm/dd)"
            onChange={event => this.handleChange(event)}
          />

          <input
            type="text"
            name='time'
            value={this.state.time}
            placeholder="Time"
            onChange={event => this.handleChange(event)}
          />

          <input
            type="number"
            name='number'
            value={this.state.number}
            placeholder="Number of guests"
            onChange={event => this.handleChange(event)}
          />

          <button onclick={(event) => this.submitReservation(event)}>Make Reservation</button>

        </form>
    )

  }


}




export default Form
