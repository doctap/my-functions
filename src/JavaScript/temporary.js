'use strict'

function getBestWord(points, words) {
  const pointOfWord = (word) => [...word].reduce((sum, letter) => sum += points[letter.charCodeAt() - 65], 0)


  return words.reduce((acc, word, index) => {
    return acc.points < pointOfWord(word) || acc.points == pointOfWord(word) && acc.length > word.length
      ? { points: pointOfWord(word), index }
      : acc
  }, {
    length: Number.MAX_VALUE,
    points: 0,
    index: -1
  }).index
}

var points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10, 10];
var simpleWords = ["WHO", "IS", "THE", "BEST", "OF", "US"];
var rndmWords = ["NOQ", "TXAY", "S", "OM", "ESFT", "CJUKQ", "QL", "QO", "ASTK", "Y"];
var firstBestWord = ["JGPCWVWFW", "JXHNKBJJG"];

let bla = [
  'IQWYAIBHN', 'IQWYAIBHN',
'CWNXHXPK', 'CWNXHXPK',
'RIQPWTZHP', 'RIQPWTZHP',
'WZDKMZYU', 'WZDKMZYU',
'YCPXBVKYZ', 'YCPXBVKYZ',
'YHVIPDQX', 'YHVIPDQX',
'MYXWXYD', 'MYXWXYD',
'BMWSEHQJZ', 'BMWSEHQJZ',
'XXYQNHP', 'XXYQNHP',
'XZSQZSKVY', 'XZSQZSKVY',
'JMAKSLJIJ', 'JMAKSLJIJ',
'KYCQGXIB', 'KYCQGXIB',
'WFOSEJXV', 'WFOSEJXV',
'HWTWPOHF', 'HWTWPOHF',
'BLHMVKX', 'AJVICVXGE'
]

console.log(getBestWord(points, simpleWords), 0);
console.log(getBestWord(points, rndmWords), 5);
console.log(getBestWord(points, firstBestWord), 0);