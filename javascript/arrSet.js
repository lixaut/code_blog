
/* 数组去重 */

// 1. 双循环
function uniArr_1(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 2. indexOf - for
function uniArr_2(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 3. indexOf - filter
function uniArr_3(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// 4. object
function uniArr(arr) {
  let newArr = [],
    obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] += 1;
      continue;
    }
    obj[arr[i]] = 1;
  }
  newArr = Object.keys(obj)
  return { newArr, obj }
}

[...new Set(arr)]

Array.from(new Set(arr))
