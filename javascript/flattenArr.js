
let arr = [1, [2, 3], 4, [5, [6, 7], 8], 9];

// 数组扁平化_reduce
function flattenArr(arr) {
  if (!Array.isArray(arr)) return;
  let result = [];
  result = arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? flattenArr(cur) : cur);
  }, []);
  return result;
}

// 数组扁平化_*gen
function flattenArr_gen(arr) {
  function* arrGen(arr) {
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        yield* arrGen(arr[i]);
      }
    } else {
      yield arr;
    }
  }
  return [...arrGen(arr)];
}

// test
// console.log(flattenArr(arr));
console.log(flattenArr_gen(arr));
