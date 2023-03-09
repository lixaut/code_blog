
// 使用 setTimeout 模拟 setInterval
function mySetInterval(fn, timeout) {
  let timer = {
    flag: true
  };
  function interval() {
    if (timer.flag) {
      fn();
      setTimeout(interval, timeout);
    }
  }
  setTimeout(interval, timeout);
  return timer;
}