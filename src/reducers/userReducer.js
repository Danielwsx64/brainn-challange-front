import { UPDATE_USER_REPOSITORIES, INIT_USER } from '../actions/ActionTypes'

const initialState = {
  id: null,
  name: null,
  repositories: []
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_USER:
      return {
        ...state,
        ...action.data
      }

    case UPDATE_USER_REPOSITORIES:
      return {
        ...state,
        repositories: action.repositories
      }

    default:
      return state;
  }
}
