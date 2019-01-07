'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _rcCollapse = require('rc-collapse');

var _rcCollapse2 = _interopRequireDefault(_rcCollapse);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _openAnimation = require('../_util/openAnimation');

var _openAnimation2 = _interopRequireDefault(_openAnimation);

require('./style/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Collapse = function (_React$Component) {
	(0, _inherits3.default)(Collapse, _React$Component);

	function Collapse() {
		(0, _classCallCheck3.default)(this, Collapse);
		return (0, _possibleConstructorReturn3.default)(this, (Collapse.__proto__ || (0, _getPrototypeOf2.default)(Collapse)).apply(this, arguments));
	}

	(0, _createClass3.default)(Collapse, [{
		key: 'render',
		value: function render() {
			var _classNames;

			var _props = this.props,
			    prefixCls = _props.prefixCls,
			    _props$className = _props.className,
			    className = _props$className === undefined ? '' : _props$className,
			    bordered = _props.bordered,
			    bgColor = _props.bgColor;

			var collapseClassName = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-borderless', !bordered), (0, _defineProperty3.default)(_classNames, prefixCls + '-bgColor', bgColor), _classNames), className);
			return _react2.default.createElement(_rcCollapse2.default, (0, _extends3.default)({}, this.props, { className: collapseClassName }));
		}
	}]);
	return Collapse;
}(_react2.default.Component);

Collapse.Panel = _rcCollapse2.default.Panel;
Collapse.defaultProps = {
	prefixCls: 'idoll-collapse',
	bordered: true,
	openAnimation: (0, _extends3.default)({}, _openAnimation2.default, {
		appear: function appear() {}
	})
};
exports.default = Collapse;