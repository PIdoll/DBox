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

var functionColor = [{ title: 'Success', value: '#3CCB69', description: '用于成功状态和信息提示和反馈。', color: '#ffffff' }, { title: 'Warning', value: '#F9AA29', description: '用于主要操作和按钮，链接，重要信息突出显示、以及进度指示和身份验证等场景。', color: '#ffffff' }, { title: 'Error', value: '#F44336', description: '用于主要操作和按钮，链接，重要信息突出显示、以及进度指示和身份验证等场景。', color: '#ffffff' }];

var FunctionColor = function (_React$Component) {
  (0, _inherits3.default)(FunctionColor, _React$Component);

  function FunctionColor() {
    (0, _classCallCheck3.default)(this, FunctionColor);
    return (0, _possibleConstructorReturn3.default)(this, (FunctionColor.__proto__ || (0, _getPrototypeOf2.default)(FunctionColor)).apply(this, arguments));
  }

  (0, _createClass3.default)(FunctionColor, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'h2',
          { className: 'idoll-color-h3' },
          '\u529F\u80FD\u8272\uFF08Functional Colors\uFF09'
        ),
        _react2.default.createElement(
          'p',
          { className: 'idoll-color-p' },
          'DBox \u7684\u529F\u80FD\u8272\u7531\u7EFF\u8272\u3001\u9EC4\u8272\u3001\u7EA2\u8272\u7EC4\u6210\uFF0C\u6BCF\u79CD\u989C\u8272\u90FD\u662F\u6709\u76EE\u7684\u6027\u7684\u9009\u62E9\uFF0C\u4EE5\u4FBF\u5728\u4EA7\u54C1\u4E2D\u63D0\u4F9B\u6709\u610F\u4E49\u7684\u53CD\u9988\uFF0C\u4E14\u9075\u4ECE\u7528\u6237\u5BF9\u989C\u8272\u7684\u57FA\u672C\u4E86\u89E3\u548C\u8BA4\u77E5\u4E60\u60EF\u3002'
        ),
        _react2.default.createElement(
          _grid.Row,
          { gutter: 16 },
          functionColor.map(function (item, index) {
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
  return FunctionColor;
}(_react2.default.Component);

exports.default = FunctionColor;