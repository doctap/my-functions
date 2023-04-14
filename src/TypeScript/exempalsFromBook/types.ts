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

let bread: ISomeThing = {
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

// console.log(value! + value!);

function init() {
  value = 1;
}

//============

// Signature Assertion

function isStringAsserts(value: any): asserts value {
  if (!value) {
    throw new Error(':)');
  }
}

function isString(value: any): value is string {
  return typeof value === 'string';
}

const testScope = (text: any) => {

  text // type any

  isStringAsserts(text instanceof String);
  isString(typeof text);
  isStringAsserts(isString(text));

  text // type string

  text.toLowerCase();
}

interface IFace {
  eyes: string
  ear: string
}

function isStringAsserts_1(value: any): asserts value is IFace {
  if (typeof value !== 'object') {
    throw new Error(':)')
  }
}

const testScope_1 = (text: any) => {

  text // type any

  isStringAsserts_1(text);

  return text.ear // type IFace

}

// console.log(testScope_1({
//   eyes: 'eyes',
//   ear: 'ear'
// }))

// ===============

// check type output
let o = {
  length: 8,
  bread: 'tyriMaturi',
  horse: {
    one: ['1', 3, () => 0],
    two: false
  }
} as const;

// ==============

class Bird_1 {
  public name: string = '';
  public age?: number;
  public getName(): string {
    return this.name;
  }
}

class Fish_1 {
  public name: string = 'g';
  public er?: boolean;
  public qee?(): string {
    return this.name;
  }
}

let v1: Fish_1 = new Bird_1(); // Ok

if (v1.qee) {
  console.log(v1.qee())
}

// Ковариантность
class Animal_12 {
  public type: string = 'animal';
  public life() { };
}

class Bird_12 extends Animal_12 {
  public name: string = 'Bird';
  public fly() { };
}

class Fish_12 extends Animal_12 {
  public name: string = 'Fish';
  public swim() { };
}

const birdAll: Bird_12[] = [
  new Bird_12()
];

const animalAll: Animal_12[] = birdAll;
animalAll.push(new Fish_12());
// birdAll.push(new Fish_12());

console.log(birdAll);

// ==============


const q = (f: number, s: string) => f;

const w = (f: number) => f;

let v0: typeof q = w;
// let v2: typeof w = q; // Error

// console.log(v0(12, 'ненужный параметр'));

// =======================

// совместимость типов объектов
interface ISomeType {
  name: string
}

let v3 = { name: 'string' };
let v4 = { name: 'string', age: 3 };
let v5 = {};

let v6: ISomeType = { name: '' };
// let v7: ISomeType = { name: '', age: 5}; // Error
// let v8: ISomeType = { }; // Error

let v9: ISomeType = v4; // Ok

v9.name

// ======================

// совместимость типов параметров функций
type T1 = (p1: number, p2?: string) => void;

let f3: T1 = (p3: number) => { };
// let f4: T1 = (p3: number, oi?: boolean) => {}; // Error

type T2 = (p1: number, p2: string) => void;

let f4: T2 = (ind: number) => { return ind };

// =========================

interface IR {
  a: number
  b: string
  c: boolean
}

type TP = Pick<IR, 'a' | 'c'>;

// ==========================

// Условные типы "тернарный оператор"

type conditional_T<T1, T2> = T1 extends T2 ? 'совместим' : 'несовместим';

type Horse = conditional_T<'лошадь', string>;

type Bear = conditional_T<'строка', number>;

// ============================

