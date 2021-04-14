import {
  USER_BUSINESSES_AND_EVENTS,
  DELETE_BUSINESS,
  DELETE_EVENT
} from '../types'

const iState = {
  userBAndE: []
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case USER_BUSINESSES_AND_EVENTS:
      return { ...state, userBAndE: action.payload }
    case DELETE_BUSINESS:
      return { ...state }
    case DELETE_EVENT:
      return { ...state }
    default:
      return { ...state }
  }
}

export default UserReducer
