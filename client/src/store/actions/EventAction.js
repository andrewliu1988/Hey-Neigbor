import {
  __GetAllEvent,
  __GetEventsByZipcode,
  __GetEventDetails
} from '../../services/EventService'

import { __AddressToCoordinates } from '../../services/GeoCodioService'

import {
  GET_ALL_EVENT,
  GET_EVENTS_BY_ZIPCODE,
  GET_EVENT_DETAILS,
  ADDRESS_TO_COORDINATES,
  TOGGLE_EVENT_ADDRESS,
  EVENT_SEARCH
} from '../types'

export const GetAllEvent = () => async (dispatch) => {
  try {
    const events = await __GetAllEvent()
    dispatch({
      type: GET_ALL_EVENT,
      payload: events
    })
  } catch (error) {
    throw error
  }
}

export const GetEventDetails = (id) => async (dispatch) => {
  try {
    const event = await __GetEventDetails(id)
    dispatch({
      type: GET_EVENT_DETAILS,
      payload: event
    })
  } catch (error) {
    throw error
  }
}

export const GetEventsByZipcode = (zipcode) => async (dispatch) => {
  try {
    const eZipcode = await __GetEventsByZipcode(zipcode)
    console.log(eZipcode)
    dispatch({
      type: GET_EVENTS_BY_ZIPCODE,
      payload: eZipcode
    })
  } catch (error) {
    throw error
  }
}

export const AddressToCoordinates = (formData) => async (dispatch) => {
  try {
    const convert = await __AddressToCoordinates(formData)
    console.log(convert)
    dispatch({
      type: ADDRESS_TO_COORDINATES,
      payload: convert
    })
  } catch (error) {
    throw error
  }
}

export const ToggleEventAddress = (payload) => ({
  type: TOGGLE_EVENT_ADDRESS,
  payload: payload
})

export const EventSearchInput = (input) => ({
  type: EVENT_SEARCH,
  payload: input
})
