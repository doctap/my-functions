/**
 *
 * @param {any[]} arr array for sort
 * @returns sorted arr
 */
function qSort (arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivot = arr.shift();

    let less = arr.filter(it => it <= pivot);
    let greater = arr.filter(it => it > pivot);
  
    return [...qSort(less), pivot, ...qSort(greater)];
  }
}

console.log(qSort([8,3,6,8,4,7,8,8,9,5,6]))
