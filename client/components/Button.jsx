import React, { Component } from 'react'
import { getStarters, getFinishers } from '../api'

export class Button extends Component {
state = {
  starter_id: null,
  starter: '',
  noun: '',
  finisher: ''
}

  getRandom = (array) => {
    const random = Math.floor(Math.random() * array.length)
    return {
      id: random,
      sentencePart: array[random]
    }
  }

  generate = () => {
    getStarters()
      .then(res => {
        this.getRandom(res)
          .then(obj => {
            this.setState({
              starter_id: obj.id,
              starter: obj.sentencePart
            })
          })
        getFinishers(this.state.starter_id)
          .then(res => {
            this.getRandom(res)
              .then(obj => this.setState({
                finisher: obj.sentencePart
              }))
          })
      })
  }

  render () {
    return (
      <div>
        <button onClick={this.generate}></button>
      </div>
    )
  }
}

export default Button
