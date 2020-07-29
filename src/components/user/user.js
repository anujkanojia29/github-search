import React, { Fragment, useEffect } from 'react';
import Repos from '../repos/repos.container';

import './user.css';
import Loader from '../loader/loader';

const User = ({ username, loading, user, error, getUser, loadingUser }) => {
  useEffect(() => {
    loadingUser();
    getUser(username);
    // eslint-disable-next-line
  }, []);

  const topCount = 20;

  const {
    name,
    avatar_url,
    bio,
    email,
    html_url,
    followers,
    public_repos,
  } = user;

  if (loading) return <Loader />;
  
  if (error) return <div className = 'text-danger'>{error}</div>;

  return (
    <Fragment>
      <div className='detail-box'>
        <div className='detail-card'>
          <img src={avatar_url} className='user-img' alt='' />
          <h1>{name}</h1>
          <div className = 'detail-container'>
            <a href={html_url} className='btn'> Github Profile</a>
            <p className='bio'>{bio}</p>
            <div>{email}</div>
            <div className='card text-center'>
              <div className='badge'>Followers: {followers}</div>
              <div className='badge'>Public Repos: {public_repos}</div>
            </div>
          </div>
        </div>
        <div className='repos-card'>
          <h3>Popular repositories</h3>
          <Repos username={username} topCount={topCount} />
        </div>
      </div>


    </Fragment>
  );
};

export default User;
