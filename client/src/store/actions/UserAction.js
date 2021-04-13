import { __GetUserBAndE } from '../../services/UserService'

import { USER_BUSINESSES_AND_EVENTS } from '../types'

export const GetUserBAndE = (id) => (dispatch) => {
  try {
    const all = await __GetUserBAndE(id)
    console.log(all)
    dispatch({
      type: USER_BUSINESSES_AND_EVENTS,
      payload: all
    })
  } catch (error) {
    throw error
  }
}
