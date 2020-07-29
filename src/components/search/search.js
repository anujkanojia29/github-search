import React from 'react';
import PropTypes from 'prop-types';

import './search.css';

const Search = ( { searchValue, users, searchUsers, setSearchString, clearUsers, loadingUsers }) => {

  const onSubmit = e => {
    e.preventDefault();
    if (searchValue === '') {
      console.log('Please enter something');
    } else {
      loadingUsers();
      searchUsers(searchValue);
    }
  };

  const onChange = e => setSearchString(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={searchValue}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark'
        />
        {users.length > 0 && (
        <button
          className='btn btn-light'
          onClick={() => {
            clearUsers();
          }}
        >
          Clear
        </button>
      )}
      </form>
    </div>
  );
};

Search.propTypes = {
  users: PropTypes.array.isRequired,
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  loadingUsers: PropTypes.func.isRequired,
};

export default Search;
