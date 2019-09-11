import phoneNumber from './phoneNumber';
import {
  requiredField,
  phoneMin,
  phoneMax,
  phoneNotValid
} from '../../../constants/validationTips';

describe('Global check userName validation method', () => {
  describe('Checking userName-method server validation', () => {
    const data = [
      {
        have: '0000000',
        wait: true
      },
      {
        have: '3802545',
        wait: true
      },
      {
        have: 'test@test.test',
        wait: true
      },
      {
        have: 'test@test.test',
        wait: true
      },
      {
        have: 'test@test.test',
        wait: true
      },
      {
        have: 'test@test.test',
        wait: true
      },
      {
        have: 'test@test.test',
        wait: true
      }
    ];

    data.forEach((item) => {
      const { have, wait } = item;

      test(`Call method userName on ${have} must be return ${wait}`, () => {
        expect(phoneNumber(have)).toEqual(wait);
      });
    });
  });

  describe('Checking exception in method userName', () => {
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

      function firstNameMock() {
        phoneNumber(have);
      }

      test(`Calling method with ${have} throw error with message`, () => {
        expect(firstNameMock).toThrow(wait);
      });
    });
  });
});
