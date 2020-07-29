import axios from 'axios';

import {SEARCH_USERS, SEARCH_USERS_ERROR, CLEAR_USERS, LOADING_USERS, SET_SEARCH_STRING} from './type';
import { searchUserURL } from '../../helpers/request';

export const searchUsers = searchValue => async dispatch => {
  loadingUsers();
  
  axios.get(searchUserURL(searchValue)).then(response => {
        if(response.data &&  response.data.items && response.data.items.length > 0 ) {
           dispatch({type: SEARCH_USERS, payload: response.data.items})
        } else {
            dispatch({type: SEARCH_USERS_ERROR, payload: 'No Record Found'})
        }
    })
    .catch(err => {
        console.log(err);
        dispatch({type: SEARCH_USERS_ERROR, payload: err})
    })
}

// Clear current log
export const clearUsers = () => {
    return {
      type: CLEAR_USERS
    };
  };
  
// Set loading to true
export const loadingUsers = () => {
  return {
    type: LOADING_USERS
  };
};

export const setSearchString = (value) => {
  return {
    type: SET_SEARCH_STRING,
    payload: value
  };
};
  
