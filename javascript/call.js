
// call 函数实现
Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    console.error('type error');
  }
  let args = [...arguments].slice(1),
    result = null;
  context = context || window;
  context.fn = this;
  result = context.fn(...args);
  delete context.fn;
  return result;
};

// apply 函数实现
Function.prototype.myApply = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('error');
  }
  let result = null;
  context = context || window;
  context.fn = this;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};

// bind 函数实现
Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('error');
  }
  let args = [...arguments].slice(1),
    fn = this;
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};