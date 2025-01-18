
// ====

function task(time: number) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(time);
      }, time);
    });
  }
  const taskList = [task(1000), task(5000), task(3000), new Promise ((resolve, reject) => reject('shit'))];
  // returns promise with results in an array
  function myPromiseAll(taskList: Promise<unknown>[]): Promise<Array<unknown>> {
    const results: Array<unknown> = []
    let promisesCompleted = 0;

    return new Promise((resolve, reject) => {
      taskList.forEach((promise, index) => {
        promise.then((val) => {
          results[index] = val;
          promisesCompleted += 1;
          if (promisesCompleted === taskList.length) {
            resolve(results)
          }
        })
          .catch((error: any) => {
            reject(error)
          })
      })
    });
  }
  
  myPromiseAll(taskList)
    .then(results => {
      console.log("got results", results)
    })
    .catch(console.error)



// async function myPromiseAll (arr: Promise<unknown>[]): Promise<Array<unknown>> {
//     const ret = []
//     let error

//     arr.forEach(promise1 => {
//         promise1
//         .then(res => ret.push(res))
//         .catch(er => error = er)
//     })

//     return await new Promise((resolve, reject) => {

//     })
// }

// =====
  
// const MyComponent = (props) => {...}

// const withLogProps = (WrappedComponent) => {
//     return (props) => { // ??
//         const func = (props) => {
//             console.log(props)
//         }

//         return <WrappedComponent onMounted={func} />
//     }
// }

// const WithLogger = withLogProps(MyComponent)
