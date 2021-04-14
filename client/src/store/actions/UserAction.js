import {
  __GetUserBAndE,
  __UploadBusiness,
  __UploadEvent
} from '../../services/UserService'

import {
  USER_BUSINESSES_AND_EVENTS,
  CREATE_BUSINESS,
  CREATE_EVENT,
  UPLOAD_BUSINESS,
  UPLOAD_EVENT,
  USER_ID
} from '../types'

export const GetUserBAndE = (id) => async (dispatch) => {
  try {
    const all = await __GetUserBAndE(id)
    dispatch({
      type: USER_BUSINESSES_AND_EVENTS,
      payload: all
    })
  } catch (error) {
    throw error
  }
}

export const CreateNewBusiness = (formName, formValue) => ({
  type: CREATE_BUSINESS,
  payload: { name: formName, value: formValue }
})

export const CreateNewEvent = (formName, formValue) => ({
  type: CREATE_EVENT,
  payload: { name: formName, value: formValue }
})

export const UploadBusiness = (formData) => async (dispatch) => {
  try {
    const business = await __UploadBusiness(formData)
    console.log(business)
    dispatch({
      type: UPLOAD_BUSINESS,
      payload: business
    })
  } catch (error) {
    throw error
  }
}

export const UploadEvent = (formData) => async (dispatch) => {
  console.log(formData)
  try {
    const event = await __UploadEvent(formData)
    console.log(event)
    dispatch({
      type: UPLOAD_EVENT,
      payload: event
    })
  } catch (error) {
    throw error
  }
}

export const SetUserId = (id) => ({
  type: USER_ID,
  payload: id
})
