'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BreadcrumbItem = function (_React$Component) {
  (0, _inherits3.default)(BreadcrumbItem, _React$Component);

  function BreadcrumbItem() {
    (0, _classCallCheck3.default)(this, BreadcrumbItem);
    return (0, _possibleConstructorReturn3.default)(this, (BreadcrumbItem.__proto__ || (0, _getPrototypeOf2.default)(BreadcrumbItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(BreadcrumbItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          separator = _props.separator,
          children = _props.children,
          restProps = (0, _objectWithoutProperties3.default)(_props, ['prefixCls', 'separator', 'children']);

      var link = void 0;
      if ('href' in this.props) {
        link = _react2.default.createElement(
          'a',
          (0, _extends3.default)({ className: prefixCls + '-link' }, restProps),
          children
        );
      } else {
        link = _react2.default.createElement(
          'span',
          (0, _extends3.default)({ className: prefixCls + '-link' }, restProps),
          children
        );
      }
      if (children) {
        return _react2.default.createElement(
          'span',
          null,
          link,
          _react2.default.createElement(
            'span',
            { className: prefixCls + '-separator' },
            separator
          )
        );
      }
      return null;
    }
  }]);
  return BreadcrumbItem;
}(_react2.default.Component);

BreadcrumbItem.__IDOLL_BREADCRUMB_ITEM = true;
BreadcrumbItem.defaultProps = {
  prefixCls: 'idoll-breadcrumb',
  separator: '/'
};
BreadcrumbItem.proprTypes = {
  prefixCls: _propTypes2.default.string,
  separator: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  href: _propTypes2.default.string
};
exports.default = BreadcrumbItem;