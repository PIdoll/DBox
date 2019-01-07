'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.default = Group;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Group(props) {
  var _classNames;

  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === undefined ? 'idoll-input-group' : _props$prefixCls,
      _props$className = props.className,
      className = _props$className === undefined ? '' : _props$className;

  var cls = (0, _classnames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-lg', props.size === 'large'), (0, _defineProperty3.default)(_classNames, prefixCls + '-sm', props.size === 'small'), (0, _defineProperty3.default)(_classNames, prefixCls + '-compact', props.compact), _classNames), className);

  return _react2.default.createElement(
    'span',
    { className: cls, style: props.style },
    props.children
  );
}

Group.propTypes = {
  children: _propTypes2.default.any,
  size: _propTypes2.default.oneOf(['small', 'default', 'large']),
  className: _propTypes2.default.string
};