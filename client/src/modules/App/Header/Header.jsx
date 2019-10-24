import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../../assets/images/logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__grid">
            <div className="header__logo">
              <img src={logo} alt="logo"/>
            </div>
            <ul className="header__menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Test2">Test2</Link>
              </li>
              <li>
                <Link to="/UIComponents">UIComponents</Link>
              </li>
              <li>
                <Link to="/ReduxSagaTest">ReduxSagaTest</Link>
              </li>
            </ul>

            <div className="header__sign-btns">
              <Link className="header__sign-in" to="/signin">sign in</Link>
              <Link className="header__sign-up" to="/signup">sign up</Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
