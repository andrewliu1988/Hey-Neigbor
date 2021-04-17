import {
  GET_ALL_EVENT,
  GET_EVENT_DETAILS,
  GET_EVENTS_BY_ZIPCODE,
  UPLOAD_EVENT,
  UPDATE_EVENT,
  ADDRESS_TO_COORDINATES
} from '../types'

const iState = {
  allEvent: [],
  eventDetails: {},
  zipcodeEvent: [],
  eventCoordinates: {}
}

const EventReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_ALL_EVENT:
      return { ...state, allEvent: action.payload }
    case GET_EVENT_DETAILS:
      return { ...state, eventDetails: action.payload }
    case UPLOAD_EVENT:
      return { ...state, allEvent: [...state.allEvent, action.payload] }
    case GET_EVENTS_BY_ZIPCODE:
      return { ...state, zipcodeEvent: action.payload }
    case UPDATE_EVENT:
      return { ...state }
    case ADDRESS_TO_COORDINATES:
      return { ...state, eventCoordinates: action.payload }
    default:
      return { ...state }
  }
}

export default EventReducer
