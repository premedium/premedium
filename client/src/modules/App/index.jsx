import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Header from './Header';
import Test1 from '../test1/index';
import Test2 from '../test2/index';
import ReduxSagaTest from '../ReduxSagaTest';
import UIComponents from '../UIComponents/index';

import './styles.scss';

const App = () => {
  let location = useLocation();
  console.log('location', location);
  return (
    <div className="App-wrapper">
      <Header/>
      <Switch>
        <Route exact path="/" component={Test1}/>
        <Route path="/Test2" component={Test2}/>
        <Route path="/UIComponents" component={UIComponents}/>
        <Route path="/ReduxSagaTest" component={ReduxSagaTest}/>
      </Switch>
      {/*<Test1 />*/}
      {/*<Test2 />*/}
      {/*<ReduxSagaTest />*/}
      {/*<UIComponents />*/}
    </div>
  )

};

export default hot(App);
