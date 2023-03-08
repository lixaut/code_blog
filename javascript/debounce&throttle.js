
// 函数防抖实现
function debounce(fn, wait) {
  let timer = null;
  return function() {
    let context = this,
      args = arguments;
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

// 函数的节流
function throttle(fn, delay) {
  let perTime = Date.now();
  return function() {
    let context = this,
      args = arguments,
      nowTime = Date.now();
    if (nowTime - perTime >= delay) {
      perTime = Date.now();
      return fn.apply(context, args);
    }
  };
}