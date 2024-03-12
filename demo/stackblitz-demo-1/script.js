/**
 * 实现元素按椭圆轨迹运动动画
 * 父元素 - 椭圆轨迹
 * 子元素 - 按父元素轨迹运动（3个）
 * 通过改变初始弧度值来改变子元素位置，实现轨迹动画
 */

let boxEle = document.querySelector(".box");
let itemEles = document.querySelectorAll(".item");

let angle = 0;
let w = boxEle.offsetWidth / 2;
let h = boxEle.offsetHeight / 2;

const updateLocation = (startAngle) => {
  itemEles.forEach((item, index) => {
    let deg = index * ((2 * Math.PI) / itemEles.length) + startAngle;
    item.style.left = w + w * Math.cos(deg) - item.offsetWidth / 2 + "px";
    item.style.top = h + h * Math.sin(deg) - item.offsetHeight / 2 + "px";
  });
};

setInterval(() => {
  angle += 0.02;
  updateLocation(angle);
}, 20);
