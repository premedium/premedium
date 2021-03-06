import cleaner from './cleaner';

describe('Cleaner must be trim and remove special chars', () => {
  const data = [
    {
      have: '    test   ',
      must: 'test'
    },
    {
      have: 'tset    ',
      must: 'tset'
    },
    {
      have: '<p>Hey</p>',
      must: '&lt;p&gt;Hey&lt;&#x2F;p&gt;'
    }
  ];

  const typeData = [
    {
      have: 54,
      must: '54'
    },
    {
      have: true,
      must: 'true'
    }
  ];

  typeData.forEach((item) => {
    const { have, must } = item;

    test('The function must be return string', () => {
      expect(cleaner(have)).toEqual(must);
    });
  });

  data.forEach((item) => {
    const { have, must } = item;

    test(`A string '${have}' must be ${must} after function`, () => {
      expect(cleaner(have)).toEqual(must);
    });
  });
});
