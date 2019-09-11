import { combineReducers } from 'redux';
// import test from './reducer_test';
// import imgUpload from './imgUpload';
// import test2 from './reducer_test2';
import reduxSagaTestReducer from './modules/ReduxSagaTest/reducer';

const rootReducer = combineReducers({
  reduxSagaTestReducer
});

export default rootReducer;
