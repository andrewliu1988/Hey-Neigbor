// import Client from './'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

export const __AddressToCoordinates = async (formData) => {
  try {
    const res = await axios.get(
      `https://api.geocod.io/v1.6/geocode?q=${formData}&api_key=${API_KEY}`
    )
    return res.data.results[0]
  } catch (error) {
    throw error
  }
}
