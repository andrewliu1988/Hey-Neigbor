import Client from './'

export const __GetUserBAndE = async (id) => {
  try {
    const res = await Client.get(`/users/businessevent/${id}`)
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}
