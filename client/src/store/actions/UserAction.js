import {
  __GetUserBAndE,
  __UploadBusiness,
  __UploadEvent,
  __DeleteBusiness,
  __DeleteEvent
} from '../../services/UserService'

import {
  USER_BUSINESSES_AND_EVENTS,
  CREATE_BUSINESS,
  CREATE_EVENT,
  UPLOAD_BUSINESS,
  UPLOAD_EVENT,
  USER_ID,
  DELETE_BUSINESS,
  DELETE_EVENT
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
  try {
    const event = await __UploadEvent(formData)
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

export const DeleteEvent = (id) => async (dispatch) => {
  try {
    const deleteEvent = await __DeleteEvent(id)
    dispatch({
      type: DELETE_EVENT,
      payload: deleteEvent
    })
  } catch (error) {
    throw error
  }
}

export const DeleteBusiness = (id) => async (dispatch) => {
  try {
    const deleteBusiness = await __DeleteBusiness(id)
    dispatch({
      type: DELETE_BUSINESS,
      payload: deleteBusiness
    })
  } catch (error) {
    throw error
  }
}
