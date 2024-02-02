/**
 * 可视化大屏响应式设置
 * 设计稿尺寸：1920 * 1080
 * 响应式单位：1rem = 96px
 */
export function useRem() {
  const PX = '16px';
  const setRem = () => {
    let wInit = document.documentElement.clientWidth || window.innerWidth;
    document.querySelector('html').style.fontSize = wInit / 20 + 'px';
  };
  const removeRem = () => {
    document.querySelector('html').style.fontSize = PX;
    window.removeEventListener('resize', setRem);
  };
  const addRem = () => {
    document.querySelector('body').style.fontSize = PX;
    window.addEventListener('resize', setRem);
    setRem();
  };
  return { addRem, removeRem };
}
