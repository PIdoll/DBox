'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _rcMenu = require('rc-menu');

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = function (_React$Component) {
  (0, _inherits3.default)(MenuItem, _React$Component);

  function MenuItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MenuItem.__proto__ || (0, _getPrototypeOf2.default)(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.onKeyDown = function (e) {
      _this.menuItem.onKeyDown(e);
    }, _this.saveMenuItem = function (node) {
      _this.menuItem = node;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MenuItem, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _context = this.context,
          mode = _context.mode,
          idollMenuTheme = _context.idollMenuTheme;
      var _props = this.props,
          level = _props.level,
          rootPrefixCls = _props.rootPrefixCls,
          children = _props.children;

      var menuClassName = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, rootPrefixCls + '-inline-collapsed-tooltip', mode === 'vertical' && level === 1), (0, _defineProperty3.default)(_classNames, rootPrefixCls + '-theme-' + idollMenuTheme, idollMenuTheme), _classNames));
      return mode === 'vertical' && level === 1 ? _react2.default.createElement(
        _tooltip2.default,
        {
          title: children,
          placement: 'right',
          overlayClassName: menuClassName
        },
        _react2.default.createElement(_rcMenu.Item, (0, _extends3.default)({}, this.props, { ref: this.saveMenuItem }))
      ) : _react2.default.createElement(_rcMenu.Item, (0, _extends3.default)({}, this.props, { ref: this.saveMenuItem }));
    }
  }]);
  return MenuItem;
}(_react2.default.Component);

MenuItem.propTypes = {
  disabled: _propTypes2.default.bool,
  indexkey: _propTypes2.default.string
};
MenuItem.contextTypes = {
  mode: _propTypes2.default.string,
  idollMenuTheme: _propTypes2.default.string
};
MenuItem.isMenuItem = 1;
exports.default = MenuItem;