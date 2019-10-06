import { isByteLength } from 'validator';

import {
  requiredField,
  passwordMax,
  passwordMin,
  passwordNumbers,
  passwordSpecialChars,
  passwordChars
} from '../../../constants/validationTips';

const password = (value: string): boolean => {
  if (value === '') {
    throw new Error(requiredField);
  } else if (value.match(/\d/g).length < 4) {
    throw new Error(passwordNumbers);
  } else if (value.match(/[!@#$%^&*)(+=._-]/g).length < 1) {
    throw new Error(passwordSpecialChars);
  } else if (!isByteLength(value, { min: 8 })) {
    throw new Error(passwordMin);
  } else if (!isByteLength(value, { max: 30 })) {
    throw new Error(passwordMax);
  } else {
    return true;
  }
};

export default password;
