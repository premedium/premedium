import { REDUX_SAGA_TEST } from '../../constants';

const reduxSagaTestAction = () => {
  console.log('reeduxSagaTestAction');
  return {
    type: REDUX_SAGA_TEST
  };
};

export default reduxSagaTestAction;
