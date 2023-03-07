
// 实现 instaceof 函数
function myInstanceof(obj, conObj) {
  let proto = Object.getPrototypeOf(obj),
    prototype = conObj.prototype;
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}