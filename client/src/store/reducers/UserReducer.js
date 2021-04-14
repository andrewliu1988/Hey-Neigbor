import { USER_BUSINESSES_AND_EVENTS } from '../types'

const iState = {
  userBAndE: []
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case USER_BUSINESSES_AND_EVENTS:
      return { ...state, userBAndE: action.payload }
    default:
      return { ...state }
  }
}

export default UserReducer
