import { isByteLength, isMobilePhone } from 'validator';

import {
  phoneMax,
  phoneMin,
  requiredField,
  phoneNotValid
} from '../../../constants/validationTips';

const phoneNumber = (value: string): boolean => {
  if (value === '') {
    throw new Error(requiredField);
  } else if (!isByteLength(value, { min: 2 })) {
    throw new Error(phoneMin);
  } else if (!isByteLength(value, { max: 20 })) {
    throw new Error(phoneMax);
  } else if (!isMobilePhone(value)) {
    throw new Error(phoneNotValid);
  }

  return true;
};

export default phoneNumber;
