import { addIterableMethodsInArray } from 'iterate_library';

let obj1 = {
  objName: '1',
  q: '1 level',
  w: {
    we: '2 level',
    wr: {
      wr3: '3 level'
    }
  },
  u: [
    { name: 'Vasilj', age: 29 },
    { name: 'type', age: 44 },
    { name: 'nub', age: 30 },
  ],
  func: function () {
    console.log(this.objName);
  }
}

// let obj2 = {...obj1};

// obj2.objName = '2';


// obj1.func();
// obj2.func();
// console.log(obj2);


const strings = ['a', 'b', 'g', 'y', 'r', 't', 'a', 'r', 't', 'f', 'l', 'h', 's'];

const inputs = ['a', 't', 'r'];

const getInputs = (arr: string[], inp: string[]) => {

  let amount: { [key: string]: number } = {};
  let result: { [key: string]: number } = {};

  for (const s of arr) {
    amount[s] !== undefined ? amount[s]++ : amount[s] = 1
  }

  for (const i of inp) {
    result[i] = amount[i]
  }

  return result;
}

// console.log(getInputs(strings, inputs));

const array = addIterableMethodsInArray([
  {
    rating: 1,
    numbers: [1, 11, 111],
  },
  {
    rating: 2,
    numbers: [2, 22, 222],
  },
  {
    rating: 3,
    numbers: [3, 33, 333],
  },
  {
    rating: 4,
    numbers: [4, 44, 444],
  },
  {
    rating: 5,
    numbers: [5, 55, 555],
  },
]);

const result = array
  .enumerableFilter(x => {
    console.log(x.rating, 'enumerableFilter');
    return x.rating > 3;
  })
  .enumerableSome(x => {
    console.log(x.rating, 'enumerableSome');
    return x.rating > 2;
  });

// const resultNative = array
//   .filter(x => {
//     console.log(x.rating, 'filter');
//     return x.rating > 3;
//   })
//   .some(x => {
//     console.log(x.rating, 'some');
//     return x.rating > 2;
//   });

// ========================

const getRandomString = (strLength: number) => {
  let randomString = '';

  while (strLength > 0) {
    const randomNumber = Math.floor(Math.random() * 26) + 65;
    const randomLetter = String.fromCharCode(randomNumber);

    randomString += randomNumber % 2 === 0
      ? randomLetter.toLowerCase()
      : randomLetter.toUpperCase();
    strLength--;
  }

  return randomString;
}

// =======================

function map<T, R>(arr: T[], func: (arg: T, i: number, arr: T) => R): R[] {
  return []
}



export { };
