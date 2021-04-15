import Client from './'

export const __SignUp = async (authForm) => {
  try {
    const res = await Client.post('/auth/register')
    return res.data
  } catch (error) {
    throw error
  }
}

export const __SignIn = async (authForm) => {
  try {
    const res = await Client.post('/auth/login')
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __CheckSession = async () => {
  try {
    const res = await Client.get('/auth/login')
  } catch (error) {
    throw error
  }
}
