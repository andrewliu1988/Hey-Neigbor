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
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __DeleteEvent = async (id) => {
  try {
    const res = await Client.delete(`/events/${id}`)
    return res
  } catch (error) {
    throw error
  }
}

export const __DeleteBusiness = async (id) => {
  try {
    const res = await Client.delete(`/businesses/${id}`)
    return res
  } catch (error) {
    throw error
  }
}

export const __UpdateEvent = async (id, formData) => {
  try {
    const res = await Client.put(`/events/${id}`, formData)
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __UpdateBusiness = async (id, formData) => {
  try {
    const res = await Client.put(`/businesses/${id}`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}
