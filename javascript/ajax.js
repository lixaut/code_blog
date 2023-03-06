
const SERVER_URL = '/server';

/* 一般实现 */

let xhr = new XMLHttpRequest();
// 创建 Http 请求
xhr.open('GET', SERVER_URL, true);  // true，代表是否是异步的
// 设置状态监听函数
xhr.onreadystatechange = function() {
  if (this.readyState !== 4) return;
  if (this.status === 200) {
    FileSystemHandle(this.response);
  } else {
    console.error(this.statusText);
  }
};
// 设置请求失败时的监听函数
xhr.onerror = function() {
  console.error(this.statusText);
};
// 设置请求头信息
xhr.responseType = 'json';
xhr.setRequestHeader('Accept', 'application/json');
// 发送 Http 请求
xhr.send(null);

/* Promise 实现 */

function getJSON(url) {
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (this.readyState !== 4) return;
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    xhr.onerror = function() {
      reject(new Error(this.statusText));
    };
    xhr.responseType = 'json';
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send(null);
  });
  return promise;
}