import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    stargazers_count,
    language
  } = repo;

  return (

    <div className='repo-card'>
      <h3>
        <a href={html_url}>{name}</a>
      </h3>
      <p className='repo-description'>{description}</p>
      <div className='repo-footer'>
        <div className = 'repo-prop'>
          <i className="fa fa-star repo-icon" aria-hidden="true"></i>{stargazers_count}
        </div>
        {
          language &&
          <div className = 'repo-prop'>
            <i className="fa fa-dot-circle repo-icon" aria-hidden="true"></i>{language}
          </div>
        }
      </div>

    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;