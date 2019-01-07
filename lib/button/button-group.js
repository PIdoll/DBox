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

exports.default = ButtonGroup;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonGroup(props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'idoll-btn-group' : _props$prefixCls,
        size = props.size,
        className = props.className,
        others = (0, _objectWithoutProperties3.default)(props, ['prefixCls', 'size', 'className']);

    var sizeCls = '';
    switch (size) {
        case 'large':
            sizeCls = 'lg';
            break;
        case 'small':
            sizeCls = 'sm';
            break;
        default:
            break;
    }
    var classes = (0, _classnames2.default)(prefixCls, (0, _defineProperty3.default)({}, prefixCls + '-' + sizeCls, sizeCls), className);
    return _react2.default.createElement('div', (0, _extends3.default)({}, others, { className: classes }));
}
ButtonGroup.propTypes = {
    size: _propTypes2.default.oneOf(['small', 'default', 'large'])
};