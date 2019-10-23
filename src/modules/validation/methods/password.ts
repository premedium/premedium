import { isByteLength } from 'validator';

import { quantityChars } from './helpers/regexHelper';
import {
  requiredField,
  passwordMax,
  passwordMin,
  passwordNumbers,
  passwordSpecialChars,
  passwordChars
} from '../../../constants/validationTips';
import {
  passwordMinDigitsRegex,
  passwordSpecialCharsRegex
} from '../../../constants/regexValidation';

const password = (value: string): boolean => {
  if (value === '') {
    throw new Error(requiredField);
  } else if (!isByteLength(value, { min: 8 })) {
    throw new Error(passwordMin);
  } else if (!isByteLength(value, { max: 30 })) {
    throw new Error(passwordMax);
  } else if (quantityChars(passwordMinDigitsRegex, value) < 4) {
    throw new Error(passwordNumbers);
  } else if (quantityChars(passwordSpecialCharsRegex, value) < 1) {
    throw new Error(passwordSpecialChars);
    // } else if (quantityChars(passwordSpecialCharsRegex, value) < 3) {
    //   throw new Error(passwordSpecialChars);
  } else {
    return true;
  }
};

export default password;
