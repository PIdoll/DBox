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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function (_React$Component) {
  (0, _inherits3.default)(Title, _React$Component);

  function Title() {
    (0, _classCallCheck3.default)(this, Title);
    return (0, _possibleConstructorReturn3.default)(this, (Title.__proto__ || (0, _getPrototypeOf2.default)(Title)).apply(this, arguments));
  }

  (0, _createClass3.default)(Title, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          icon = _props.icon,
          title = _props.title,
          size = _props.size,
          ghost = _props.ghost,
          className = _props.className,
          others = (0, _objectWithoutProperties3.default)(_props, ['prefixCls', 'icon', 'title', 'size', 'ghost', 'className']);

      var sizeCls = { large: 'lg', small: 'sm' }[size] || '';
      var iconNode = icon ? _react2.default.createElement(_icon2.default, { type: icon, className: prefixCls + '-icon' }) : _react2.default.createElement('i', { className: prefixCls + '-default' });
      var classString = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls, true), (0, _defineProperty3.default)(_classNames, prefixCls + '-' + sizeCls, sizeCls), (0, _defineProperty3.default)(_classNames, prefixCls + '-background-ghost', ghost), (0, _defineProperty3.default)(_classNames, className, className), _classNames));
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, others, { className: classString }),
        iconNode,
        _react2.default.createElement(
          'span',
          null,
          title
        )
      );
    }
  }]);
  return Title;
}(_react2.default.Component);

Title.defaultProps = {
  prefixCls: 'idoll-title',
  ghost: false,
  title: '标题'
};
Title.propTypes = {
  icon: _propTypes.PropTypes.string,
  title: _propTypes.PropTypes.string,
  className: _propTypes.PropTypes.string
};
exports.default = Title;