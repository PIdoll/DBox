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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _rcInputNumber = require('rc-input-number');

var _rcInputNumber2 = _interopRequireDefault(_rcInputNumber);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputNumber = function (_React$Component) {
  (0, _inherits3.default)(InputNumber, _React$Component);

  function InputNumber() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, InputNumber);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InputNumber.__proto__ || (0, _getPrototypeOf2.default)(InputNumber)).call.apply(_ref, [this].concat(args))), _this), _this.focus = function () {
      _this.inputNumberRef.focus();
    }, _this.blur = function () {
      _this.inputNumberRef.blur();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(InputNumber, [{
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props = this.props,
          className = _props.className,
          size = _props.size,
          others = (0, _objectWithoutProperties3.default)(_props, ['className', 'size']);

      var inputNumberClass = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, this.props.prefixCls + '-lg', size === 'large'), (0, _defineProperty3.default)(_classNames, this.props.prefixCls + '-sm', size === 'small'), _classNames), className);
      var upIcon = _react2.default.createElement(_icon2.default, { type: 'up', className: this.props.prefixCls + '-handle-up-inner' });
      var downIcon = _react2.default.createElement(_icon2.default, { type: 'down', className: this.props.prefixCls + '-handle-down-inner' });

      return _react2.default.createElement(_rcInputNumber2.default, (0, _extends3.default)({
        ref: function ref(i) {
          _this2.inputNumberRef = i;
        },
        className: inputNumberClass,
        upHandler: upIcon,
        downHandler: downIcon
      }, others));
    }
  }]);
  return InputNumber;
}(_react2.default.Component);

InputNumber.propTypes = {
  defaultValue: _propTypes2.default.number,
  disabled: _propTypes2.default.bool,
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  parser: _propTypes2.default.func,
  precision: _propTypes2.default.number,
  size: _propTypes2.default.oneOf(['small', 'default', 'large']),
  step: _propTypes2.default.number
};
InputNumber.defaultProps = {
  prefixCls: 'idoll-input-number',
  step: 1
};
exports.default = InputNumber;