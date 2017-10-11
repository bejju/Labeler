//action creators

//action handlers

const ACTION_HANDLERS = {
//fn 
}

//reducer
const initialState = 0
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}