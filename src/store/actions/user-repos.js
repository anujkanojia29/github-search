import axios from 'axios';

import { GET_USER_REPOS, GET_USER_REPOS_ERROR, LOADING_USER_REPOS } from './type';
import { getUserReposURL } from '../../helpers/request';


export const getUserRepos = (username, topCount) => async dispatch => {
    loadingUserRepos();
    axios.get(getUserReposURL(username,topCount)).then(response => {
        if (response && response.data) {
            dispatch({ type: GET_USER_REPOS, payload: response.data })
        } else {
            dispatch({ type: GET_USER_REPOS_ERROR, payload: 'No Record Found' })
        }
    })
        .catch(err => {
            dispatch({ type: GET_USER_REPOS_ERROR, payload: err.message })
        })
}

// Set loading to true
export const loadingUserRepos = () => {
    return {
        type: LOADING_USER_REPOS
    };
};
