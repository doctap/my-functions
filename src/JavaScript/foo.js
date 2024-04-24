const { addIterableMethodsInArray } = require("iterate_library");

const arr = ['1', '2', '3', '4', '5'];

function arrRevers(array) {
  const result = [];

  for (let index = array.length; index !== 0; index--) {
    const element = array[index - 1];
    result.push(element);
  }

  return result;
}
// +============

const rootNode = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 4, children: [] },
        { value: 5, children: [] }
      ]
    },
    {
      value: 3,
      children: [
        { value: 6, children: [] },
        { value: 7, children: [] }
      ]
    }
  ]
};

function traverseTree(tree) {
  const queue = [tree];

  while (queue.length) {
    const first = queue.shift();

    first.value = first.value + 1;
    console.log(first.value);

    queue.push(...first.children);
  }
}

// traverseTree(rootNode);
// // console.log(JSON.stringify(rootNode, null, ' '))

let a = [1, 2, 3, 4, 5, 6];

function name(array) {
  let f, l;
  for (let i = 0; i < array.length / 2; i++) {
    f = array[i];
    l = array[array.length - i - 1];
    array[i] = l;
    array[array.length - i - 1] = f;
  }
  return array;
}

// console.log(name(a))

// ==============

// debounce FUNCTION

function fetchURL(url) {
  console.log(`Fetching URL ${url}`)
}

function debounce(callBack, delay) {
  let timer = null;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callBack(...args)
    }, delay);
  };
}

const fetching = debounce(fetchURL, 300);

// fetching(1);
// fetching(2);
// fetching(3);
// fetching(4);
// fetching(5);

// ===============
// 'use strict'

function context() {
  console.log(this);
}

const vasy = {
  name: 'Vasilj',
  age: 29,
  someFunc(job, phone) {
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`job is ${job}`);
    console.log(`phone is ${phone}`);
  },
  contextObj_1: context,
}

// obj_1.someFunc();
// obj_1.contextObj_1();

const kamila = {
  name: 'Kamila',
  age: 24
}

// vasy.someFunc.bind(kamila)('FullStack', '8-777-798');
// vasy.someFunc.call(kamila, 'develop', '8-909809-98687');
// vasy.someFunc.apply(kamila, ['SOMEJOB', '65465-6576-1111']);

// ===============================

function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

let counter_1 = makeCounter();
let counter_2 = makeCounter();
// console.log(counter_1()); // 0
// console.log(counter_1()); // 1
// console.log(counter_1()); // 2

// console.log(counter_2())

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

// const result = array
//   .enumerableFilter(x => {
//     console.log(x.rating, 'enumerableFilter');
//     return x.rating > 3;
//   })
//   .enumerableSome(x => {
//     console.log(x.rating, 'enumerableSome');
//     return x.rating > 2;
//   });

// const resultNative = array
//   .filter(x => {
//     console.log(x.rating, 'filter');
//     return x.rating > 3;
//   })
//   .some(x => {
//     console.log(x.rating, 'some');
//     return x.rating > 2;
//   });
