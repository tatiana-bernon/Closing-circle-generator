import React, { Component } from 'react'
import { getStarters, getFinishers } from '../api'
import nouns from '../../server/public/data/nouns'

export class Question extends Component {
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
      sentenceFinisher: array[random].finisher,
      nounsList: array[random].nouns,
      noun: array[random]
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
        const nounsList = this.getRandom(nouns)
        const noun = this.getRandom(nounsList.nounsList)
        this.setState({ noun: noun.noun })
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
        <h2>{this.state.starter} {this.state.noun} {this.state.finisher}</h2>
      </div>
    )
  }
}

export default Question
