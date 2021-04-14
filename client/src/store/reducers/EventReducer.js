import {
  GET_ALL_EVENT,
  GET_EVENT_DETAILS,
  GET_EVENTS_BY_ZIPCODE,
  UPLOAD_EVENT,
  UPDATE_EVENT
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
    case UPLOAD_EVENT:
      return { ...state, allEvent: [...state.allEvent, action.payload] }
    case GET_EVENTS_BY_ZIPCODE:
      return { ...state, zipcodeEvent: action.payload }
    case UPDATE_EVENT:
      console.log(action.payload)
      return { ...state }
    default:
      return { ...state }
  }
}

export default EventReducer
