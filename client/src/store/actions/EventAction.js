import {
  __GetAllEvent,
  __GetEventsByZipcode,
  __GetEventDetails
} from '../../services/EventService'

import {
  GET_ALL_EVENT,
  GET_EVENTS_BY_ZIPCODE,
  GET_EVENT_DETAILS
} from '../types'

export const GetAllEvent = () => async (dispatch) => {
  try {
    const events = await __GetAllEvent()
    console.log(events)
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
    console.log(event)
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
