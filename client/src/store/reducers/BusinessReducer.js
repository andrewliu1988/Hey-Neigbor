import {
  GET_ALL_BUSINESS,
  GET_BUSINESS_DETIALS,
  GET_BUSINESSES_BY_ZIPCODE,
  UPLOAD_BUSINESS,
  UPDATE_BUSINESS
} from '../types'

const iState = {
  allBusiness: [],
  businessDetails: {},
  zipcodeBusiness: []
}

const BusinessReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_ALL_BUSINESS:
      return { ...state, allBusiness: action.payload }
    case GET_BUSINESS_DETIALS:
      return { ...state, businessDetails: action.payload }
    case UPLOAD_BUSINESS:
      return { ...state, allBusiness: [...state.allBusiness, action.payload] }
    case UPDATE_BUSINESS:
      console.log(action.payload)
      return { ...state }
    case GET_BUSINESSES_BY_ZIPCODE:
      return { ...state, zipcodeBusiness: action.payload }
    default:
      return { ...state }
  }
}

export default BusinessReducer
