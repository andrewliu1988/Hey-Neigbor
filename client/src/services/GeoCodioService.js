import Client from './'

const API_KEY = process.env.REACT_APP_GEO_CODIO_TOKEN

export const __AddressToCoordinates = async (formData) => {
  try {
    const res = await Client.get(
      `https://api.geocod.io/v1.6/geocode?q=${formData}&api_key=${API_KEY}`
    )
    console.log(res)
  } catch (error) {
    throw error
  }
}
