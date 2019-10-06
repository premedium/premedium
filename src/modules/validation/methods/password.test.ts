import password from './password';
import {
  requiredField,
  passwordMax,
  passwordMin,
  passwordNumbers,
  passwordSpecialChars,
  passwordChars
} from '../../../constants/validationTips';

describe('Checking function password', () => {
  describe('Checking "good" cases', () => {
    const data = [
      {
        have: 'pass1234!',
        wait: true
      },
      {
        have: '#234qwe1r',
        wait: true
      },
      {
        have: '123&te5r',
        wait: true
      },
      {
        have: '0res23!3',
        wait: true
      },
      {
        have: '32щшг123%',
        wait: true
      },
      {
        have: '34щвш2312?',
        wait: true
      }
    ];

    data.forEach((item) => {
      const { have, wait } = item;

      test(`Password '${have} must be correct'`, () => {
        expect(password(have)).toEqual(wait);
      });
    });
  });

  describe('Checking "bad" tests', () => {
    const data = [
      {
        have: '',
        wait: requiredField
      },
      {
        have: '123',
        wait: passwordMin
      },
      {
        have: '12345678901234567890123456789012345',
        wait: passwordMax
      },
      {
        have: 'er1234123',
        wait: passwordChars
      },
      {
        have: 'qwertyqwe',
        wait: passwordNumbers
      },
      {
        have: '1qwertyqwe',
        wait: passwordNumbers
      },
      {
        have: '12qwertyqwe',
        wait: passwordNumbers
      },
      {
        have: 'qwert1234',
        wait: passwordSpecialChars
      }
    ];

    data.forEach((item) => {
      const { have, wait } = item;

      function mock(): void {
        password(have);
      }

      test(`Password ${have} must be raise to error`, () => {
        expect(mock).toThrow(wait);
      });
    });
  });
});
