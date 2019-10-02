import phoneNumber from './phoneNumber';
import {
  requiredField,
  phoneMin,
  phoneMax,
  phoneNotValid
} from '../../../constants/validationTips';

describe('Global check phoneNumber validation method\n', () => {
  describe('Checking phoneNumber-method server validation\n', () => {
    const data = [
      {
        have: '0000000',
        wait: true
      },
      {
        have: '3802545',
        wait: true
      }
    ];

    data.forEach((item) => {
      const { have, wait } = item;

      test(`Call method phoneNumber on ${have} must be return ${wait}\n`, () => {
        expect(phoneNumber(have)).toEqual(wait);
      });
    });
  });

  describe('Checking exception in method phoneNumber\n', () => {
    const errorData = [
      {
        have: '',
        wait: requiredField
      },
      {
        have: '1',
        wait: phoneMin
      },
      {
        have: 'testtesttesttesttestteststesttesttesttesttesttests',
        wait: phoneMax
      },
      {
        have: 'dgsdgsdgdgsdgs',
        wait: phoneNotValid
      }
    ];

    errorData.forEach((item) => {
      const { have, wait } = item;

      function firstNameMock(): void {
        phoneNumber(have);
      }

      test(`Calling method with ${have} throw error with message\n`, () => {
        expect(firstNameMock).toThrow(wait);
      });
    });
  });
});
