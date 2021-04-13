import { GET_ALL_EVENT, GET_EVENT_DETAILS } from '../types'

const iState = {
  allEvent = [],
  eventDetails: {}
}


const EventReducer = (state = iState, action) => {
  switch(action.type) {
    case GET_ALL_EVENT: 
      return { ...state, allEvent: action.payload}
    case GET_EVENT_DETAILS: 
      return {...state, eventDetails: action.payload}
  }
}

export default EventReducer