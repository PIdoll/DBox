'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
	var type = props.type,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    other = (0, _objectWithoutProperties3.default)(props, ['type', 'className']);

	className += ' idoll-icon idoll-icon-' + type;
	return _react2.default.createElement('i', (0, _extends3.default)({ className: className.trim() }, other));
};