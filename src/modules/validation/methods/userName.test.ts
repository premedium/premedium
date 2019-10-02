import userName from './userName';
import {
  requiredField,
  userNameMin,
  userNameMax
} from '../../../constants/validationTips';

describe('Global check userName validation method', () => {
  describe('Checking userName-method server validation', () => {
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

      test(`Call method userName on ${have} must be return ${wait}`, () => {
        expect(userName(have)).toEqual(wait);
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
        wait: userNameMin
      },
      {
        have: 'testtesttesttesttestteststesttesttesttesttesttests',
        wait: userNameMax
      }
    ];

    errorData.forEach((item) => {
      const { have, wait } = item;

      function firstNameMock(): void {
        userName(have);
      }

      test(`Calling method with ${have} throw error with message`, () => {
        expect(firstNameMock).toThrow(wait);
      });
    });
  });
});
