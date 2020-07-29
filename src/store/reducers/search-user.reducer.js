import { SEARCH_USERS, SEARCH_USERS_ERROR, CLEAR_USERS, LOADING_USERS, SET_SEARCH_STRING } from '../actions/type'

const initialState = {
    searchValue: '',
    users: [],
    loading: false,
    error: ''
}
const searchUserReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case SET_SEARCH_STRING:
        return {
          ...state,
          searchValue: payload
        }
      case SEARCH_USERS:
        return {
          ...state,
          users: payload, 
          loading: false,
          error: '',
        }
      case SEARCH_USERS_ERROR:
          return {
            ...state,
            users: [], 
            loading: false,
            error: payload,
          }
      case LOADING_USERS:
            return {
              ...state,
              loading: true,
            }
      case CLEAR_USERS:
           return initialState;
      default:
        return state
    }
}

export default searchUserReducer;