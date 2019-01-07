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

var _grid = require('../grid');

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var otherColor = [{ title: 'Disabled', value: '#F8F9FC', description: '用于不可用状态组件的颜色（白底）。', color: '#000000' }, { title: 'Navbar', value: '#2F323B', description: '用于导航栏的默认背景色。', color: '#ffffff' }];

var OthersColor = function (_React$Component) {
  (0, _inherits3.default)(OthersColor, _React$Component);

  function OthersColor() {
    (0, _classCallCheck3.default)(this, OthersColor);
    return (0, _possibleConstructorReturn3.default)(this, (OthersColor.__proto__ || (0, _getPrototypeOf2.default)(OthersColor)).apply(this, arguments));
  }

  (0, _createClass3.default)(OthersColor, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'h2',
          { className: 'idoll-color-h3' },
          '\u5176\u4ED6\u989C\u8272\uFF08Other Colors\uFF09'
        ),
        _react2.default.createElement(
          'p',
          { className: 'idoll-color-p' },
          'DBox \u7684\u5176\u4ED6\u989C\u8272\u662F\u9664\u4E3B\u8272\u548C\u4E2D\u6027\u8272\u4E4B\u5916\u6709\u8272\u5F69\u7684\u989C\u8272\uFF0C\u76EE\u524D\u5305\u62EC\u7981\u7528\u8272\u548C\u5BFC\u822A\u6761\u80CC\u666F\u3002'
        ),
        _react2.default.createElement(
          _grid.Row,
          { gutter: 16 },
          otherColor.map(function (item, index) {
            return _react2.default.createElement(
              _grid.Col,
              { span: 6, key: index },
              _react2.default.createElement(
                'dl',
                { className: 'idoll-color-item ' },
                _react2.default.createElement(
                  'dt',
                  { className: 'idoll-color-item-title', style: { backgroundColor: item.value, color: item.color } },
                  item.title,
                  _react2.default.createElement(
                    'span',
                    { className: 'idoll-color-item-title-value' },
                    item.value
                  )
                ),
                _react2.default.createElement(
                  'dd',
                  { className: 'idoll-color-item-desc' },
                  item.description
                )
              )
            );
          })
        )
      );
    }
  }]);
  return OthersColor;
}(_react2.default.Component);

exports.default = OthersColor;