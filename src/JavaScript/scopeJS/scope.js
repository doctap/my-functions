// USE STRICT directive and some pitfalls of JS

function q () {
  'use strict'

  var notExist = 2

  console.log(notExist)
}

// console.log(typeof notAnnounced) // "undefined" :)
// console.log(notAnnounced) // ReferenceError: notAnnounced is not defined

// q();

// 'use strict';
// the use strict directive doesn't work here, it only works in first line of file

// notExist1 = 9;
// console.log(notExist1);

// var e = 'ghgv';

// console.log(e);

// =======================

// Использование блочной области видимости

function name(params) {
  let qw = 'qw';
  {
    let er = 'er';
    console.log(qw)
  }

  console.log(er)
}

// name();

// ===================