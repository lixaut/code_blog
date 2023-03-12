
// 设计一个简单任务队列，要求在 1， 3， 4 秒后打印出 1， 2， 3
class Queue {
  constructor() {
    this.queue = [];
  }
  addTask(task, t) {
    this.queue.push([task, t * 1000]);
    return this;
  }
  start() {
    this.queue.forEach(item => {
      setTimeout(() => {
        item[0]();
      }, item[1]);
    });
  }
}

let task = output => () => console.log(output);

let q = new Queue()
q.addTask(task(1), 1);
q.addTask(task(2), 3);
q.addTask(task(3), 4);
q.start();
