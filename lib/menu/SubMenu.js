'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubMenu = function (_React$Component) {
  (0, _inherits3.default)(SubMenu, _React$Component);

  function SubMenu() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SubMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SubMenu.__proto__ || (0, _getPrototypeOf2.default)(SubMenu)).call.apply(_ref, [this].concat(args))), _this), _this.onKeyDown = function (e) {
      _this.subMenu.onKeyDown(e);
    }, _this.saveSubMenu = function (node) {
      _this.subMenu = node;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SubMenu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          rootPrefixCls = _props.rootPrefixCls,
          className = _props.className;

      return _react2.default.createElement(_rcMenu.SubMenu, (0, _extends3.default)({}, this.props, {
        ref: this.saveSubMenu,
        popupClassName: (0, _classnames2.default)(rootPrefixCls + '-' + this.context.idollMenuTheme, className)
      }));
    }
  }]);
  return SubMenu;
}(_react2.default.Component);

SubMenu.propTypes = {
  disabled: _propTypes2.default.bool,
  indexkey: _propTypes2.default.string,
  children: _propTypes2.default.array,
  onTitleClick: _propTypes2.default.func
};
SubMenu.contextTypes = {
  idollMenuTheme: _propTypes2.default.string
};
exports.default = SubMenu;