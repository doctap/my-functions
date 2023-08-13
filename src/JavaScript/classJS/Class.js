// === factory function

function range (from, to) {
  const r = Object.create(range.methods);

  r.from = from;
  r.to = to;

  return r;
}

range.methods = {
  includes(x) {
    return this.from <= x && x <= this.to;
  },
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= Math.ceil(this.to); x++) yield x;
  }
}

// const r = range(1, 5);

// console.log(r.includes(1))
// console.log([...r])


// === operator new

function Range (from, to) {
  this.from = from;
  this.to = to;
}

Range.prototype = {
  includes(x) {
    return this.from <= x && x <= this.to;
  },
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= Math.ceil(this.to); x++) yield x;
  }
}

const r = new Range(1, 7);
// console.log(r.includes(7));
// console.log([...r]);

function Range2 (from, to) {
  this.from = from;
  this.to = to;
}

// Range2.prototype = Range.prototype;
// const r2 = new Range2(1, 5);
// console.log(r2 instanceof Range);

// === function for extending classes

class Sirop {
  constructor (r, e) {
    this.r = r;
    this.e = e;
  }
}

function extensionFactory(Main) {
  return class extends Main {
    constructor (q, w) {
      super(1, 2);
      this.q = q;
      this.w = w;
    }
  }
}

// const extendedClass = extensionFactory(Sirop);
// const instanceExtendedSiropClass = new extendedClass(3, 4)

// console.log(instanceExtendedSiropClass.r)
// console.log(instanceExtendedSiropClass.e)
// console.log(instanceExtendedSiropClass.q)
// console.log(instanceExtendedSiropClass.w)

// ===
