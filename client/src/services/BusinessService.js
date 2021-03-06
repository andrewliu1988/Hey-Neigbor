import Client from './'

export const __GetALlBusiness = async () => {
  try {
    const res = await Client.get('/businesses')
    return res.data
  } catch (error) {
    throw error
  }
}

export const __GetBusinessDetails = async (id) => {
  try {
    const res = await Client.get(`/businesses/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __GetBusinessByZipcode = async (zipcode) => {
  try {
    const res = await Client.get(`/businesseszipcode/${zipcode}`)
    return res.data
  } catch (error) {
    throw error
  }
}
