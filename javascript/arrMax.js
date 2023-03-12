
/* 数组的最大值和最小值 */
const array = [2, 4, 9, 2, 8, 7]

// 1. apply
function arrMax_apply(array) {
  return Math.max.apply(null, array);
}

// 2. reduce
function arrMax_reduce(array) {
  return array.reduce((a, b) => Math.max(a, b), -Infinity);
}

// 3. ...展开操作符
function arrMax(array) {
  return Math.max(...array);
}

console.log(arrMax(array), arrMax_reduce(array), arrMax_apply(array));