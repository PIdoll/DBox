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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = function Divider(props) {
  var _classNames;

  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === undefined ? 'idoll' : _props$prefixCls,
      _props$type = props.type,
      type = _props$type === undefined ? 'horizontal' : _props$type,
      _props$orientation = props.orientation,
      orientation = _props$orientation === undefined ? '' : _props$orientation,
      className = props.className,
      children = props.children,
      dashed = props.dashed,
      restProps = (0, _objectWithoutProperties3.default)(props, ['prefixCls', 'type', 'orientation', 'className', 'children', 'dashed']);

  var orientationPrefix = orientation.length > 0 ? '-' + orientation : orientation;
  var classString = (0, _classnames2.default)(className, prefixCls + '-divider', prefixCls + '-divider-' + type, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-divider-with-text' + orientationPrefix, children), (0, _defineProperty3.default)(_classNames, prefixCls + '-divider-dashed', !!dashed), _classNames));
  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: classString }, restProps),
    children && _react2.default.createElement(
      'span',
      { className: prefixCls + '-divider-inner-text' },
      children
    )
  );
};
Divider.propTypes = {
  prefixCls: _propTypes2.default.string,
  type: _propTypes2.default.string,
  className: _propTypes2.default.string,
  dashed: _propTypes2.default.bool,
  style: _propTypes2.default.object
};
exports.default = Divider;