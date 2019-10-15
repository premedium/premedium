import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <ul>
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
        </div>
      </header>
    );
  }
}

export default Header;
