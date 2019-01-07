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

var _reactDom = require('react-dom');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

require('./style/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_React$Component) {
	(0, _inherits3.default)(Button, _React$Component);

	function Button() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Button);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Button, [{
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.clickedTimeout) {
				clearTimeout(this.clickedTimeout);
			}
			if (this.timeout) {
				clearTimeout(this.timeout);
			}
		}
		// 添加单击效果

	}, {
		key: 'isNeedInserted',
		value: function isNeedInserted() {
			var _props = this.props,
			    icon = _props.icon,
			    children = _props.children,
			    size = _props.size;

			var sizeCls = { large: 'lg', small: 'sm' }[size] || '';
			return _react2.default.Children.count(children) === 1 && !icon && sizeCls !== 'sm';
		}
	}, {
		key: 'render',
		value: function render() {
			var _classNames,
			    _this2 = this;

			var _props2 = this.props,
			    type = _props2.type,
			    text = _props2.text,
			    shape = _props2.shape,
			    size = _props2.size,
			    className = _props2.className,
			    htmlType = _props2.htmlType,
			    children = _props2.children,
			    icon = _props2.icon,
			    loading = _props2.loading,
			    ghost = _props2.ghost,
			    prefixCls = _props2.prefixCls,
			    block = _props2.block,
			    iconLocation = _props2.iconLocation,
			    others = (0, _objectWithoutProperties3.default)(_props2, ['type', 'text', 'shape', 'size', 'className', 'htmlType', 'children', 'icon', 'loading', 'ghost', 'prefixCls', 'block', 'iconLocation']);

			var sizeCls = { large: 'lg', small: 'sm' }[size] || '';
			var classes = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls, true), (0, _defineProperty3.default)(_classNames, prefixCls + '-' + type, type), (0, _defineProperty3.default)(_classNames, prefixCls + '-' + shape, shape), (0, _defineProperty3.default)(_classNames, prefixCls + '-' + sizeCls, sizeCls), (0, _defineProperty3.default)(_classNames, prefixCls + '-icon-only', !children && icon), (0, _defineProperty3.default)(_classNames, prefixCls + '-loading', loading), (0, _defineProperty3.default)(_classNames, prefixCls + '-background-ghost', ghost), (0, _defineProperty3.default)(_classNames, prefixCls + '-text', text), (0, _defineProperty3.default)(_classNames, prefixCls + '-block', block), (0, _defineProperty3.default)(_classNames, className, className), _classNames));
			var iconType = loading ? 'loading' : icon;
			var kids = children || children === 0 ? _react2.default.Children.map(children, function (child) {
				return insertSpace(child, _this2.isNeedInserted());
			}) : null;
			var iconNode = iconType ? _react2.default.createElement(_icon2.default, { type: iconType }) : null;
			if ('href' in others) {
				return _react2.default.createElement(
					'a',
					(0, _extends3.default)({}, others, {
						className: classes,
						onClick: this.handleClick }),
					iconNode,
					kids
				);
			} else {
				//	如果是下拉框图标，则icon放右边
				if (iconLocation === 'right') {
					return _react2.default.createElement(
						'button',
						(0, _extends3.default)({}, others, { type: htmlType || 'button', className: classes, onClick: this.handleClick }),
						kids,
						iconNode
					);
				} else {
					return _react2.default.createElement(
						'button',
						(0, _extends3.default)({}, others, { type: htmlType || 'button', className: classes, onClick: this.handleClick }),
						iconNode,
						kids
					);
				}
			}
		}
	}]);
	return Button;
}(_react2.default.Component);

// ----------------如果是两个中文字符，则在两个中文字符中自动插入一个空格--------------------------------


Button.defaultProps = {
	prefixCls: 'idoll-btn',
	onClick: function onClick() {},

	ghost: false,
	loading: false,
	text: false,
	block: false
};
Button.propTypes = {
	type: _propTypes.PropTypes.string,
	shape: _propTypes.PropTypes.oneOf(['circle', 'circle-outline', 'square']),
	size: _propTypes.PropTypes.oneOf(['large', 'default', 'small']),
	htmlType: _propTypes.PropTypes.oneOf(['submit', 'button', 'reset']),
	onClick: _propTypes.PropTypes.func,
	loading: _propTypes.PropTypes.bool,
	className: _propTypes.PropTypes.string,
	icon: _propTypes.PropTypes.string,
	block: _propTypes.PropTypes.bool
};

var _initialiseProps = function _initialiseProps() {
	var _this3 = this;

	this.clearButton = function (button) {
		button.className = button.className.replace(_this3.props.prefixCls + '-clicked', '');
	};

	this.handleClick = function () {
		var _props3;

		var buttonNode = (0, _reactDom.findDOMNode)(_this3);
		_this3.clearButton(buttonNode);
		_this3.clickedTimeout = setTimeout(function () {
			return buttonNode.className += ' ' + _this3.props.prefixCls + '-clicked';
		}, 10);
		clearTimeout(_this3.timeout);
		_this3.timeout = setTimeout(function () {
			return _this3.clearButton(buttonNode);
		}, 500);

		(_props3 = _this3.props).onClick.apply(_props3, arguments);
	};
};

exports.default = Button;
function insertSpace(child, needInserted) {
	if (child == null) {
		return;
	}
	var SPACE = needInserted ? ' ' : '';
	if (isString(child.type && isTwoCNChar(child.props.children))) {
		return _react2.default.cloneElement(child, {}, child.props.split('').join(SPACE));
	}
	if (isString(child)) {
		if (isTwoCNChar(child)) {
			child = child.split('').join(SPACE);
		}
		return _react2.default.createElement(
			'span',
			null,
			child
		);
	}
	return child;
}
// 判断字符串类型
function isString(str) {
	return typeof str === 'string';
}
// 判断是否是两个中文字符
var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
// -------------------------------insertSpace End-----------------------------------------------------