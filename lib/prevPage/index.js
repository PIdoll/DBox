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

var _index = require('../grid/index');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageView = function (_React$Component) {
  (0, _inherits3.default)(PageView, _React$Component);

  function PageView() {
    (0, _classCallCheck3.default)(this, PageView);
    return (0, _possibleConstructorReturn3.default)(this, (PageView.__proto__ || (0, _getPrototypeOf2.default)(PageView)).apply(this, arguments));
  }

  (0, _createClass3.default)(PageView, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _index.Row,
        { type: 'flex', justify: 'space-between', align: 'middle', className: 'prevNextNav' },
        _react2.default.createElement(
          _index.Col,
          null,
          _react2.default.createElement(
            'a',
            { className: 'prevPage', href: 'javascript:;' },
            _react2.default.createElement(_icon2.default, { type: 'pro-left', className: 'prevIcon' }),
            _react2.default.createElement(
              'span',
              null,
              '\u4E0A\u4E00\u9875'
            )
          )
        ),
        _react2.default.createElement(
          _index.Col,
          null,
          _react2.default.createElement(
            'a',
            { className: 'prevPage' },
            _react2.default.createElement(
              'span',
              null,
              '\u4E0B\u4E00\u9875'
            ),
            _react2.default.createElement(_icon2.default, { type: 'pro-right', className: 'prevIcon prevNext' })
          )
        )
      );
    }
  }]);
  return PageView;
}(_react2.default.Component);

exports.default = PageView;