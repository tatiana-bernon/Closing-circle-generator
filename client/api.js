import request from 'superagent'
import { response } from 'express'

const URL = 'http://localhost:3000/api/v1/'

export function getStarters () {
  return request
    .get(URL)
    .then(response => response.body)
}

export function getFinishers (id) {
  return request
    .get(URL)
    .then(response => response.body)
}
