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

var shadowColor = [{ title: 'Small', value: '0 8 16px 0', description: '用于主要操作和按钮，链接，重要信息突出显示、以及进度指示和身份验证等场景。', bgColor: '#ffffff', color: '#000000', shadow: '0px 2px 8px 0px rgba(0,0,0,0.1)' }, { title: 'Large', value: '0px 8px 16px 0px', description: '用于主要操作和按钮，链接，重要信息突出显示、以及进度指示和身份验证等场景。', bgColor: '#ffffff', color: '#000000', shadow: '0px 8px 16px 0px rgba(0,0,0,0.1)' }, { title: 'Button', value: '0px 2px 8px 0px', description: '用于主要操作和按钮，链接，重要信息突出显示、以及进度指示和身份验证等场景。', bgColor: '#13B886', color: '#ffffff', shadow: '0px 2px 8px 0px rgba(19,184,134,0.2)' }];

var ShadowColor = function (_React$Component) {
  (0, _inherits3.default)(ShadowColor, _React$Component);

  function ShadowColor() {
    (0, _classCallCheck3.default)(this, ShadowColor);
    return (0, _possibleConstructorReturn3.default)(this, (ShadowColor.__proto__ || (0, _getPrototypeOf2.default)(ShadowColor)).apply(this, arguments));
  }

  (0, _createClass3.default)(ShadowColor, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'h2',
          { className: 'idoll-color-h3' },
          '\u9634\u5F71\uFF08Shadows\uFF09'
        ),
        _react2.default.createElement(
          'p',
          { className: 'idoll-color-p' },
          'DBox \u7684\u6295\u5F71\u89C4\u8303\u4E86 3 \u79CD\u573A\u666F\uFF0CSmall\u3001Large\u3001Button\uFF0C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u5206\u522B\u53D6\u7528\uFF0C\u57FA\u672C\u80FD\u6EE1\u8DB3\u6240\u6709\u573A\u666F\u3002\u4E3A\u51CF\u5C11\u6837\u5F0F\u5197\u4F59\uFF0C\u6CA1\u6709\u6309\u65B9\u5411\u7EC6\u5206\u3002'
        ),
        _react2.default.createElement(
          _grid.Row,
          { gutter: 16 },
          shadowColor.map(function (item, index) {
            return _react2.default.createElement(
              _grid.Col,
              { span: 6, key: index },
              _react2.default.createElement(
                'dl',
                { className: 'idoll-color-item ' },
                _react2.default.createElement(
                  'dt',
                  { className: 'idoll-color-item-title-shadow', style: { backgroundColor: item.bgColor, color: item.color, boxShadow: item.shadow } },
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
  return ShadowColor;
}(_react2.default.Component);

exports.default = ShadowColor;