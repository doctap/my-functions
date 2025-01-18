function findSubString (string) {

  for (let i = 0; i < string.length; i++) {
    const subStr1 = string[i]

    for (let j = 0; j < string.length; j++) {
      const subStr2 = string[j]

      if (subStr1 === subStr2 && i === j) {
        continue
      }

      if (subStr1 === subStr2) {
        return i
      }
    }
  }

  return -1
}

console.log(findSubString('qwerty')) // -1
console.log(findSubString('qwertyr')) // 3
console.log(findSubString('qwertwy')) // 1
console.log(findSubString('ffipd')) //