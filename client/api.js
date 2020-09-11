import request from 'superagent'

const URL = 'http://localhost:3000/api/v1/'

export function getStarters () {
  return request
    .get(URL + 'starters')
    .then(response => response.body)
}

export function getFinishers (id) {
  return request
    .get(URL + 'finishers/' + id)
    .then(response => response.body)
}

export function saveQuestion (question) {
  console.log(question) 
  return request
    .post(URL + 'questions')
    .send(question)
}

export function loadQuestion () { 
  return request
    .get(URL + 'questions/')
    .then(response => response.body)
}
