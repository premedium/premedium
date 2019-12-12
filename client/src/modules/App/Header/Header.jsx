import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { withRouter } from "react-router";
import './Header.scss';
import logo from '../../../assets/images/logo.svg';

const Header = () => {
    let location = useLocation();
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
              <Link className="header__sign-up" to={{ pathname: '/signup', state: { background: location } }}>sign up</Link>
            </div>
          </div>
        </div>
      </header>
    )};


export default withRouter(Header);
