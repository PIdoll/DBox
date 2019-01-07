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

var _Font = require('../../assets/images/Font.png');

var _Font2 = _interopRequireDefault(_Font);

var _typography = require('./typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Typography = function (_React$Component) {
  (0, _inherits3.default)(Typography, _React$Component);

  function Typography() {
    (0, _classCallCheck3.default)(this, Typography);
    return (0, _possibleConstructorReturn3.default)(this, (Typography.__proto__ || (0, _getPrototypeOf2.default)(Typography)).apply(this, arguments));
  }

  (0, _createClass3.default)(Typography, [{
    key: 'handelRender',
    value: function handelRender(item) {
      var children = [];
      item.map(function (listItem, index) {
        children.push(_react2.default.createElement(
          'dl',
          { key: index },
          _react2.default.createElement(
            'dt',
            null,
            listItem.name
          ),
          _react2.default.createElement(
            'dd',
            null,
            listItem.fontSize
          ),
          _react2.default.createElement(
            'dd',
            null,
            listItem.fontWeight
          ),
          _react2.default.createElement(
            'dd',
            null,
            listItem.color
          ),
          _react2.default.createElement(
            'dd',
            null,
            listItem.opacity
          )
        ));
      });
      return children;
    }
  }, {
    key: 'handleRenderUi',
    value: function handleRenderUi(item) {
      var children = [];
      item.map(function (listUi, index) {
        children.push(_react2.default.createElement(
          'dl',
          { key: index },
          _react2.default.createElement(
            'dt',
            null,
            listUi.name
          ),
          _react2.default.createElement(
            'dd',
            null,
            listUi.lineHeight
          ),
          _react2.default.createElement(
            'dd',
            null,
            listUi.MarginTop
          )
        ));
      });
      return children;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement('img', { className: 'idoll-typography-img', src: _Font2.default }),
        _react2.default.createElement(
          'div',
          { className: 'idoll-typography-title' },
          _react2.default.createElement(
            'h3',
            null,
            '\u5B57\u4F53\u4EE3\u7801'
          ),
          _react2.default.createElement(
            'p',
            null,
            'font-family: -apple-system, BlinkMacSystemFont, "PingFang SC" , "Hiragino Sans GB" , "Microsoft YaHei" , "Helvetica Neue" , Helvetica , Arial , sans-serif ;'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'idoll-typography-title' },
          _react2.default.createElement(
            'h3',
            null,
            '\u63A8\u8350\u7528\u6CD5'
          ),
          _react2.default.createElement(
            'p',
            null,
            'DBox \u63D0\u4F9B\u4E86\u4E00\u5957\u5B8C\u6574\u7684\u6807\u51C6\u5B57\u4F53\uFF0C\u5E76\u63D0\u4F9B\u5EFA\u8BAE\u7528\u6CD5\uFF0C\u4EE5\u5E2E\u52A9\u4F7F\u7528\u8005\u66F4\u597D\u7684\u7406\u89E3\u548C\u4F7F\u7528\u672C\u5957\u7CFB\u7EDF\u3002'
          )
        ),
        _typography2.default.map(function (item, index) {
          return _react2.default.createElement(
            _grid.Row,
            { key: index, className: 'idoll-typography-wrap' },
            _react2.default.createElement(
              _grid.Col,
              { span: 9 },
              _react2.default.createElement(
                'h4',
                { style: { fontSize: item.size }, className: 'idoll-typography-h4' },
                item.title
              ),
              _react2.default.createElement(
                'p',
                null,
                item.description
              )
            ),
            _react2.default.createElement(
              _grid.Col,
              { span: 8 },
              _this2.handelRender(item.basic)
            ),
            _react2.default.createElement(
              _grid.Col,
              { span: 7 },
              _this2.handleRenderUi(item.ui)
            )
          );
        })
      );
    }
  }]);
  return Typography;
}(_react2.default.Component);

exports.default = Typography;