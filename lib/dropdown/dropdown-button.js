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

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _propTypes = require('prop-types');

var _dropdown = require('./dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroup = _button2.default.Group;

var DropdownButton = function (_React$Component) {
  (0, _inherits3.default)(DropdownButton, _React$Component);

  function DropdownButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DropdownButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DropdownButton.__proto__ || (0, _getPrototypeOf2.default)(DropdownButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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

  (0, _createClass3.default)(DropdownButton, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          type = _props.type,
          disabled = _props.disabled,
          children = _props.children,
          prefixCls = _props.prefixCls,
          className = _props.className,
          overlay = _props.overlay,
          trigger = _props.trigger,
          size = _props.size,
          align = _props.align,
          visible = _props.visible,
          placement = _props.placement,
          getPopupContainer = _props.getPopupContainer,
          restProps = (0, _objectWithoutProperties3.default)(_props, ['type', 'disabled', 'children', 'prefixCls', 'className', 'overlay', 'trigger', 'size', 'align', 'visible', 'placement', 'getPopupContainer']);

      var dropdownProps = {
        align: align,
        overlay: overlay,
        trigger: disabled ? [] : trigger,
        placement: placement,
        getPopupContainer: getPopupContainer
      };
      var dropdownClassName = (0, _classnames2.default)((_classNames = {
        className: className,
        placement: 'bottomLeft'
      }, (0, _defineProperty3.default)(_classNames, prefixCls, true), (0, _defineProperty3.default)(_classNames, prefixCls + '-disabled', disabled), _classNames));
      if ('visible' in this.props) {
        dropdownProps.visible = visible;
      }
      return _react2.default.createElement(
        ButtonGroup,
        (0, _extends3.default)({}, restProps, {
          className: dropdownClassName
        }),
        _react2.default.createElement(
          _dropdown2.default,
          (0, _extends3.default)({ onOverlayClick: this.onClickChange, disabled: disabled }, dropdownProps, { onVisibleChange: this.onChange }),
          _react2.default.createElement(
            _button2.default,
            { type: type, size: size, disabled: disabled },
            children,
            _react2.default.createElement(_icon2.default, { type: 'down' })
          )
        )
      );
    }
  }]);
  return DropdownButton;
}(_react2.default.Component);

DropdownButton.propTypes = {
  type: _propTypes.PropTypes.string,
  trigger: _propTypes.PropTypes.array,
  overlay: _propTypes.PropTypes.any,
  disabled: _propTypes.PropTypes.bool,
  onClick: _propTypes.PropTypes.func,
  visible: _propTypes.PropTypes.bool,
  placement: _propTypes.PropTypes.string,
  size: _propTypes.PropTypes.string
};
DropdownButton.defaultProps = {
  placement: 'bottomLeft',
  prefixCls: 'idoll-dropdown-button'
};
exports.default = DropdownButton;