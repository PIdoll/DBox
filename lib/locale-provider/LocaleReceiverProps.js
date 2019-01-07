'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocaleReceiver = function (_React$Component) {
  (0, _inherits3.default)(LocaleReceiver, _React$Component);

  function LocaleReceiver() {
    (0, _classCallCheck3.default)(this, LocaleReceiver);
    return (0, _possibleConstructorReturn3.default)(this, (LocaleReceiver.__proto__ || (0, _getPrototypeOf2.default)(LocaleReceiver)).apply(this, arguments));
  }

  (0, _createClass3.default)(LocaleReceiver, [{
    key: 'getLocale',
    value: function getLocale() {
      var _props = this.props,
          componentName = _props.componentName,
          defaultLocale = _props.defaultLocale;
      var idollLocale = this.context.idollLocale;

      var localeFromContext = idollLocale && idollLocale[componentName];
      return (0, _extends3.default)({}, typeof defaultLocale === 'function' ? defaultLocale() : defaultLocale, localeFromContext || {});
    }
  }, {
    key: 'getLocaleCode',
    value: function getLocaleCode() {
      var idollLocale = this.context.idollLocale;

      var localeCode = idollLocale && idollLocale.locale;
      return localeCode;
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children(this.getLocale(), this.getLocaleCode());
    }
  }]);
  return LocaleReceiver;
}(_react2.default.Component);

LocaleReceiver.contextTypes = {
  idollLocale: _propTypes2.default.object
};
exports.default = LocaleReceiver;