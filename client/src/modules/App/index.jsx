import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Header from './Header';
import SignUp from './SignUp';
import Test1 from '../test1/index';
import Test2 from '../test2/index';
import ReduxSagaTest from '../ReduxSagaTest';
import UIComponents from '../UIComponents/index';

import './styles.scss';

const App = () => {
  let location = useLocation();
  console.log('location', location);
  let background = location.state && location.state.background;
  console.log('background', background);
  return (
    <div className="App-wrapper">
      <Header/>
      <Switch location={background || location}>
        <Route exact path="/" component={Test1}/>
        {/*<Route path="/Test2" component={Test2}/>*/}
        <Route path="/UIComponents" component={UIComponents}/>
        <Route path="/ReduxSagaTest" component={ReduxSagaTest}/>
        <Route path="/signup" component={SignUp} />
      </Switch>
      {background && <Route path="/signup" component={SignUp} />}
    </div>
  )

};

export default hot(App);
