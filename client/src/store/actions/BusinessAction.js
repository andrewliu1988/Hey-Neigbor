import {
  __GetALlBusiness,
  __GetBusinessDetails,
  __GetBusinessByZipcode
} from '../../services/BusinessService'

import {
  GET_ALL_BUSINESS,
  GET_BUSINESSES_BY_ZIPCODE,
  GET_BUSINESS_DETIALS
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
    console.log(business)
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
    console.log(bZipcode)
    dispatch({
      type: GET_BUSINESSES_BY_ZIPCODE,
      payload: bZipcode
    })
  } catch (error) {
    throw error
  }
}
