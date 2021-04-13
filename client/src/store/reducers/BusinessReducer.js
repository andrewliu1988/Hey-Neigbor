const iState = {
  allBusiness: [],
  businessDetails: {}
}

const BusinessReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_ALL_BUSINESS:
      return { ...state, allBusiness: action.payload }
    case GET_BUSINESS_DETIALS:
      return { ...state, businessDetails: action.payload }
    default:
      return { ...state }
  }
}

export default BusinessReducer
