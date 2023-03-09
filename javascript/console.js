
// 使用闭包实现每隔1秒打印1，2，3，4
for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  })(i);
}

// 使用 let 块级作用域
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}