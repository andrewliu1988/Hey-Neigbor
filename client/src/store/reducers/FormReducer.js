import { USER_ID, UPDATE_FORM_FIELD, CONVERTER_INPUT } from '../types'

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
  attendees: '',
  location: '',
  image: ''
}

const FormReducer = (state = iState, action) => {
  switch (action.type) {
    case UPDATE_FORM_FIELD:
      return { ...state, [action.payload.name]: action.payload.value }
    case CONVERTER_INPUT:
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
