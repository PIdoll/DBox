'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getScroll;
// 获取滚动的距离
function getScroll(target, top) {
  if (typeof window === 'undefined') {
    return 0;
  }
  var prop = top ? 'pageYOffset' : 'pageXOffset';
  var method = top ? 'scrollTop' : 'scrollLeft';
  var isWindow = target === window;
  var ret = isWindow ? target[prop] : target[method];
  // ie 6,7,8标准模式
  if (isWindow && typeof ret !== 'number') {
    ret = window.document.documentElement[method];
  }
  return ret;
}