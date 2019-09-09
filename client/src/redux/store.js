import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from '../rootSagas';
import rootReducer from '../rootReducers';

const sagaMiddleware = createSagaMiddleware();

const middleWare = [sagaMiddleware];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleWare))
);
sagaMiddleware.run(rootSaga);

export default store;
