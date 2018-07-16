import { UPDATE_USER_REPOSITORIES, INIT_USER } from './ActionTypes'
import Api from '../Api.js'

export function initUser(data) {
  return { type: INIT_USER, data  }
}

export function updateRepositories(repositories) {
  return { type: UPDATE_USER_REPOSITORIES, repositories  }
}

export const createUser = user => {
  return dispatch => {
    return Api.user.create(user)
      .then( res => dispatch(initUser(res.data)) )
  }
}

export const getUserFromStorage = () => {
  return dispatch => {
    return dispatch(initUser({
      id: localStorage.user_id,
      name: localStorage.user_name
    }))
  }
}

export const getUserRepositories = user_id => {
  return dispatch => {
    return Api.user.repositories.get(user_id)
      .then( res => dispatch(updateRepositories(res.data)) )
  }
}
