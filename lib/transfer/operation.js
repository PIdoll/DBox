'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Operation = function (_React$Component) {
  (0, _inherits3.default)(Operation, _React$Component);

  function Operation() {
    (0, _classCallCheck3.default)(this, Operation);
    return (0, _possibleConstructorReturn3.default)(this, (Operation.__proto__ || (0, _getPrototypeOf2.default)(Operation)).apply(this, arguments));
  }

  (0, _createClass3.default)(Operation, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          moveToLeft = _props.moveToLeft,
          moveToRight = _props.moveToRight,
          _props$leftArrowText = _props.leftArrowText,
          leftArrowText = _props$leftArrowText === undefined ? '' : _props$leftArrowText,
          _props$rightArrowText = _props.rightArrowText,
          rightArrowText = _props$rightArrowText === undefined ? '' : _props$rightArrowText,
          leftActive = _props.leftActive,
          rightActive = _props.rightActive,
          className = _props.className,
          style = _props.style;

      return _react2.default.createElement(
        'div',
        { className: className, style: style },
        _react2.default.createElement(
          'div',
          { className: disabled || !rightActive ? 'disabled-icon' : '' },
          _react2.default.createElement(
            _button2.default,
            {
              shape: 'circle',
              type: 'primary',
              disabled: disabled || !rightActive,
              onClick: moveToRight,
              icon: 'right' },
            rightArrowText
          )
        ),
        _react2.default.createElement(
          'div',
          { className: disabled || !leftActive ? 'disabled-icon' : '' },
          _react2.default.createElement(
            _button2.default,
            {
              shape: 'circle',
              type: 'primary',
              disabled: disabled || !leftActive,
              onClick: moveToLeft,
              icon: 'left' },
            leftArrowText
          )
        )
      );
    }
  }]);
  return Operation;
}(_react2.default.Component);

exports.default = Operation;