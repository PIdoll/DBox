'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButton = function (_React$Component) {
  (0, _inherits3.default)(RadioButton, _React$Component);

  function RadioButton() {
    (0, _classCallCheck3.default)(this, RadioButton);
    return (0, _possibleConstructorReturn3.default)(this, (RadioButton.__proto__ || (0, _getPrototypeOf2.default)(RadioButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(RadioButton, [{
    key: 'render',
    value: function render() {
      var radioProps = (0, _assign2.default)({}, this.props);
      if (this.context.radioGroup) {
        radioProps.onChange = this.context.radioGroup.onChange;
        radioProps.checked = this.props.value === this.context.radioGroup.value;
        radioProps.disabled = this.props.disabled || this.context.radioGroup.disabled;
      }
      return _react2.default.createElement(_radio2.default, radioProps);
    }
    // 在这里声明 contextTypes 用于访问 radioGroup 组件中定义的Context数据.

  }]);
  return RadioButton;
}(_react2.default.Component);

RadioButton.defaultProps = {
  prefixCls: 'idoll-radio-button' };
RadioButton.contextTypes = {
  radioGroup: _propTypes2.default.any
};
exports.default = RadioButton;