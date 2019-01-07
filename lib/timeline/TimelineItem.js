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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimelineItem = function (_React$Component) {
  (0, _inherits3.default)(TimelineItem, _React$Component);

  function TimelineItem() {
    (0, _classCallCheck3.default)(this, TimelineItem);
    return (0, _possibleConstructorReturn3.default)(this, (TimelineItem.__proto__ || (0, _getPrototypeOf2.default)(TimelineItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(TimelineItem, [{
    key: 'render',
    value: function render() {
      var _classNames, _classNames2;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          color = _props.color,
          last = _props.last,
          children = _props.children,
          pending = _props.pending,
          className = _props.className,
          dot = _props.dot,
          restProps = (0, _objectWithoutProperties3.default)(_props, ['prefixCls', 'color', 'last', 'children', 'pending', 'className', 'dot']);

      console.log('children: ');
      console.log(children);
      var itemClassName = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-item', true), (0, _defineProperty3.default)(_classNames, prefixCls + '-item-last', last), (0, _defineProperty3.default)(_classNames, prefixCls + '-item-pending', pending), (0, _defineProperty3.default)(_classNames, className, className), _classNames));

      var dotClassName = (0, _classnames2.default)((_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, prefixCls + '-item-head', true), (0, _defineProperty3.default)(_classNames2, prefixCls + '-item-head-custom', dot), (0, _defineProperty3.default)(_classNames2, prefixCls + '-item-head-' + color, true), _classNames2));

      return _react2.default.createElement(
        'li',
        (0, _extends3.default)({}, restProps, { className: itemClassName }),
        _react2.default.createElement('div', { className: prefixCls + '-item-tail' }),
        _react2.default.createElement(
          'div',
          {
            className: dotClassName,
            style: { borderColor: /blue|red|green/.test(color) ? null : color }
          },
          dot
        ),
        _react2.default.createElement(
          'div',
          { className: prefixCls + '-item-content' },
          children
        )
      );
    }
  }]);
  return TimelineItem;
}(_react2.default.Component);

TimelineItem.defaultProps = {
  prefixCls: 'idoll-timeline',
  color: 'blue',
  last: false,
  pending: false
};
TimelineItem.propTypes = {
  prefixCls: _propTypes2.default.string,
  color: _propTypes2.default.string,
  last: _propTypes2.default.bool,
  pending: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  dot: _propTypes2.default.node
};
exports.default = TimelineItem;