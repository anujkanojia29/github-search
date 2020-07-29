const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

const BASE_URL = `https://api.github.com`;
const GITHUBSECRET = `client_id=${githubClientId}&client_secret=${githubClientSecret}`;


export function searchUserURL(searchValue) {
    return `${BASE_URL}/search/users?q=${searchValue}&${GITHUBSECRET}`;
}

export function userDetailURL(username) {
    return `${BASE_URL}/users/${username}?${GITHUBSECRET}`;
}

export function getUserReposURL(username, topCount = 20) {
    return `${BASE_URL}/users/${username}/repos?per_page=${topCount}&sort=stars&order=desc&${GITHUBSECRET}`;
}
