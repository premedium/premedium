import { isEmail, isByteLength } from 'validator';

import {
  requiredField,
  emailMax,
  emailMin,
  emailNotValid
} from '../../../constants/validationTips';

const email = (value: string): boolean => {
  if (value === '') {
    throw new Error(requiredField);
  } else if (!isByteLength(value, { min: 6 })) {
    throw new Error(emailMin);
  } else if (!isByteLength(value, { max: 30 })) {
    throw new Error(emailMax);
  } else if (!isEmail(value)) {
    throw new Error(emailNotValid);
  }

  return true;
};

export default email;
