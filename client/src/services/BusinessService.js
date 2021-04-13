import Client from './'

export const __GetALlBusiness = () => {
  try {
    const res = await Client.get('/businesses')
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}


export const __GetBusinessDetails = (id) => {
  try {
    const res = await Client.get(`/businesses/${id}`)
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __GetBusinessByZipcode = (zipcode) => {
  try {
    const res = await Client.get(`businesses/${zipcode}`)
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}