import { INIT_USER } from './ActionTypes'
import Api from '../Api.js'

export function initUser(data) {
  return { type: INIT_USER, data  }

}

export const createUser = user => {
  return dispatch => {
    return Api.user.create(user)
      .then( res => dispatch(initUser(res.data)) )
  }
}
