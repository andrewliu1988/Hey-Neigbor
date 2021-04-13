import Client from './'

export const __GetALlBusiness = async () => {
  try {
    const res = await Client.get('/businesses')
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __GetBusinessDetails = async (id) => {
  try {
    const res = await Client.get(`/businesses/${id}`)
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __GetBusinessByZipcode = async (zipcode) => {
  try {
    const res = await Client.get(`businesses/${zipcode}`)
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}
