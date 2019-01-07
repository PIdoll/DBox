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

var _timeline = require('../timeline');

var _timeline2 = _interopRequireDefault(_timeline);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Version = function (_React$Component) {
  (0, _inherits3.default)(Version, _React$Component);

  function Version(props) {
    (0, _classCallCheck3.default)(this, Version);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Version.__proto__ || (0, _getPrototypeOf2.default)(Version)).call(this, props));

    _this.state = {
      reverse: true
    };
    return _this;
  }

  (0, _createClass3.default)(Version, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _timeline2.default,
          null,
          _react2.default.createElement(
            _timeline2.default.Item,
            null,
            _react2.default.createElement(
              'h2',
              null,
              '1.0.0'
            ),
            _react2.default.createElement(
              'p',
              null,
              '2018-10-12'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\uD83D\uDC1E \u4FEE\u590D Avatar \u56FE\u6807\u4E0D\u80FD\u5782\u76F4\u5C45\u4E2D\u7684\u95EE\u9898\u3002'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\uD83D\uDC1E \u4FEE\u590D\u4F1A\u5BFC\u81F4 Button \u4E2D\u7684\u56FE\u6807\u663E\u793A\u53D8\u5C0F\u7684\u95EE\u9898\u3002'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\uD83D\uDC1E \u4FEE\u590D\u4F1A\u5BFC\u81F4 Button \u4E2D\u7684\u56FE\u6807\u663E\u793A\u53D8\u5C0F\u7684\u95EE\u9898\u3002'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\uD83D\uDC1E \u4FEE\u590D\u4F1A\u5BFC\u81F4 Button \u4E2D\u7684\u56FE\u6807\u663E\u793A\u53D8\u5C0F\u7684\u95EE\u9898\u3002'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\uD83D\uDC1E \u4FEE\u590D\u4F1A\u5BFC\u81F4 Button \u4E2D\u7684\u56FE\u6807\u663E\u793A\u53D8\u5C0F\u7684\u95EE\u9898\u3002'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\uD83D\uDC1E \u4FEE\u590D\u4F1A\u5BFC\u81F4 Button \u4E2D\u7684\u56FE\u6807\u663E\u793A\u53D8\u5C0F\u7684\u95EE\u9898\u3002'
            )
          ),
          _react2.default.createElement(
            _timeline2.default.Item,
            null,
            _react2.default.createElement(
              'h2',
              null,
              '\u4E3B\u8981\u53D8\u5316'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u5168\u65B0\u7684\u8272\u5F69\u7CFB\u7EDF\uFF0C\u7EC4\u4EF6\u4E3B\u8272\u7531\u300E#108EE9\u300F\u6539\u4E3A\u300E#1890FF\u300F\uFF0C\u65B0\u4E3B\u8272\u6211\u4EEC\u79F0\u4E4B\u4E3A\u300E\u62C2\u6653\u84DD\u300F\u3002'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u5168\u65B0\u7684\u89C6\u89C9\u6837\u5F0F\u548C\u7EC4\u4EF6\u5C3A\u5BF8\uFF0C\u66F4\u73B0\u4EE3\u66F4\u7F8E\u89C2\u3002'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u57FA\u7840\u5B57\u4F53\u5927\u5C0F\u7531 12px \u589E\u5927\u5230 14px\u3002'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u9ED8\u8BA4\u8BED\u8A00\u7531\u4E2D\u6587\u6539\u4E3A\u82F1\u6587\u3002'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u5168\u9762\u652F\u6301 React 16\u3002'
            ),
            _react2.default.createElement(
              'p',
              null,
              ' \u65B0\u7684 Divider \u7EC4\u4EF6\u3002'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u65B0\u589E 30 \u4E2A\u56FE\u6807\u3002'
            )
          ),
          _react2.default.createElement(
            _timeline2.default.Item,
            null,
            _react2.default.createElement(
              'h2',
              null,
              '1.0.0'
            ),
            _react2.default.createElement(
              'p',
              null,
              '2018-10-12'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\uD83D\uDC1E \u4FEE\u590D Avatar \u56FE\u6807\u4E0D\u80FD\u5782\u76F4\u5C45\u4E2D\u7684\u95EE\u9898\u3002'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\uD83D\uDC1E \u4FEE\u590D\u4F1A\u5BFC\u81F4 Button \u4E2D\u7684\u56FE\u6807\u663E\u793A\u53D8\u5C0F\u7684\u95EE\u9898\u3002'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\uD83D\uDC1E \u4FEE\u590D\u4F1A\u5BFC\u81F4 Button \u4E2D\u7684\u56FE\u6807\u663E\u793A\u53D8\u5C0F\u7684\u95EE\u9898\u3002'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\uD83D\uDC1E \u4FEE\u590D\u4F1A\u5BFC\u81F4 Button \u4E2D\u7684\u56FE\u6807\u663E\u793A\u53D8\u5C0F\u7684\u95EE\u9898\u3002'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\uD83D\uDC1E \u4FEE\u590D\u4F1A\u5BFC\u81F4 Button \u4E2D\u7684\u56FE\u6807\u663E\u793A\u53D8\u5C0F\u7684\u95EE\u9898\u3002'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\uD83D\uDC1E \u4FEE\u590D\u4F1A\u5BFC\u81F4 Button \u4E2D\u7684\u56FE\u6807\u663E\u793A\u53D8\u5C0F\u7684\u95EE\u9898\u3002'
            )
          )
        )
      );
    }
  }]);
  return Version;
}(_react2.default.Component);

exports.default = Version;