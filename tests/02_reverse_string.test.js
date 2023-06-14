import reverseString from '../scripts/02_reverse_string';

describe('reverseString():', () => {
  test('doesn\' throw error', () => {
    expect(() => { reverseString('hello') }).not.toThrow();
  });

  test('throws for non-string input', () => {
    expect(() => { reverseString(123) }).toThrow('Wrong input type!');
  });

  describe('strings', () => {
    test('reverses a word', () => {
      expect(reverseString('racecar')).toMatch('racecar');
    });

    test('reverses non-palindromes', () => {
      expect(reverseString('racecar!')).toMatch('!racecar');
    });

    test ('reverses multiple words', () => {
      expect(reverseString('Hello world')).toMatch('dlrow olleH');
    })

    test('reverses string with numbers & special characters', () => {
      expect(reverseString('1234 abc $#%')).toMatch('%#$ cba 4321');
    });   

    test('works with empty string', () => {
      expect(reverseString('')).toMatch('');
    });
  });
});