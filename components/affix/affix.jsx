import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import warning from 'warning';
import shallowequal from 'shallowequal'
// 判断两个数组是否浅相等
// https : //github.com/moroshko/shallow-equal
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import getScroll from '../_util/getScroll';

import './style/index.jsx'

// 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
function getTargetRect(target) {
  return target !== window && target.nodeType === 1
  ? target.getBoundingClientRect()
  : { top: 0, left: 0, bottom: 0 };
}
function getOffset(element, target) {
  const elemRect = element.getBoundingClientRect();
  const targetRect = getTargetRect(target);

  const scrollTop = getScroll(target, true);
  const scrollLeft = getScroll(target, false);

  const docElem = window.document.body;
  const clientTop = docElem.clientTop || 0;
  const clientLeft = docElem.clientLeft || 0;

  return {
    top: elemRect.top - targetRect.top + scrollTop + clientTop,
    left: elemRect.left - targetRect.left + scrollLeft + clientLeft,
    width: elemRect.width,
    height: elemRect.height,
  };
}
function noop() {}
function getDefaultTarget() {
  return typeof window !== 'undefined' ? window : null;
}
/**
 * The only true button.
 *
 * @visibleName The Best Button Ever 🐙
 */
export default class Affix extends React.Component {
  static propTypes = {
    offsetTop: PropTypes.number, // 距离窗口顶部达到指定偏移量后触发
    offsetBottom: PropTypes.number, // 距离窗口底部达到指定偏移量后触发
    target: PropTypes.func, // 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数
  }
  static defaultProps = {
    target() {
      return window;
    },
    onChange() {}, // 固定状态改变时触发的回调函数
  }
  constructor(props) {
    super(props);
    this.state = {
      affixStyle: null,
      placeholderStyle: null,
    }
  }
  events = [
    'resize',
    'scroll',
    'touchstart',
    'touchmove',
    'pageshow',
    'load'
  ]
  eventHandlers = {};
  state = {
    affixStyle: undefined,
    placeholderStyle: undefined,
  }

  componentDidMount() {
    warning(!('offset' in this.props), `'offset'属性已经被分离了，请用'offsetTop'代替`)
    const target = this.props.target;
    this.setTargetEventListeners(target);
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.props.target !== nextProps.target) {
      this.clearEventListeners();
      this.setTargetEventListeners(nextProps.target);

      // 模拟Event对象
      this.updatePosition({});
    }
  };

  componentWillUnmount () {
    this.clearEventListeners();
    clearTimeout(this.timeout);
    this.updatePosition.cancel();
  }


  setTargetEventListeners(getTarget) {
    const target = getTarget();
    if (!target) {
      return;
    }
    this.clearEventListeners();

    this.events.forEach(eventName => {
      this.eventHandlers[eventName] = addEventListener(target, eventName, this.updatePosition);
    })
  }
  clearEventListeners() {
    this.events.forEach(eventName => {
      const handler = this.eventHandlers[eventName];
      if (handler && handler.remove) {
        handler.remove();
      }
    })
  }

  updatePosition = (e) => {
    let { offsetTop, offsetBottom, offset, target } = this.props;
    const targetNode = target();

    // 向后兼容
    offsetTop = offsetTop || offset;
    const scrollTop = getScroll(targetNode, true);
    const affixNode = ReactDOM.findDOMNode(this);
    const elemOffset = getOffset(ReactDOM.findDOMNode(this), targetNode);

    const elemSize = {
      width: this.fixedNode.offsetWidth,
      height: this.fixedNode.offsetHeight,
    }
    const offsetMode = {
      top: false,
      bottom: false,
    };
    // offsetTop=0 是默认值
    if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
      offsetMode.top = true;
      offsetTop = 0;
    } else {
      offsetMode.top = typeof offsetTop === 'number';
      offsetMode.bottom = typeof offsetBottom === 'number';
    }
    // 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
    const targetRect = getTargetRect(targetNode);
    const targetInnerHeight = targetNode.innerHeight || targetNode.clientHeight;
    if (scrollTop > elemOffset.top - offsetTop && offsetMode.top) {
      // 固定在顶部
      this.setAffixStyle(e, {
        position: 'fixed',
        top: targetRect.top + offsetTop,
        left: targetRect.left + elemOffset.left,
        width: ReactDOM.findDOMNode(this).offsetWidth,
      });
      this.setPlaceholderStyle(e, {
        width: ReactDOM.findDOMNode(this).offsetWidth,
        height: ReactDOM.findDOMNode(this).offsetHeight,
      })
    } else if (
      scrollTop > elemOffset.top + elemSize.height + offsetBottom - targetInnerHeight && offsetMode.bottom
    ) {
      // 固定在底部
      const targetBottomOffset = targetNode === window ? 0 : (window.innerHeight - targetRect.bottom);
      const width = elemOffset.width;
      this.setAffixStyle(e, {
        position: 'fixed',
        bottom: targetBottomOffset + offsetBottom,
        left: targetRect.left + elemOffset.left,
        width,
      });
      this.setPlaceholderStyle({
        width,
        height: elemOffset.height,
      });
    } else {
      const { affixStyle } = this.state;
      if (e.type === 'resize' && affixStyle && affixStyle.position === 'fixed' && affixNode.offsetWidth) {
        this.setAffixStyle(e, {...affixStyle, width: affixNode.offsetWidth})
      } else {
        this.setAffixStyle(e, null);
      }
      this.setPlaceholderStyle(null);
    }
  }
  saveFixedNode = (node) => {
    this.fixedNode = node;
  }
  setAffixStyle(e, affixStyle) {
    const { onChange = noop, target = getDefaultTarget } = this.props;
    const originalAffixStyle = this.state.affixStyle;
    const isWindow = target() === window;
    if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
      return;
    }
    if (shallowequal(affixStyle, originalAffixStyle)) {
      return;
    }
    this.setState({ affixStyle }, () => {
      const affixed = !!this.state.affixStyle;
      if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) {
        onChange(affixed);
      }
    })
  }
  setPlaceholderStyle(e, placeholderStyle) {
    const originalPlaceholderStyle = this.state.placeholderStyle;
    if (shallowequal(placeholderStyle, originalPlaceholderStyle)) {
      return;
    }
    this.setState({ placeholderStyle });
  }
  render () {
    const className = classNames({
      [this.props.prefixCls || 'idoll-affix']: this.state.affixStyle,
    });
    const props = omit(this.props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target', 'onChange']);
    const placeholderStyle = { ...this.state.placeholderStyle, ...this.props.style };
    return (
      <div {...props} style={placeholderStyle}>
        <div className={className} ref={this.saveFixedNode} style={this.state.affixStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

