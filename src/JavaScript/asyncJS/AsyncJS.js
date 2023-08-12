
// try catch doesn't work with sync code
// function foo() {
//   setTimeout(function() {
//     baz.bar();
//   }, 100);
// }

// try {
//   foo();
// } catch (error) {
//   console.log('asdasd');
// }

//============================

// Слушатель не перехваченных ошибок
// console.log(Promise.observer);

if  (!Promise.observer) {
  Promise.observer = function (promise, callback) {

    promise.then(
      function fulfilled(msg) {
        Promise.resolve(msg).then(callback)
      },
      function rejected(err) {
        Promise.resolve(err).then(callback)
      }
    )

    return promise;
  }
}

// const pr = new Promise(function(resolve, reject) {
//   resolve('YbeDabyDou');
// });

// pr.then(flintStone => {
//   throw new Error('first then')
// })
// .catch(err => {
//   console.error(err, 'catch111')
// })

// =====================

// Генераторы
function *name(x) {
  let y = x * (yield);
  return y;
}

// let it = name(6);
// let ret = it.next();
// ret = it.next(7)
// console.log(ret.value);

// ================
function closureGena() {

  let num = 0;

  return function *gena() {
     yield num++;
     console.log('do something 1')
     yield num++;
     console.log('do something 2')
     yield num++;
     console.log('do something 3')
     return num;
  }
}

const generator = closureGena();
const iterator = generator();

// let res = iterator.next();
// console.log(res.value, 'first');

// res = iterator.next();
// console.log(res.value, 'second');

// res = iterator.next();
// console.log(res.value, 'third');

// res = iterator.next();
// console.log(res.value, 'end');

//=====================

function run(gen) {
  var args = [].slice.call(arguments, 1), it;

  it = gen.apply(this, args);

  return Promise.resolve()
    .then(function handleNext(value) {

      var next = it.next(value);
      return (function handleResult(next) {

        if (next.done) {
          return next.value;
        } else {
          return Promise.resolve(next.value)
            .then(
              handleNext,
              function handleError(err) {
                return Promise.resolve(
                  it.throw(err)
                )
                .then(handleResult);
              }
            )
        }
      })(next);
    });
}

// ========================

function *tryGena(from, to) {
  while (from < to) {
    yield from++;
  }
  while (from > 0) {
    yield from--;
  }
  return from;
}

const it = tryGena(1, 10)
console.log([...it])

const foo = [1,2,3,4,5,6]
const fooIterator = foo[Symbol.iterator]()

console.log([...fooIterator])

// =========================
