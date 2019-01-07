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

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _dropdown = require('./dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownNormal = function (_React$Component) {
  (0, _inherits3.default)(DropdownNormal, _React$Component);

  function DropdownNormal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DropdownNormal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DropdownNormal.__proto__ || (0, _getPrototypeOf2.default)(DropdownNormal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      visible: false
    }, _this.onChange = function (flag) {
      _this.setState({
        visible: flag
      });
    }, _this.onClickChange = function (e) {
      _this.setState({
        visible: e.item.props.isSelected
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DropdownNormal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          overlay = _props.overlay,
          trigger = _props.trigger,
          align = _props.align,
          restProps = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'overlay', 'trigger', 'align']);

      var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'idoll-dropdown-normal': true
      }, className, !!className));
      return _react2.default.createElement(
        _dropdown2.default,
        (0, _extends3.default)({ onOverlayClick: this.onClickChange }, restProps, { className: cls, align: align, overlay: overlay, trigger: trigger, onVisibleChange: this.onChange }),
        _react2.default.createElement(
          'a',
          { href: '#' },
          children,
          _react2.default.createElement(_icon2.default, { type: 'down' })
        )
      );
    }
  }]);
  return DropdownNormal;
}(_react2.default.Component);

exports.default = DropdownNormal;