import { REDUX_SAGA_TEST_SUCCESS } from '../../constants';

const initialState = {
  data: ''
};

const reduxSagaTestReducer = (state = initialState, action) => {
  console.log('reduxSagaTestReducer', action);
  switch (action.type) {
    case REDUX_SAGA_TEST_SUCCESS:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
};

export default reduxSagaTestReducer;
