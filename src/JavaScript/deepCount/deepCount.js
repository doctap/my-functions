const deepCount = (obj) => {
  const stack = [{source: obj, target: Array.isArray(obj) ? [] : {}}]
  const cloned = stack[0].target

  while (stack.length) {
    const { source, target } = stack.pop()


    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const value = source[key]

        if (typeof value === "object" && typeof value !== null) {
          target[key] = Array.isArray(value) ? [] : {}
          stack.push({ source: value, target: target[key] })
        } else {
          target[key] = value
        }
      }
    }
  }

  return cloned
}

const data = {
  property1: "Some string",
  property2: [1, 2, 3, 4, { propertyArr: "tutu" }],
  property3: [{ propertyArr31: "tutu1" }, { propertyArr32: "tutu2" }],
  proprty4: {
    prop1: 123,
    prop2: {
      prop: "text",
      prop1: {
        arr: [1, 2, 3, 4, 5, 6],
      },
    },
  },
};

// console.log(deepCount(data))

const obj1 = {
  property1: "Some string",
  property2: false,
  property3: [{ propertyArr31: "tutu1" }, { propertyArr32: "tutu2" }],
  property4: 4,
}

const obj2 = {
  property1: "NOT RIGHT",
  property2: false,
  property3: [{ propertyArr31: "tutu1" }, { propertyArr32: "tutu2" }],
  property4: 4,
}

const isEqual = (o1, o2) => {
  const keys1 = Object.keys(o1)
  const keys2 = Object.keys(o2)

  if (keys1.length !== keys2.length) {
    return false
  }

  const isObj = (elem) => typeof elem === 'object'

  for (const key of keys1) {
    if (isObj(keys1[key]) && isObj(keys2[key])) {

    }
  }
}