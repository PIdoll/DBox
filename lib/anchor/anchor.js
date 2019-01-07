'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _addEventListener = require('rc-util/lib/Dom/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _getScroll = require('../_util/getScroll');

var _getScroll2 = _interopRequireDefault(_getScroll);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _anchorLink = require('./anchorLink');

var _anchorLink2 = _interopRequireDefault(_anchorLink);

var _affix = require('../affix');

var _affix2 = _interopRequireDefault(_affix);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDefaultContainer() {
  return window;
}

function getOffsetTop(element, container) {
  if (!element) {
    return 0;
  }
  if (!element.getClientRects().length) {
    return 0;
  }
  // 获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
  var rect = element.getBoundingClientRect();
  if (rect.width || rect.height) {
    if (container === window) {
      container = element.ownerDocument.documentElement;
      return rect.top - container.clientTop;
    }
    // 判断 container 是否是HTMLElement
    if (container && container.nodeType === 1) {
      return rect.top - container.getBoundingClientRect().top;
    }
  }
  return rect.top;
}
function easeInOutCubic(t, b, c, d) {
  var cc = c - b;
  t /= d / 2;
  if (t < 1) {
    return cc / 2 * t * t * t + b;
  }
  return cc / 2 * ((t -= 2) * t * t + 2) + b;
}
// 匹配以#开头，后面不含#的字符串
var sharpMatcherRegx = /#([^#]+)$/;
function scrollTo(href) {
  var offsetTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var getContainer = arguments[2];
  var callback = arguments[3];

  var container = getContainer();
  var scrollTop = (0, _getScroll2.default)(container, true);
  var sharpLinkMatch = sharpMatcherRegx.exec(href);
  if (!sharpLinkMatch) {
    return false;
  };
  var targetElement = document.getElementById(sharpLinkMatch[1]);
  if (!targetElement) {
    return false;
  }
  var eleOffsetTop = getOffsetTop(targetElement, container);
  var targetScrollTop = scrollTop + eleOffsetTop - offsetTop;
  var startTime = Date.now();
  var frameFunc = function frameFunc() {
    var timestamp = Date.now();
    var time = timestamp - startTime;
    var nextScrollTop = easeInOutCubic(time, scrollTop, targetScrollTop, 450);
    if (container === window) {
      window.scrollTo(window.pageXOffset, nextScrollTop);
    } else {
      container.scrollTop = nextScrollTop;
    }
    if (time < 450) {
      (0, _raf2.default)(frameFunc);
    } else {
      callback();
    }
  };
  (0, _raf2.default)(frameFunc);
}

