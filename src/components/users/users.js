import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './user-item';
import Loader from '../loader/loader';

const Users = ({ loading, users, error }) => {
  
  if (loading) return <Loader />;
  
  if (error) return <div className = 'text-danger'>{error}</div>;
  
  return (
    <div className='user-grid'>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );

};

Users.propTypes = {
  users: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string
};


export default Users;