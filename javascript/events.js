
// 手写一个观察者模式
let events = (function() {
  let topics = {};
  return {
    // 注册监听函数
    subscribe(topic, handler) {
      if (!topics.hasOwnProperty(topic)) {
        topics[topic] = [];
      }
      topics[topic].push(handler);
    },
    // 发布事件，出发观察者回调事件
    publish(topic, info) {
      if (topics.hasOwnProperty(topic)) {
        topics[topic].forEach(handler => {
          handler(info);
        });
      }
    },
    // 移除主题的一个观察者的回调事件
    remove(topic, handler) {
      if (!topics.hasOwnProperty(topic)) return;
      let handlerIndex = topics[topic].indexOf(handler);
      if (handlerIndex >= 0) {
        topics[topic].splice(handlerIndex, 1);
      }
    },
    // 移除主题的所有观察者的回调事件
    removeAll(topic) {
      if (topics.hasOwnProperty(topic)) {
        topics[topic] = [];
      }
    }
  };
})();