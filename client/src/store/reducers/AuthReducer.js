import {
  AUTHENCTICATED,
  AUTH_FORM,
  REGISTER,
  LOGIN,
  TOGGLE_REGISTER_COMPLETE,
  CURRENT_USER
} from '../types'

const iState = {
  username: '',
  password_digest: '',
  email: '',
  zipcode: '',
  authenticated: false,
  current_user: null,
  register_complete: false
}

const AuthReducer = (state = iState, action) => {
  switch (action.type) {
    case AUTH_FORM:
      return { ...state, [action.payload.name]: action.payload.value }
    case REGISTER:
      return { ...state }
    case LOGIN:
      return { ...state, current_user: action.payload }
    case AUTHENCTICATED:
      return { ...state, authenticated: action.payload }
    case TOGGLE_REGISTER_COMPLETE:
      return { ...state, register_complete: action.payload }
    default:
      return { ...state }
  }
}

export default AuthReducer
