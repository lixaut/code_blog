
// 数组扁平化
function flattenArr(arr) {
  if (!Array.isArray(arr)) return;
  let result = [];
  result = arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? flattenArr(cur) : cur);
  }, []);
  return result;
}