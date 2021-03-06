import {
  __GetUserBAndE,
  __UploadBusiness,
  __UploadEvent,
  __DeleteBusiness,
  __DeleteEvent,
  __UpdateBusiness,
  __UpdateEvent,
  __GetUserById
} from '../../services/UserService'

import {
  USER_BUSINESSES_AND_EVENTS,
  UPLOAD_BUSINESS,
  UPLOAD_EVENT,
  USER_ID,
  DELETE_BUSINESS,
  DELETE_EVENT,
  UPDATE_FORM_FIELD,
  UPDATE_BUSINESS,
  CONVERTER_INPUT,
  SINGLE_USER
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

export const UploadBusiness = (formData) => async (dispatch) => {
  try {
    const business = await __UploadBusiness(formData)
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

export const UpdateBusiness = (id, formData) => async (dispatch) => {
  try {
    const updateBusiness = await __UpdateBusiness(id, formData)
    dispatch({
      type: UPDATE_BUSINESS,
      payload: updateBusiness
    })
  } catch (error) {
    throw error
  }
}

export const UpdateEvent = (id, formData) => async (dispatch) => {
  try {
    const updateEvent = await __UpdateEvent(id, formData)
    return updateEvent
  } catch (error) {
    throw error
  }
}

export const UpdateFormField = (formName, formValue) => ({
  type: UPDATE_FORM_FIELD,
  payload: { name: formName, value: formValue }
})

export const ConverterInput = (formName, formValue) => ({
  type: CONVERTER_INPUT,
  payload: { name: formName, value: formValue }
})

export const GetUserById = (id) => async (dispatch) => {
  try {
    const userById = await __GetUserById(id)
    dispatch({
      type: SINGLE_USER,
      payload: userById
    })
  } catch (error) {
    throw error
  }
}
