import { all } from 'redux-saga/effects';
import watchReduxSagaTestRequest from './modules/ReduxSagaTest/saga';

export default function* rootSaga() {
  yield all([watchReduxSagaTestRequest()]);
}
