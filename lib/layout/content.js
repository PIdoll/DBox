'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Content(props) {
	var children = props.children,
	    className = props.className;

	var classes = (0, _classnames2.default)({
		'idoll-layout-content': 'idoll-layout-content'
	}, className);
	return _react2.default.createElement(
		'div',
		{ className: classes },
		children
	);
}

Content.propTypes = {
	children: _propTypes2.default.node
};

exports.default = Content;