import { CREATE_BUSINESS, CREATE_EVENT, USER_ID } from '../types'

const iState = {
  user_id: '',
  name: '',
  address: '',
  description: '',
  date: '',
  zipcode: '',
  website: '',
  longitude: '',
  langitude: '',
  attendees: ''
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      return { ...state, [action.payload.name]: action.payload.value }
    case CREATE_BUSINESS:
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
        langitude: '',
        attendees: ''
      }
    default:
      return { ...state }
  }
}

export default UserReducer
