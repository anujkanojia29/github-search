import { GET_USER_DETAIL, GET_USER_DETAIL_ERROR, LOADING_USER_DETAIL } from '../actions/type'

const initialState = {
    user: {},
    loading: false,
    error: ''
}

const userDetailReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case GET_USER_DETAIL:
        return {
          ...state,
          user: payload, 
          loading: false,
          error: '',
        }
      case GET_USER_DETAIL_ERROR:
          return {
            ...state,
            user: {}, 
            loading: false,
            error: payload,
          }
      case LOADING_USER_DETAIL:
            return {
              ...state,
              loading: true,
            }
      default:
        return state
    }
}

export default userDetailReducer;