import React from 'react';
import { Link } from 'react-router-dom';
import filledShoppingCart from '../icons/filled-shopping-cart.svg';
import PropTypes from 'prop-types';
function Header() {
  return (
    <header>
      <h1 className="header__heading">Hit Parade</h1>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__items"><Link className="nav__link" to="/"><h2 className="header__heading">🔥 Popular songs</h2></Link></li>
          <li className="nav__items">
            <Link className="nav__link" to="/Styles">
              <h2 className="header__heading">💟 Styles</h2>
              </Link>
          </li>
          <li className="nav__items">
            <Link className="nav__link" to="/AddNewSongs">
              <h2 className="header__heading"> 👨‍🦰 Add</h2>
            </Link>
          </li>
          <li className="nav__items">
            <Link className="nav__link" to="/Cart">
              <img src={filledShoppingCart} className="cart"/>
              <h2 className="header__heading">Cart</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </header>

    )
  }

  Header.propTypes = {

  }

  export default Header

