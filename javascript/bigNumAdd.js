
// 实现超过范围的两个大整数相加功能
function bigNumAdd(num1, num2) {
  let result = '',
    carry = false;
  num1 = num1.split('');
  num2 = num2.split('');
  while (num1.length || num2.length || carry) {
    carry += ~~num1.pop() + ~~num2.pop();
    result = carry % 10 + result;
    carry = carry > 9;
  }
  return result;
}