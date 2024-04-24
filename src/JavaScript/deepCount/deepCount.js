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

console.log(deepCount(data))