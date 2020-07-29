import {combineReducers} from 'redux';
import searchUserReducer from './search-user.reducer';
import userDetailReducer from './user-detail.reducer';
import userReposReducer from './user-repos.reducer';

export default combineReducers({
  searchUsers: searchUserReducer,
  getUser: userDetailReducer,
  userRepos: userReposReducer
})