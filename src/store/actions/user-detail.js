import axios from 'axios';

import { GET_USER_DETAIL, GET_USER_DETAIL_ERROR, LOADING_USER_DETAIL } from './type';
import { userDetailURL } from '../../helpers/request';


export const getUser = username => async dispatch => {
    loadingUser();
    axios.get(userDetailURL(username)).then(response => {
        if (response && response.data) {
            dispatch({ type: GET_USER_DETAIL, payload: response.data })
        } else {
            dispatch({ type: GET_USER_DETAIL_ERROR, payload: 'No Record Found' })
        }
    })
        .catch(err => {
            dispatch({ type: GET_USER_DETAIL_ERROR, payload: err.message })
        })
}

// Set loading to true
export const loadingUser = () => {
    return {
        type: LOADING_USER_DETAIL
    };
};
