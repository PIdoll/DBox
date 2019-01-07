'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function (_React$Component) {
  (0, _inherits3.default)(Row, _React$Component);

  function Row() {
    (0, _classCallCheck3.default)(this, Row);
    return (0, _possibleConstructorReturn3.default)(this, (Row.__proto__ || (0, _getPrototypeOf2.default)(Row)).apply(this, arguments));
  }

  (0, _createClass3.default)(Row, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          className = _props.className,
          gutter = _props.gutter,
          style = _props.style,
          children = _props.children,
          type = _props.type,
          justify = _props.justify,
          align = _props.align,
          others = (0, _objectWithoutProperties3.default)(_props, ['className', 'gutter', 'style', 'children', 'type', 'justify', 'align']);

      var classes = (0, _classnames2.default)((_classNames = {
        'idoll-row': !type
      }, (0, _defineProperty3.default)(_classNames, 'idoll-row-' + type, type), (0, _defineProperty3.default)(_classNames, 'idoll-row-' + type + '-' + justify, justify), (0, _defineProperty3.default)(_classNames, 'idoll-row-' + type + '-' + align, align), (0, _defineProperty3.default)(_classNames, className, !!className), _classNames));
      // 如果有gutter这个参数
      var rowStyle = gutter > 0 ? (0, _extends3.default)({
        marginLeft: gutter / -2,
        marginRight: gutter / -2
      }, style) : style;

      var cols = _react.Children.map(children, function (col) {
        if (!col) {
          return null;
        }
        if (col.props) {
          return (0, _react.cloneElement)(col, {
            style: gutter > 0 ? (0, _extends3.default)({
              paddingLeft: gutter / 2,
              paddingRight: gutter / 2
            }, col.props.style) : col.props.style
          });
        }
        return col;
      });
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, others, { className: classes, style: rowStyle }),
        cols
      );
    }
  }]);
  return Row;
}(_react2.default.Component);

Row.defulatProps = {
  gutter: 0
};
Row.propTypes = {
  type: _propTypes2.default.string,
  align: _propTypes2.default.string,
  justify: _propTypes2.default.string,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  gutter: _propTypes2.default.number,
  style: _propTypes2.default.object
};
exports.default = Row;