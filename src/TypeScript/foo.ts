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
    {name: 'Vasilj', age: 29},
    {name: 'type', age: 44},
    {name: 'nub', age: 30},
  ],
  func: function() {
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


export {};
