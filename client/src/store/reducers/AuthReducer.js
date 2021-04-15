import { AUTHENCTICATED, AUTH_FORM, REGISTER, LOGIN } from '../types'

const iState = {
  username: '',
  password: '',
  email: '',
  zipcode: '',
  authenicated: false,
  current_user: null
}

const AuthReducer = (state = iState, action) => {
  switch (action.type) {
    case AUTH_FORM:
      return { ...state, [aciton.payload.name]: action.payload.value }
    case REGISTER:
      return { ...state }
    case LOGIN:
      return { ...state }
    case AUTHENCTICATED:
      return { ...state, authenicated: !authenicated }
    default:
      return { ...state }
  }
}

export default AuthReducer
