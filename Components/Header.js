import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><h2><Link to="/">Popular songs</Link></h2></li>
          <li><h2><Link to="/Styles">Styles</Link></h2></li>
          <li><h2><Link to="/AddNewSongs">Add</Link></h2></li>
          <li><h2><Link to="/Cart">Cart</Link></h2></li>
        </ul>
      </nav>
    </header>

    )
  }

  Header.propTypes = {

  }

  export default Header

