import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import RepoItem from './repo-item';

import './repos.css';

const UserRepos = ({ getUserRepos, username, topCount, loading, repos, error }) => {  
    useEffect(() => {
        getUserRepos(username, topCount);
        // eslint-disable-next-line
      }, []);
      
    if (loading) {
      return <div>Loading....</div>;
    } else if ( error !== ''){
       return <div>{error}</div>
    } else {
        return (
            <div className = 'repos-grid'>
              {repos.map(repo => (
                <RepoItem key = {repo.id} repo = {repo}/>
              ))}
            </div>
          );
    }
};

UserRepos.propTypes = {
  username: PropTypes.string,
  topCount: PropTypes.number,
  users: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string
};


export default UserRepos;