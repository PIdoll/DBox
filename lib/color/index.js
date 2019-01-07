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

var _Color = require('../../assets/images/Color.png');

var _Color2 = _interopRequireDefault(_Color);

require('./style');

var _primaryColor = require('./primaryColor');

var _primaryColor2 = _interopRequireDefault(_primaryColor);

var _functionColor = require('./functionColor');

var _functionColor2 = _interopRequireDefault(_functionColor);

var _neutralColor = require('./neutralColor');

var _neutralColor2 = _interopRequireDefault(_neutralColor);

var _otherColor = require('./otherColor');

var _otherColor2 = _interopRequireDefault(_otherColor);

var _shadowColor = require('./shadowColor');

var _shadowColor2 = _interopRequireDefault(_shadowColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Color = function (_React$Component) {
  (0, _inherits3.default)(Color, _React$Component);

  function Color() {
    (0, _classCallCheck3.default)(this, Color);
    return (0, _possibleConstructorReturn3.default)(this, (Color.__proto__ || (0, _getPrototypeOf2.default)(Color)).apply(this, arguments));
  }

  (0, _createClass3.default)(Color, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement('img', { src: _Color2.default, className: 'idoll-color-img' }),
        _react2.default.createElement(_primaryColor2.default, null),
        _react2.default.createElement(_functionColor2.default, null),
        _react2.default.createElement(_neutralColor2.default, null),
        _react2.default.createElement(_otherColor2.default, null),
        _react2.default.createElement(_shadowColor2.default, null)
      );
    }
  }]);
  return Color;
}(_react2.default.Component);

exports.default = Color;