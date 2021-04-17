import {
  __GetALlBusiness,
  __GetBusinessDetails,
  __GetBusinessByZipcode
} from '../../services/BusinessService'

import { __AddressToCoordinates } from '../../services/GeoCodioService'

import {
  GET_ALL_BUSINESS,
  GET_BUSINESSES_BY_ZIPCODE,
  GET_BUSINESS_DETIALS,
  ADDRESS_TO_COORDINATES,
  TOGGLE_BUSINESS_ADDRESS,
  SEARCH
} from '../types'

export const GetAllBusiness = () => async (dispatch) => {
  try {
    const businesses = await __GetALlBusiness()
    dispatch({
      type: GET_ALL_BUSINESS,
      payload: businesses
    })
  } catch (error) {
    throw error
  }
}

export const GetBusinessDetails = (id) => async (dispatch) => {
  try {
    const business = await __GetBusinessDetails(id)
    dispatch({
      type: GET_BUSINESS_DETIALS,
      payload: business
    })
  } catch (error) {
    throw error
  }
}

export const GetBusinessByZipcode = (zipcode) => async (dispatch) => {
  try {
    const bZipcode = await __GetBusinessByZipcode(zipcode)
    dispatch({
      type: GET_BUSINESSES_BY_ZIPCODE,
      payload: bZipcode
    })
  } catch (error) {
    throw error
  }
}

export const AddressToCoordinates = (formData) => async (dispatch) => {
  try {
    const convert = await __AddressToCoordinates(formData)
    dispatch({
      type: ADDRESS_TO_COORDINATES,
      payload: convert
    })
  } catch (error) {
    throw error
  }
}

export const ToggleBusinessAddress = (payload) => ({
  type: TOGGLE_BUSINESS_ADDRESS,
  payload: payload
})

export const BusinessSearchInput = (input) => ({
  type: SEARCH,
  payload: input
})
