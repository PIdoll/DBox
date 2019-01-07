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

var primaryColor = [{ title: 'Primary', value: '#13B886', description: '用于主要操作和按钮，链接，重要信息突出显示、以及进度指示和身份验证等场景。', bgColor: '#13B886', color: '#ffffff' }, { title: 'Black', value: '#000000', description: '用于主要操作和按钮，链接，重要信息突出显示、以及进度指示和身份验证等场景。', bgColor: '#000000', color: '#ffffff' }, { title: 'White', value: '#ffffff', description: '用于主要操作和按钮，链接，重要信息突出显示、以及进度指示和身份验证等场景。', bgColor: '#ffffff', color: '#000000' }];

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
        _react2.default.createElement(
          'h2',
          { className: 'idoll-color-h3' },
          '\u4E3B\u8272\uFF08Primary Colors)'
        ),
        _react2.default.createElement(
          'p',
          { className: 'idoll-color-p' },
          'DBox \u7684\u4E3B\u8981\u8272\u677F\u7531\u7EFF\u8272\u3001\u9ED1\u8272\u548C\u767D\u8272\u7EC4\u6210\u3002\u8FD9\u4E9B\u989C\u8272\u5B58\u5728\u4E8E\u6574\u4E2A\u7CFB\u7EDF\u7684\u6240\u6709\u9875\u9762\u4E4B\u4E2D\u3002\u5176\u4E2D\uFF0CEmeriald Green\uFF08\u5B9D\u77F3\u7EFF\uFF09 \u662F\u6211\u4EEC\u7684\u54C1\u724C\u8272\uFF0C\u5BD3\u610F\u521B\u65B0\u3001\u6D3B\u529B\u3001\u4EF7\u503C\u3002'
        ),
        _react2.default.createElement(
          _grid.Row,
          { gutter: 16 },
          primaryColor.map(function (item, index) {
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
        ),
        _react2.default.createElement(
          _grid.Row,
          { gutter: 48 },
          _react2.default.createElement(
            'h3',
            { className: 'idoll-color-main-title' },
            '\u63A8\u8350\u4E3B\u8272'
          ),
          _react2.default.createElement(
            _grid.Col,
            { span: 10 },
            _react2.default.createElement(
              'span',
              { className: 'idoll-color-recommend1' },
              '#FF5F3F'
            ),
            _react2.default.createElement(
              'span',
              { className: 'idoll-color-recommend2' },
              '#FF9933'
            ),
            _react2.default.createElement(
              'span',
              { className: 'idoll-color-recommend3' },
              '#666699'
            ),
            _react2.default.createElement(
              'span',
              { className: 'idoll-color-recommend4' },
              '#549FFF'
            )
          ),
          _react2.default.createElement(
            _grid.Col,
            { span: 10 },
            _react2.default.createElement(
              'span',
              { className: 'idoll-color-recommend1' },
              '#FF7457'
            ),
            _react2.default.createElement(
              'span',
              { className: 'idoll-color-recommend2' },
              '#FF9966'
            ),
            _react2.default.createElement(
              'span',
              { className: 'idoll-color-recommend3' },
              '#13B886'
            ),
            _react2.default.createElement(
              'span',
              { className: 'idoll-color-recommend4' },
              '#336699'
            )
          )
        )
      );
    }
  }]);
  return Color;
}(_react2.default.Component);

exports.default = Color;