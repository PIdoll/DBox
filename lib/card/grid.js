'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = Grid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Grid(props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'dbox-card' : _props$prefixCls,
        bodyStyle = props.bodyStyle,
        others = (0, _objectWithoutProperties3.default)(props, ['prefixCls', 'bodyStyle']);

    var gridClassName = (0, _classnames2.default)(prefixCls + '-grid', _classnames2.default);
    return _react2.default.createElement('div', (0, _extends3.default)({}, others, { className: gridClassName, style: bodyStyle }));
};

Grid.Protypes = {
    classNames: _propTypes2.default.string,
    prefixCls: _propTypes2.default.string
};