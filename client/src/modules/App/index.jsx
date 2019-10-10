import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Test1 from '../test1/index';
import Test2 from '../test2/index';
import ReduxSagaTest from '../ReduxSagaTest';
import UIComponents from '../UIComponents/index';

import './styles.scss';

const App = () => (
  <div className="App-wrapper">
    <Header />
    <Test1 />
    <Test2 />
    <ReduxSagaTest />
    <UIComponents />
  </div>
);

export default hot(App);
