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
    default:
      return { ...state }
  }
}

export default UserReducer
