const pick = <TObject extends {}, K extends string & keyof TObject>(
  obj: TObject, ...keys: K[]
) => {
  return Object.entries(obj)
    .filter(entry => keys.includes(entry[0] as K))
    .reduce((result, [key, value]) => ({ ...result, [key]: value }),
      {} as Pick<TObject, K>);
}

let person = {
  name: 'Peter',
  age: 29,
  phone: '+9835279383762'
}

console.log(pick(person, 'phone'))