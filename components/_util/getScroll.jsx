// 获取滚动的距离
export default function getScroll(target, top) {
  if (typeof window === 'undefined') {
    return 0;
  }
  const prop = top ? 'pageYOffset' : 'pageXOffset';
  const method = top ? 'scrollTop' : 'scrollLeft'
  const isWindow = target === window;
  let ret = isWindow ? target[prop] : target[method];
  // ie 6,7,8标准模式
  if (isWindow && typeof ret !== 'number') {
    ret = window.document.documentElement[method];
  }
  return ret;
}
