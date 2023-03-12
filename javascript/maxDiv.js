
// 最大公约数
function getMaxCommonDivisor(a, b) {
  if (b === 0) return a;
  return getMaxCommonDivisor(b, a % b);
}

// 最小公倍数
function getMinCommonMultiple(a, b) {
  return a * b / getMaxCommonDivisor(a, b);
}