import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

import './navbar.css';

const Navbar = ({ icon, title }) => {
  const history = useHistory();
  return (
    <nav className='navbar bg-primary'>
      <h1 className = 'home-navigator' onClick = {() => history.push('/')}>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Search',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
