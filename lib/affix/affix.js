'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _addEventListener = require('rc-util/lib/Dom/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _getScroll = require('../_util/getScroll');

var _getScroll2 = _interopRequireDefault(_getScroll);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
function getTargetRect(target) {
  return target !== window && target.nodeType === 1 ? target.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
}
// 判断两个数组是否浅相等
// https : //github.com/moroshko/shallow-equal

function getOffset(element, target) {
  var elemRect = element.getBoundingClientRect();
  var targetRect = getTargetRect(target);

  var scrollTop = (0, _getScroll2.default)(target, true);
  var scrollLeft = (0, _getScroll2.default)(target, false);

  var docElem = window.document.body;
  var clientTop = docElem.clientTop || 0;
  var clientLeft = docElem.clientLeft || 0;

  return {
    top: elemRect.top - targetRect.top + scrollTop + clientTop,
    left: elemRect.left - targetRect.left + scrollLeft + clientLeft,
    width: elemRect.width,
    height: elemRect.height
  };
}
function noop() {}
function getDefaultTarget() {
  return typeof window !== 'undefined' ? window : null;
}

var Affix = function (_React$Component) {
  (0, _inherits3.default)(Affix, _React$Component);

  function Affix(props) {
    (0, _classCallCheck3.default)(this, Affix);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Affix.__proto__ || (0, _getPrototypeOf2.default)(Affix)).call(this, props));

    _this.events = ['resize', 'scroll', 'touchstart', 'touchmove', 'pageshow', 'load'];
    _this.eventHandlers = {};
    _this.state = {
      affixStyle: undefined,
      placeholderStyle: undefined
    };

    _this.componentWillReceiveProps = function (nextProps) {
      if (_this.props.target !== nextProps.target) {
        _this.clearEventListeners();
        _this.setTargetEventListeners(nextProps.target);

        // 模拟Event对象
        _this.updatePosition({});
      }
    };

    _this.updatePosition = function (e) {
      var _this$props = _this.props,
          offsetTop = _this$props.offsetTop,
          offsetBottom = _this$props.offsetBottom,
          offset = _this$props.offset,
          target = _this$props.target;

      var targetNode = target();

      // 向后兼容
      offsetTop = offsetTop || offset;
      var scrollTop = (0, _getScroll2.default)(targetNode, true);
      var affixNode = _reactDom2.default.findDOMNode(_this);
      var elemOffset = getOffset(_reactDom2.default.findDOMNode(_this), targetNode);

      var elemSize = {
        width: _this.fixedNode.offsetWidth,
        height: _this.fixedNode.offsetHeight
      };
      var offsetMode = {
        top: false,
        bottom: false
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
      var targetRect = getTargetRect(targetNode);
      var targetInnerHeight = targetNode.innerHeight || targetNode.clientHeight;
      if (scrollTop > elemOffset.top - offsetTop && offsetMode.top) {
        // 固定在顶部
        _this.setAffixStyle(e, {
          position: 'fixed',
          top: targetRect.top + offsetTop,
          left: targetRect.left + elemOffset.left,
          width: _reactDom2.default.findDOMNode(_this).offsetWidth
        });
        _this.setPlaceholderStyle(e, {
          width: _reactDom2.default.findDOMNode(_this).offsetWidth,
          height: _reactDom2.default.findDOMNode(_this).offsetHeight
        });
      } else if (scrollTop > elemOffset.top + elemSize.height + offsetBottom - targetInnerHeight && offsetMode.bottom) {
        // 固定在底部
        var targetBottomOffset = targetNode === window ? 0 : window.innerHeight - targetRect.bottom;
        var width = elemOffset.width;
        _this.setAffixStyle(e, {
          position: 'fixed',
          bottom: targetBottomOffset + offsetBottom,
          left: targetRect.left + elemOffset.left,
          width: width
        });
        _this.setPlaceholderStyle({
          width: width,
          height: elemOffset.height
        });
      } else {
        var affixStyle = _this.state.affixStyle;

        if (e.type === 'resize' && affixStyle && affixStyle.position === 'fixed' && affixNode.offsetWidth) {
          _this.setAffixStyle(e, (0, _extends3.default)({}, affixStyle, { width: affixNode.offsetWidth }));
        } else {
          _this.setAffixStyle(e, null);
        }
        _this.setPlaceholderStyle(null);
      }
    };

    _this.saveFixedNode = function (node) {
      _this.fixedNode = node;
    };

    _this.state = {
      affixStyle: null,
      placeholderStyle: null
    };
    return _this;
  }

  (0, _createClass3.default)(Affix, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _warning2.default)(!('offset' in this.props), '\'offset\'\u5C5E\u6027\u5DF2\u7ECF\u88AB\u5206\u79BB\u4E86\uFF0C\u8BF7\u7528\'offsetTop\'\u4EE3\u66FF');
      var target = this.props.target;
      this.setTargetEventListeners(target);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearEventListeners();
      clearTimeout(this.timeout);
      this.updatePosition.cancel();
    }
  }, {
    key: 'setTargetEventListeners',
    value: function setTargetEventListeners(getTarget) {
      var _this2 = this;

      var target = getTarget();
      if (!target) {
        return;
      }
      this.clearEventListeners();

      this.events.forEach(function (eventName) {
        _this2.eventHandlers[eventName] = (0, _addEventListener2.default)(target, eventName, _this2.updatePosition);
      });
    }
  }, {
    key: 'clearEventListeners',
    value: function clearEventListeners() {
      var _this3 = this;

      this.events.forEach(function (eventName) {
        var handler = _this3.eventHandlers[eventName];
        if (handler && handler.remove) {
          handler.remove();
        }
      });
    }
  }, {
    key: 'setAffixStyle',
    value: function setAffixStyle(e, affixStyle) {
      var _this4 = this;

      var _props = this.props,
          _props$onChange = _props.onChange,
          onChange = _props$onChange === undefined ? noop : _props$onChange,
          _props$target = _props.target,
          target = _props$target === undefined ? getDefaultTarget : _props$target;

      var originalAffixStyle = this.state.affixStyle;
      var isWindow = target() === window;
      if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
        return;
      }
      if ((0, _shallowequal2.default)(affixStyle, originalAffixStyle)) {
        return;
      }
      this.setState({ affixStyle: affixStyle }, function () {
        var affixed = !!_this4.state.affixStyle;
        if (affixStyle && !originalAffixStyle || !affixStyle && originalAffixStyle) {
          onChange(affixed);
        }
      });
    }
  }, {
    key: 'setPlaceholderStyle',
    value: function setPlaceholderStyle(e, placeholderStyle) {
      var originalPlaceholderStyle = this.state.placeholderStyle;
      if ((0, _shallowequal2.default)(placeholderStyle, originalPlaceholderStyle)) {
        return;
      }
      this.setState({ placeholderStyle: placeholderStyle });
    }
  }, {
    key: 'render',
    value: function render() {
      var className = (0, _classnames2.default)((0, _defineProperty3.default)({}, this.props.prefixCls || 'idoll-affix', this.state.affixStyle));
      var props = (0, _omit2.default)(this.props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target', 'onChange']);
      var placeholderStyle = (0, _extends3.default)({}, this.state.placeholderStyle, this.props.style);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, props, { style: placeholderStyle }),
        _react2.default.createElement(
          'div',
          { className: className, ref: this.saveFixedNode, style: this.state.affixStyle },
          this.props.children
        )
      );
    }
  }]);
  return Affix;
}(_react2.default.Component);

Affix.propTypes = {
  offsetTop: _propTypes2.default.number, // 距离窗口顶部达到指定偏移量后触发
  offsetBottom: _propTypes2.default.number, // 距离窗口底部达到指定偏移量后触发
  target: _propTypes2.default.func // 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数
};
Affix.defaultProps = {
  target: function target() {
    return window;
  },
  onChange: function onChange() {}
};
exports.default = Affix;