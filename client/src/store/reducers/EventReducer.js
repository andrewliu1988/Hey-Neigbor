import {
  GET_ALL_EVENT,
  GET_EVENT_DETAILS,
  GET_EVENTS_BY_ZIPCODE
} from '../types'

const iState = {
  allEvent: [],
  eventDetails: {},
  zipcodeEvent: []
}

const EventReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_ALL_EVENT:
      return { ...state, allEvent: action.payload }
    case GET_EVENT_DETAILS:
      return { ...state, eventDetails: action.payload }
    case GET_EVENTS_BY_ZIPCODE:
      return { ...state, zipcodeEvent: action.payload }
    default:
      return { ...state }
  }
}

export default EventReducer
