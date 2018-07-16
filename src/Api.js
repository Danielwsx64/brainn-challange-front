import axios from 'axios'

const api_url = 'http://localhost:4000/api/v1'

const createUser = user_name =>
  axios.post(`${api_url}/users`, { user: { name: user_name } })

const fetchUserRepositories = user_id =>
  axios.post(`${api_url}/users/${user_id}/repositories/fetch`)

const getUserRepositories = user_id =>
  axios.get(`${api_url}/users/${user_id}/repositories`)

export default {
  user: {
    create: createUser,
    repositories: {
      fetch: fetchUserRepositories,
      get: getUserRepositories
    }
  }
}
