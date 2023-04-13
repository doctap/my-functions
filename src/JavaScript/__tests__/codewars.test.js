import { validParentheses } from '../codewars';


test('validParentheses', () => {
  expect(validParentheses('()')).toBe(true);
  expect(validParentheses('((()))')).toBe(true);
  expect(validParentheses('()()()')).toBe(true);
  expect(validParentheses('(()())()')).toBe(true);
  expect(validParentheses('()(())((()))(())()')).toBe(true);

  expect(validParentheses(')(')).toBe(false);
  expect(validParentheses('()()(')).toBe(false);
  expect(validParentheses('((())')).toBe(false);
  expect(validParentheses('())(()')).toBe(false);
  expect(validParentheses(')()')).toBe(false);
  expect(validParentheses(')')).toBe(false);
})

