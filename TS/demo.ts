let arr_: number[] = [1, 2, 3];
let arr2: string[] = ['1', '2', '3'];

let arr: (number | string)[] = [1, 2, '3'];
let timerId: number | null = null;
timerId = setTimeout(() => {}, 1000);

/** 函数的类型别名 */
type FnTtype = (a: number, b: number) => number;

/** 对象类型 可选链操作符 */
type PersonType = {
  name: string;
  age: number;
  girlFriends?: string[];
};
let person: PersonType = {
  name: 'li',
  age: 18
};
person.girlFriends && person.girlFriends.concat();
person.girlFriends?.concat();

/** 元组类型 - 限制类型&限制长度 */
let position: [number, number] = [113.123, 80.123];

/** 类型推论 */
let a_28 = 10;
let b: number = 10;
function add(a: number, b: number): number {
  return a + b;
}
function add_(a: number, b: number) {
  return a + b;
}

/** 字面量类型 */
type Direction_ = '上' | '下' | '左' | '右';

/** 枚举类型 */
enum Direction {
  Up = '上',
  Down = '下'
}
Direction.Down;

/** 类型断言 */
const div = document.createElement('div');
const a = document.getElementById('name') as HTMLAnchorElement;
a.href;

/** 范型 */
function getId_<T>(val: T) {
  return val;
}
const res = getId_<number>(1);
const res_ = getId('1');

/** 范型约束 */
interface ILength {
  length: number;
}
function getId<T extends ILength>(val: T) {
  console.log(val.length);
  return val;
}
function getProp<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}

/** 范型接口 */
interface Student<T> {
  id: number;
  name: T;
  hobby: string[];
}
let s1: Student<string> = {
  id: 120,
  name: '2',
  hobby: ['sleep']
};
const arr1: Array<number> = [1, 3, 5];
