import { REDUX_SAGA_TEST_SUCCESS, REDUX_SAGA_TEST_FAIL } from '../../constants';

const initialState = {
  data: ''
};

const reduxSagaTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case REDUX_SAGA_TEST_SUCCESS: {
      return { ...state, data: action.payload.data };
    }
    case REDUX_SAGA_TEST_FAIL: {
      return { ...state, data: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reduxSagaTestReducer;
