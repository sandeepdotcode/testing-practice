export default function reverseString(string) {
  if (typeof string !== 'string') throw new Error('Wrong input type!');
  return string.split('').reverse().join('');
}