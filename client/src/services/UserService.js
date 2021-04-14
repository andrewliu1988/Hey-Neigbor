import Client from './'

export const __GetUserBAndE = async (id) => {
  try {
    const res = await Client.get(`/users/businessevent/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __UploadBusiness = async (formData) => {
  try {
    const res = await Client.post(`/businesses`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __UploadEvent = async (formData) => {
  try {
    const res = await Client.post('/events', formData)
    return res.data
  } catch (error) {
    throw error
  }
}
