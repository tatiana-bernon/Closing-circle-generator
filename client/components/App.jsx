import React from 'react'
import Header from './Header'
import Button from './Button'
import Question from './Question'

const App = () => {
  return (
    <>
      <div className="container has-text-centered pt-6">
        <Header />
        <div className='button is-link is-rounded is-large mt-6'>
          <Button />
        </div>
        <Question />
      </div>
    </>
  )
}

export default App
