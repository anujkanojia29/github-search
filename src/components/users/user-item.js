import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import './users.css';

const UserItem = ({ user: { login, avatar_url } }) => {
  const history =  useHistory();
  return (
    <div className='user-card text-center' onClick ={() => history.push(`/user/${login}`)}>
      <img src={avatar_url} alt = {login} 
        className='user-avatar' />
      <h3>{login}</h3>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
