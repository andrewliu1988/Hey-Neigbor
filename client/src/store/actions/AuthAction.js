import { __SignUp, __SignIn, __CheckSession } from '../../services/AuthService'

import {
  AUTHENCTICATED,
  AUTH_FORM,
  CURRENT_USER,
  LOGIN,
  REGISTER,
  TOGGLE_REGISTER_COMPLETE
} from '../types'

export const AuthFormField = (formName, formValue) => ({
  type: AUTH_FORM,
  payload: { name: formName, value: formValue }
})

export const SignUp = (authForm) => async (dispatch) => {
  try {
    const register = await __SignUp(authForm)
    console.log(register)
    dispatch({
      type: REGISTER,
      payload: register
    })
  } catch (error) {
    throw error
  }
}

export const ToggleCompleteRegister = (payload) => ({
  type: TOGGLE_REGISTER_COMPLETE,
  payload: payload
})

// export const ToggleAuthenicated = (payload) => ({
//   type: AUTHENCTICATED,
//   payload: payload
// })

export const SetUser = (payload) => ({
  type: CURRENT_USER,
  payload: payload
})

export const SignIn = (authForm) => async (dispatch) => {
  try {
    const signin = await __SignIn(authForm)
    console.log(signin)
    dispatch({
      type: LOGIN,
      payload: signin
    })
    dispatch({
      type: AUTHENCTICATED,
      payload: true
    })
  } catch (error) {
    return alert('Your username or password is incorrect')
  }
}

export const CheckSession = (token) => async (dispatch) => {
  try {
    const check = await __CheckSession(token)
    console.log(check)
    dispatch({
      type: AUTHENCTICATED,
      payload: true
    })
    dispatch({
      type: CURRENT_USER,
      payload: check
    })
  } catch (error) {
    throw error
  }
}
