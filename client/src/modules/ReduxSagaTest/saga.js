import { call, put, takeEvery } from 'redux-saga/effects';

import { REDUX_SAGA_TEST, REDUX_SAGA_TEST_SUCCESS } from '../../constants';

export function* createRequest() {
  console.log('sagas');
  try {
    const response = yield call(fetch, '/testapi', {
      method: 'POST'
    });
    const data = yield call([response, response.json]);
    console.log('response', response);
    yield put({
      type: REDUX_SAGA_TEST_SUCCESS,
      payload: {
        data
      }
    });
  } catch (error) {
    console.log('createRequest error', error);
  }
}

export default function* watchReduxSagaTestRequest() {
  console.log('sagas');
  yield takeEvery(REDUX_SAGA_TEST, createRequest);
}
