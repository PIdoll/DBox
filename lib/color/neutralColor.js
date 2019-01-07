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

var neutralColor = [{ title: 'TableHeader', value: '#FAFAFA', description: '用于表格的标题行背景。', bgColor: '#FAFAFA', color: '#000000' }, { title: 'Background', value: '#F8F8F8', description: '用于页面级的背景。', bgColor: '#F8F8F8', color: '#000000' }, { title: 'Divider', value: '#F5F5F5', description: '用于分割线。', bgColor: '#F5F5F5', color: '#000000' }, { title: 'Border', value: '#E2E2E2', description: '用于边框，含实线和虚线。', bgColor: '#E2E2E2', color: '#000000' }, { title: 'Disable_Text', value: '#000000 20%', description: '用于禁用文字的颜色，图标置灰。', bgColor: 'rgba(0,0,0,.2)', color: '#ffffff' }, { title: 'Secondary_Text', value: '#000000 40%', description: '用于次要文字颜色，图标默认颜色。（注：图标默认颜色比文字默认颜色低一个层级，弱化装饰元素）', bgColor: 'rgba(0,0,0,.4)', color: '#ffffff' }, { title: 'Body_Text', value: '#000000 60%', description: '用于默认文字颜色，图标Hover颜色。', bgColor: 'rgba(0,0,0,.6)', color: '#ffffff' }, { title: 'Title_Text', value: '#000000 80%', description: '用于标题文字的颜色，图标Pressed颜色。', bgColor: 'rgba(0,0,0,.8)', color: '#ffffff' }, { title: 'DisableText', value: '#FFFFFF 40%', description: '用于禁用文字颜色，图标置灰。', bgColor: 'rgba(255,255,255,.4)', color: '#000000' }, { title: 'Secondary', value: '#FFFFFF 60%', description: '用于次要文字颜色，图标默认颜色。', bgColor: 'rgba(255,255,255,.6)', color: '#000000' }, { title: 'Body', value: '#FFFFFF 80%', description: '用于主要（默认）文字颜色，图标Hover颜色。', bgColor: 'rgba(255,255,255,.8)', color: '#000000' }, { title: 'Title', value: '#FFFFFF', description: '用于标题文字颜色，图标Pressed颜色。', bgColor: 'rgba(255,255,255,1)', color: '#000000' }];

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
          '\u4E2D\u6027\u8272\uFF08Neutral Colors\uFF09'
        ),
        _react2.default.createElement(
          'p',
          { className: 'idoll-color-p' },
          'DBox \u7684\u4E2D\u6027\u8272\u662F\u5177\u6709\u4E0D\u540C\u7A0B\u5EA6\u7684\u9971\u548C\u5EA6\u548C\u900F\u660E\u5EA6\u7684\u65E0\u8272\u5F69\u7EC4\u6210\uFF0C\u901A\u5E38\u7528\u4E8E\u6587\u672C\u754C\u9762\u548C\u4E0D\u9700\u8981\u7528\u6237\u8FC7\u591A\u5173\u6CE8\u7684\u7279\u5B9A\u4FE1\u606F\u7684\u5C55\u793A\u3002'
        ),
        _react2.default.createElement(
          _grid.Row,
          { gutter: 16 },
          neutralColor.map(function (item, index) {
            return _react2.default.createElement(
              _grid.Col,
              { span: 6, key: index },
              _react2.default.createElement(
                'dl',
                { className: 'idoll-color-item ' },
                _react2.default.createElement(
                  'dt',
                  { className: 'idoll-color-item-title', style: { backgroundColor: item.bgColor, color: item.color } },
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