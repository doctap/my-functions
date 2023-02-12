'use strict'

export function sum(num) {
  if (typeof num !== 'number') return;
  if (num === 1) return 1;
  return num + sum(num - 1);
}