import capitalize from '../scripts/01_capitalize'


describe('Tests for capitalize() fn.:', () => {
  describe('simple strings', () => {
    test('string: "capitalize" becomes "Capitalize"', () => {
      expect(capitalize('capitalize')).toMatch('Capitalize');
    });

    test('string: "Capitalize" stays as "Capitalize"', () => {
      expect(capitalize('Capitalize')).toMatch('Capitalize');
    });

    test('word other than capitalize', () => {
      expect(capitalize('another')).toMatch('Another');
    });

    test('a multi-word string', () => {
      expect(capitalize('the quick brown fox')).toMatch('The quick brown fox');
    });

    test('string with punctuation', () => {
      expect(capitalize('this, is a string: with punctuation.')).toMatch('This, is a string: with punctuation.');
    });

    test('an empty string', () => {
      expect(capitalize('')).toMatch('');
    });
  });

  describe('strings with numbers', () => {
    test('string with numbers', () => {
      expect(capitalize('str1ng wi78 123numbers')).toMatch('Str1ng wi78 123numbers');
    });

    test('string starting with a number', () => {
      expect(capitalize('123 Orwell Street')).toMatch('123 Orwell Street');
    });
  });

  describe('other types', () => {
    test('a number type', () => {
      expect(capitalize(123)).toMatch('Error! Input is not a string.');
    });

    test('an object', () => {
      expect(capitalize({ a: "hello"})).toMatch('Error! Input is not a string.');
    });

    test('null value', () => {
      expect(capitalize(null)).toMatch('Error! Input is not a string.');
    });

    test('NaN', () => {
      expect(capitalize(NaN)).toMatch('Error! Input is not a string.');
    });
  });
});
