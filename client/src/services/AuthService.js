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
    return alert('Your username or password is incorrect')
  }
}
