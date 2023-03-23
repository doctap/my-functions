// Template string literal type
type Sides = 'top' | 'right' | 'bottom' | 'left';
type PaddingSides = `padding-${Sides}`

type AxisX = 'left' | 'right';
type AxisY = 'bottom' | 'top';

type Corners = `${AxisX}-${AxisY}`;

//============
// Util alias
type A = `${Uppercase<'AbCd'>}`;
type B = `${Lowercase<'AbCd'>}`;
type C = `${Capitalize<'abCd'>}`;
type D = `${Uncapitalize<'AbCd'>}`;

//============
// Symbol
const KEY: unique symbol = Symbol.for('key');
const OTHER_KEY: unique symbol = Symbol.for('key');

// if (KEY === OTHER_KEY) {

// }

function f(key: typeof KEY): typeof KEY {
  return key;
}

// difference between keys
let key: typeof KEY = KEY;
let someKey = KEY;

f(key)

//============
// this context
interface IThis {
  prop: string,
}

function f1(this: IThis) {
  console.log(this.prop[0])
}

function f2(this: void) {
  console.log(this)
}

let y = {
  prop: 'context',
  f1
};

// y.f1() // this.prop[0]

//============
// Index signature
interface ISomeThing {
  [key: string | number]: string
}

let bread: ISomeThing =  {
  crumbs: 'bread-crumbs',
}

bread.kilo = '1';
bread[0] = 'content';

// console.log(bread)

interface ISomeThingElse {
  readonly [key: string | number | `type-${string}` | symbol]: number;
}

let room: ISomeThingElse = {
  bed: 2,
  window: 1
}

room.door;
// room.chair = 4; // error

//============
// declare
type q = {
  qwe: '',
  rty: ''
}

declare const root: q;

//============
// property modifiers (private, public, protected)

class Animal {
  private static a: number = 23;
  protected static c: string = '12';

  // constructor() {
  //   this.c = 'abra-kadabra';
  // }

  public b: boolean = false;


  public boom() {
    return Animal.a;
  }
}

class Bird extends Animal {
  // public w: string;

  constructor() {
    super();
  }

  public fly() {
    return Animal.c;
  }
}

let animal = new Animal();
let bird = new Bird();

// console.log('property modifiers', bird.fly());

//============
// использование переменной перед ее присваиванием (оператор "!")

let value: number;

init();

console.log(value! + value!);

function init() {
  value = 1;
}

//============