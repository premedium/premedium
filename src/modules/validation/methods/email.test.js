import email from './email';
import {
  requiredField,
  emailMin,
  emailMax,
  emailNotValid
} from '../../../constants/validationTips';

describe('Global check email validation method', () => {
  describe('Checking email-method server validation', () => {
    const data = [
      {
        have: 'test@test.test',
        wait: true
      },
      {
        have: 'te@i.tr',
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

      test(`Call method email on ${have} must be return ${wait}`, () => {
        expect(email(have)).toEqual(wait);
      });
    });
  });

  describe('Checking exception in method', () => {
    const errorData = [
      {
        have: '',
        wait: requiredField
      },
      {
        have: '1',
        wait: emailMin
      },
      {
        have: 'testtesttesttesttestteststesttesttesttesttesttests',
        wait: emailMax
      },
      {
        have: 'testte',
        wait: emailNotValid
      }
    ];

    errorData.forEach((item) => {
      const { have, wait } = item;

      function emailMock() {
        email(have);
      }

      test(`Calling method with ${have} throw error with message`, () => {
        expect(emailMock).toThrow(wait);
      });
    });
  });
});