var Anchor = function (_React$Component) {
  (0, _inherits3.default)(Anchor, _React$Component);

  function Anchor(props) {
    (0, _classCallCheck3.default)(this, Anchor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Anchor.__proto__ || (0, _getPrototypeOf2.default)(Anchor)).call(this, props));

    _this.componentWillUnmount = function () {
      if (_this.scrollEvent) {
        _this.scrollEvent.remove();
      }
    };

    _this.handleScroll = function () {
      if (_this.animating) {
        return false;
      }
      var _this$props = _this.props,
          offsetTop = _this$props.offsetTop,
          bounds = _this$props.bounds;

      _this.setState({
        activeLink: _this.getCurrentAnchor(offsetTop, bounds)
      });
    };

    _this.handleScrollTo = function (link) {
      var _this$props2 = _this.props,
          offsetTop = _this$props2.offsetTop,
          getContainer = _this$props2.getContainer;

      _this.animting = true;
      _this.setState({
        activeLink: link
      });
      scrollTo(link, offsetTop, getContainer, function () {
        _this.animating = false;
      });
    };

    _this.updateInk = function () {
      if (typeof document === 'undefined') {
        return;
      }
      var _this$props3 = _this.props,
          prefixCls = _this$props3.prefixCls,
          type = _this$props3.type;

      var anchorNode = _reactDom2.default.findDOMNode(_this);
      var linkNode = anchorNode.getElementsByClassName(prefixCls + '-link-title-active')[0];
      if (linkNode) {
        if (type === 'inline' || type === 'bookmark') {
          _this.inkNode.style.left = linkNode.offsetLeft + linkNode.clientWidth / 2 + 'px';
          return;
        }
        // if (type === 'bookmark') {
        //   return;
        // }
        _this.inkNode.style.top = linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5 + 'px';
        // console.log(this.inkNode.style.top = '50px');
      }
    };

    _this.saveInkNode = function (node) {
      _this.inkNode = node;
    };

    _this.state = {
      activeLink: null
    };
    _this.links = [];
    return _this;
  }

  (0, _createClass3.default)(Anchor, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _this2 = this;

      var idollAnchor = {
        registerLink: function registerLink(link) {
          if (!(_this2.links.indexOf(link) >= 0)) {
            _this2.links.push(link);
          }
        },
        unregisterLink: function unregisterLink(link) {
          var index = _this2.links.indexOf(link);
          if (index !== -1) {
            _this2.links.splice(index, 1);
          }
        },
        activeLink: this.state.activeLink,
        scrollTo: this.handleScrollTo,
        onClick: this.props.onClick,
        type: this.props.type
      };
      return { idollAnchor: idollAnchor };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var getContainer = this.props.getContainer;

      this.scrollEvent = (0, _addEventListener2.default)(getContainer(), 'scroll', this.handleScroll);
      this.handleScroll();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateInk();
    }
  }, {
    key: 'getCurrentAnchor',
    value: function getCurrentAnchor() {
      var offsetTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var bounds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

      var activeLink = '';
      if (typeof document === 'undefined') {
        return activeLink;
      }
      var linkSections = [];
      var getContainer = this.props.getContainer;

      var container = getContainer();
      this.links.forEach(function (link) {
        var sharpLinkMatch = sharpMatcherRegx.exec(link.toString());
        if (!sharpLinkMatch) {
          return;
        };
        var target = document.getElementById(sharpLinkMatch[1]);
        if (target) {
          var top = getOffsetTop(target, container);
          if (top < offsetTop + bounds) {
            linkSections.push({
              link: link,
              top: top
            });
          }
        }
      });

      if (linkSections.length) {
        var maxSection = linkSections.reduce(function (prev, curr) {
          return curr.top > prev.top ? curr : prev;
        });
        return maxSection.link;
      }
      return '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className,
          style = _props.style,
          offsetTop = _props.offsetTop,
          affix = _props.affix,
          showInkInFixed = _props.showInkInFixed,
          children = _props.children,
          getContainer = _props.getContainer,
          type = _props.type;
      var activeLink = this.state.activeLink;

      var inkClass = (0, _classnames2.default)(prefixCls + '-ink-ball', {
        visible: activeLink
      });
      var wrapperClass = (0, _classnames2.default)(className, prefixCls + '-wrapper');
      // 书签类型锚点时去掉白色背景
      var bookmarkWrapperClassName = prefixCls + '-bookmark-wrapper';
      var anchorClass = (0, _classnames2.default)(prefixCls, {
        'fixed': !affix && !showInkInFixed
      });
      var inlineAnchorClass = (0, _classnames2.default)(prefixCls + '-anchor-line-link');
      var inlineAnimatingClass = (0, _classnames2.default)(prefixCls + '-anchor-line-link-ball', {
        visible: activeLink
      });
      var wrapperStyle = (0, _extends3.default)({
        maxHeight: offsetTop ? 'calc(100vh - ' + offsetTop + 'px)' : '100vh'
      }, style);
      var anchorContent = _react2.default.createElement(
        'div',
        { className: type !== 'bookmark' ? wrapperClass : bookmarkWrapperClassName, style: wrapperStyle },
        _react2.default.createElement(
          'div',
          { className: anchorClass },
          type !== 'bookmark' ? _react2.default.createElement(
            'div',
            { className: type === 'vertical' || !type || type === 'bookmark' ? prefixCls + '-ink' : inlineAnchorClass },
            _react2.default.createElement('span', { className: type === 'vertical' || !type ? inkClass : inlineAnimatingClass, ref: this.saveInkNode })
          ) : null,
          children
        )
      );
      return !affix ? anchorContent : _react2.default.createElement(
        _affix2.default,
        { offsetTop: offsetTop, target: getContainer },
        anchorContent
      );
    }
  }]);
  return Anchor;
}(_react2.default.Component);

Anchor.Link = _anchorLink2.default;
Anchor.propTypes = {
  prefixCls: _propTypes2.default.string,
  getContainer: _propTypes2.default.func,
  type: _propTypes2.default.string,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  offsetTop: _propTypes2.default.number,
  onClick: _propTypes2.default.func,
  bounds: _propTypes2.default.number
};
Anchor.defaultProps = {
  prefixCls: 'idoll-anchor',
  affix: true,
  showInkInFixed: false,
  getContainer: getDefaultContainer
};
Anchor.childContextTypes = {
  idollAnchor: _propTypes2.default.object
};
exports.default = Anchor;