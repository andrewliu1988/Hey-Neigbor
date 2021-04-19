import {
  USER_BUSINESSES_AND_EVENTS,
  DELETE_BUSINESS,
  DELETE_EVENT,
  SINGLE_USER
} from '../types'

const iState = {
  userBAndE: [],
  user: {}
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case USER_BUSINESSES_AND_EVENTS:
      return { ...state, userBAndE: action.payload }
    case DELETE_BUSINESS:
      const businessArr = state.userBAndE.businesses
      const business = businessArr.filter(
        (deleteBusiness, i) => deleteBusiness.id !== action.payload.data.payload
      )
      return {
        ...state,
        userBAndE: { ...state.userBAndE, businesses: business }
      }
    case DELETE_EVENT:
      const eventArr = state.userBAndE.events
      const event = eventArr.filter(
        (deleteEvent, i) => deleteEvent.id !== action.payload.data.payload
      )
      return { ...state, userBAndE: { ...state.userBAndE, events: event } }
    case SINGLE_USER:
      return { ...state, user: action.payload }
    default:
      return { ...state }
  }
}

export default UserReducer
