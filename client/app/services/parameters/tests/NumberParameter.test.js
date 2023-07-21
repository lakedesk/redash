import { Parameter } from '..';

describe('NumberParameter', () => {
  let param;

  beforeEach(() => {
    param = Parameter.create({ name: 'param', title: 'Param', type: 'number' });
  });

  describe('normalizeValue', () => {
    test('converts Strings', () => {
      const normalizedValue = param.normalizeValue('15');
      expect(normalizedValue).toBe(15);
    });

    test('converts Numbers', () => {
      const normalizedValue = param.normalizeValue(42);
      expect(normalizedValue).toBe(42);
    });
  });
});
