"use strict";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function recurBinarySearch(arr) {
  let low = 0;
  let hight = array.length - 1;

  return function recur(val) {
    const mid = Math.floor((low + hight) / 2);

    if (low > hight) {
      return false
    }

    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] > val) {
      hight = mid - 1;
    } else if (arr[mid] < val) {
      low = mid + 1;
    }

    return recur(val);
  };
}

console.log(recurBinarySearch(array)(10));
