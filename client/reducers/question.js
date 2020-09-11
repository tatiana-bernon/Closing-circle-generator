const question = (state = [], action) => {
  switch (action.type) {
    case 'GENERATE':
      return []
    default:
      return state
  }
}

export default question
