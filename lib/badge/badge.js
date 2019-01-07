'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _ScrollNumber = require('./ScrollNumber');

var _ScrollNumber2 = _interopRequireDefault(_ScrollNumber);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Badge = function (_React$Component) {
  (0, _inherits3.default)(Badge, _React$Component);

  function Badge() {
    (0, _classCallCheck3.default)(this, Badge);
    return (0, _possibleConstructorReturn3.default)(this, (Badge.__proto__ || (0, _getPrototypeOf2.default)(Badge)).apply(this, arguments));
  }

  (0, _createClass3.default)(Badge, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          count = _props.count,
          offset = _props.offset,
          text = _props.text,
          status = _props.status,
          prefixCls = _props.prefixCls,
          showZero = _props.showZero,
          overflowCount = _props.overflowCount,
          className = _props.className,
          style = _props.style,
          children = _props.children,
          dot = _props.dot,
          restProps = (0, _objectWithoutProperties3.default)(_props, ['count', 'offset', 'text', 'status', 'prefixCls', 'showZero', 'overflowCount', 'className', 'style', 'children', 'dot']);

      count = count > overflowCount ? overflowCount + '+' : count;
      // offset = Array.from(offset);
      // dot mode don't need count
      if (dot) {
        count = '';
      }
      // null undefined "" "0" 0
      var hidden = '';
      if (!showZero) {
        hidden = (!count || count === '0') && !showZero;
      }
      if (dot) {
        hidden = (!count || count === '0') && !dot;
      }
      if (status) {
        prefixCls = prefixCls + ('-' + status);
      }
      var scrollNumberCls = prefixCls + (dot ? '-dot' : '-count');
      var badgeCls = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, className, !!className), (0, _defineProperty3.default)(_classNames, prefixCls, true), (0, _defineProperty3.default)(_classNames, prefixCls + '-not-a-wrapper', !children), _classNames));
      if (offset) {}

      return _react2.default.createElement(
        'span',
        (0, _extends3.default)({ className: badgeCls, style: null }, restProps),
        children,
        _react2.default.createElement(
          _rcAnimate2.default,
          {
            component: '',
            showProp: 'data-show',
            transitionName: prefixCls + '-zoom',
            transitionAppear: true
          },
          hidden ? null : _react2.default.createElement(_ScrollNumber2.default, {
            'data-show': !hidden,
            className: scrollNumberCls,
            count: count,
            style: offset ? { left: offset[0], top: offset[1] } : style
          })
        ),
        text
      );
    }
  }]);
  return Badge;
}(_react2.default.Component);

Badge.defaultProps = {
  prefixCls: 'idoll-badge',
  count: null,
  dot: false,
  overflowCount: 99
};
Badge.propType = {
  count: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  showZero: _propTypes2.default.bool,
  dot: _propTypes2.default.bool,
  text: _propTypes2.default.any,
  status: _propTypes2.default.string,
  overflowCount: _propTypes2.default.number
};
exports.default = Badge;