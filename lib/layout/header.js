'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(props) {
  var span = props.span,
      children = props.children,
      className = props.className;

  var classes = (0, _classnames2.default)((0, _defineProperty3.default)({
    'idoll-layout-header': 'idoll-layout-header'
  }, 'idoll-layout-header-' + span, span), className);
  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, props, { className: classes }),
    children
  );
}

Header.propTypes = {
  span: _propTypes2.default.number,
  children: _propTypes2.default.node
};

exports.default = Header;