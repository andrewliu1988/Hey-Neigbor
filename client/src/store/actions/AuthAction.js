import { __SignUp } from '../../services/AuthService'

import {
  AUTHENCTICATED,
  AUTH_FORM,
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

export const ToggleCompleteRegister = () => ({
  type: TOGGLE_REGISTER_COMPLETE,
  payload: true
})
