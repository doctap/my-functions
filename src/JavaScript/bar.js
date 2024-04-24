function map (arr, map) {
  return arr.reduce(map, []);
}

function filter (arr, filter) {
  return arr.reduce(filter, []);
}

// console.log(
//   'map',
//   map(
//     [1,2,3,4,5],
//     (acc, el, ind) => {
//       acc[ind] = el + 1

//       return acc
//     }
//   )
// )

// console.log(
//   'filter',
//   filter(
//     [1,2,3,4,5],
//     (acc, el, ind) => {
//       if (el % 2 === 0) acc.push(el)
//       return acc
//     }
//   )
// )

function carry (func, length = func.length) {
  return (...args) => {
    if (args.length < length) {
      return carry(
        (...otherArgs) => func(...args, ...otherArgs),
        length - args.length
      )
    }
    return func(...args);
  }
}

function add (a, b, c) {
  return a + b + c
}

const curriedAdd = carry(add)

console.log(curriedAdd(1)(2)(3))
console.log(curriedAdd(1, 2)(3))
console.log(curriedAdd(1)(2, 3))
console.log(curriedAdd(1, 2, 3))