'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stringOrNumber = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]);
var objectOrNumber = _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.number]);

function Colum(props) {
  var _extends3;

  var span = props.span,
      order = props.order,
      offset = props.offset,
      push = props.push,
      pull = props.pull,
      className = props.className,
      children = props.children,
      others = (0, _objectWithoutProperties3.default)(props, ['span', 'order', 'offset', 'push', 'pull', 'className', 'children']);

  var sizeClassObj = {};
  ['xs', 'sm', 'md', 'lg'].forEach(function (size) {
    var _extends2;

    var sizeProps = {};
    if (typeof props[size] === 'number') {
      sizeProps.span = props[size];
    } else if ((0, _typeof3.default)(props[size]) === 'object') {
      sizeProps = props[size] || {};
    }
    delete others[size];
    sizeClassObj = (0, _extends5.default)((_extends2 = {}, (0, _defineProperty3.default)(_extends2, 'idoll-col-' + size + '-' + sizeProps.span, sizeProps.span !== undefined), (0, _defineProperty3.default)(_extends2, 'idoll-col-' + size + '-order-' + sizeProps.order, sizeProps.order), (0, _defineProperty3.default)(_extends2, 'idoll-col-' + size + '-offset-' + sizeProps.offset, sizeProps.offset), (0, _defineProperty3.default)(_extends2, 'idoll-col-' + size + '-push-' + sizeProps.push, sizeProps.push), (0, _defineProperty3.default)(_extends2, 'idoll-col-' + size + '-pull-' + sizeProps.pull, sizeProps.pull), _extends2), sizeClassObj);
  });

  var classes = (0, _classnames2.default)((0, _extends5.default)((_extends3 = {}, (0, _defineProperty3.default)(_extends3, 'idoll-col-' + span, !!span), (0, _defineProperty3.default)(_extends3, 'idoll-col-order-' + order, order), (0, _defineProperty3.default)(_extends3, 'idoll-col-offset-' + offset, offset), (0, _defineProperty3.default)(_extends3, 'idoll-col-push-' + push, push), (0, _defineProperty3.default)(_extends3, 'idoll-col-pull-' + pull, pull), (0, _defineProperty3.default)(_extends3, className, !!className), _extends3), sizeClassObj));

  return _react2.default.createElement(
    'div',
    (0, _extends5.default)({}, others, { className: classes }),
    children
  );
}

Colum.propTypes = {
  span: stringOrNumber,
  order: stringOrNumber,
  offset: stringOrNumber,
  push: stringOrNumber,
  pull: stringOrNumber,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  xs: objectOrNumber,
  sm: objectOrNumber,
  md: objectOrNumber,
  lg: objectOrNumber
};

exports.default = Colum;