import {
  CREATE_EVENT,
  CREATE_BUSINESS,
  USER_ID,
  UPDATE_FORM_FIELD
} from '../types'

const iState = {
  user_id: '',
  name: '',
  address: '',
  description: '',
  date: '',
  zipcode: '',
  website: '',
  longitude: '',
  latitude: '',
  attendees: ''
}

const FormReducer = (state = iState, action) => {
  switch (action.type) {
    case CREATE_BUSINESS:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    case CREATE_EVENT:
      return { ...state, [action.payload.name]: action.payload.value }
    case UPDATE_FORM_FIELD:
      return { ...state, [action.payload.name]: action.payload.value }
    case USER_ID:
      return {
        ...state,
        user_id: action.payload,
        name: '',
        address: '',
        description: '',
        date: '',
        zipcode: '',
        website: '',
        longitude: '',
        latitude: '',
        attendees: ''
      }
    default:
      return { ...state }
  }
}

export default FormReducer
