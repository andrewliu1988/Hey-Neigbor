import Client from './'

export const __GetAllEvent = async () => {
  try {
    const res = Client.get('/events')
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __GetEventDetails = async (id) => {
  try {
    const res = Client.get(`/events/${id}`)
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}
