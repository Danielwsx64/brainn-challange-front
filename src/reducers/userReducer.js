import { INIT_USER } from '../actions/ActionTypes'

const initialState = {
  id: null,
  name: null
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_USER:
      return {
        ...action.data
      }

    default:
      return state;
  }
}
