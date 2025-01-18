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

// function carry (func, length = func.length) {
//   return (...args) => {
//     if (args.length < length) {
//       return carry(
//         (...otherArgs) => func(...args, ...otherArgs),
//         length - args.length
//       )
//     }
//     return func(...args);
//   }
// }

function carry (func) {
  return function carried (...args) {
    if (args.length >= func.length) {
      return func(...args)
    }
    return (...args2) => carried(...args, ...args2)
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


function compactObject(obj) {

  const isArr = Array.isArray(obj)
  const result = isArr ? [] : {}

  if (isArr) {
    obj.filter(elem => {
      // >> ??

      return Boolean(elem)
    })
  } else {
    for (const key in obj) {
      let value
  
      if (obj[key] && typeof obj[key] === 'object') {
        result[key] = compactObject(obj[key])
      } else {
        value = Boolean(obj[key])
  
        if (value) {
          result[key] = obj[key]
        }
      }
    }
  }

  return result;
};

console.log(compactObject([null, 2, true, 0, false, {qw: null, yu: true, kj: false, as: 'saa'}]))
console.log(compactObject({qw: null, yu: true, kj: false, as: 'saa'}))

const rt = (arr) => {
  let count = arr.length;

  while (count) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i+1]) {
        const elem = arr[i];

        arr[i] = arr[i+1];
        arr[i+1] = elem;
      }
    }

    count--;
  }

  return arr;
}

console.log(rt([3, 30, 34, 5, 9, 32, 1, 5, 6, 9, 0, 14, 26]).join(','))
