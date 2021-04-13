import { __GetUserBAndE } from '../../services/UserService'

import { USER_BUSINESSES_AND_EVENTS } from '../types'

export const GetUserBAndE = () => (dispatch) => {
  try {
    const all = await __GetUserBAndE()
    console.log(all)
    dispatch({
      type: USER_BUSINESSES_AND_EVENTS,
      payload: all
    })
  } catch (error) {
    throw error
  }
}
