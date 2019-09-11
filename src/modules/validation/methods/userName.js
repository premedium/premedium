import { isByteLength } from 'validator';

import {
  userNameMax,
  userNameMin,
  requiredField
} from '../../../constants/validationTips';

const userName = (value) => {
  if (value === '') {
    throw new Error(requiredField);
  } else if (!isByteLength(value, { min: 2 })) {
    throw new Error(userNameMin);
  } else if (!isByteLength(value, { max: 20 })) {
    throw new Error(userNameMax);
  }

  return true;
};

export default userName;
