import { GET_USER_REPOS, GET_USER_REPOS_ERROR, LOADING_USER_REPOS } from '../actions/type'

const initialState = {
    repos: [],
    loading: false,
    error: ''
}

const userReposReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case GET_USER_REPOS:
        return {
          ...state,
          repos: payload, 
          loading: false,
          error: '',
        }
      case GET_USER_REPOS_ERROR:
          return {
            ...state,
            repos: {}, 
            loading: false,
            error: payload,
          }
      case LOADING_USER_REPOS:
            return {
              ...state,
              loading: true,
            }
      default:
        return state
    }
}

export default userReposReducer;