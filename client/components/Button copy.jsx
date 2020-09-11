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
      sentenceStarter: array[random].starter,
      sentenceFinisher: array[random].finisher
    }
  }

   generate = () => {
     getStarters()
       .then(res => {
         const obj = this.getRandom(res)
         this.setState({
           starter_id: obj.id + 1,
           starter: obj.sentenceStarter
         })

         getFinishers(this.state.starter_id)
           .then(res => {
             const finisher = this.getRandom(res)
             this.setState({
               finisher: finisher.sentenceFinisher
             })
           })
       })
   }

   render () {
     return (
       <div>
         <button onClick={this.generate}>Generate</button>
       </div>
     )
   }
}

export default Button
