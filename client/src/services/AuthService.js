import Client from './'

export const __SignUp = async (authForm) => {
  try {
    const res = await Client.post('/auth/register', authForm)
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __SignIn = async (authForm) => {
  try {
    const res = await Client.post('/auth/login', authForm)
    localStorage.setItem('token', res.data.token)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __CheckSession = async (token) => {
  try {
    const res = await Client.get('/auth/login')
    return res.data
  } catch (error) {
    throw error
  }
}
