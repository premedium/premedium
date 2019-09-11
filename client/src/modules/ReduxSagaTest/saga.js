import { call, put, takeEvery } from 'redux-saga/effects';

import {
  REDUX_SAGA_TEST,
  REDUX_SAGA_TEST_SUCCESS,
  REDUX_SAGA_TEST_FAIL
} from '../../constants';

export function* createRequest() {
  try {
    const response = yield call(fetch, '/testapi', {
      method: 'POST'
    });
    const data = yield call([response, response.json]);
    yield put({
      type: REDUX_SAGA_TEST_SUCCESS,
      payload: {
        data
      }
    });
  } catch (error) {
    yield put({
      type: REDUX_SAGA_TEST_FAIL,
      payload: 'error'
    });
  }
}

export default function* watchReduxSagaTestRequest() {
  yield takeEvery(REDUX_SAGA_TEST, createRequest);
}
