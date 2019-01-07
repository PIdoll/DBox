'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _rcCheckbox = require('rc-checkbox');

var _rcCheckbox2 = _interopRequireDefault(_rcCheckbox);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function (_React$Component) {
  (0, _inherits3.default)(Checkbox, _React$Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.saveCheckbox = function (node) {
      _this.rcCheckbox = node;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  // 在这里声明 contextTypes 用于访问 checkboxGroup 组件中定义的Context数据.


  (0, _createClass3.default)(Checkbox, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowequal2.default)(this.props, nextProps) || !(0, _shallowequal2.default)(this.state, nextState) || !(0, _shallowequal2.default)(this.context.checkboxGroup, nextContext.checkboxGroup);
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.rcCheckbox.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.rcCheckbox.blur();
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props,
          context = this.context;
      var _props = this.props,
          prefixCls = _props.prefixCls,
          className = _props.className,
          children = _props.children,
          indeterminate = _props.indeterminate,
          style = _props.style,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          restProps = (0, _objectWithoutProperties3.default)(_props, ['prefixCls', 'className', 'children', 'indeterminate', 'style', 'onMouseEnter', 'onMouseLeave']);
      var checkboxGroup = context.checkboxGroup;

      var checkboxProps = (0, _extends3.default)({}, restProps);
      if (checkboxGroup) {
        checkboxProps.onChange = function () {
          return checkboxGroup.toggleOption({ label: children, value: props.value });
        };
        checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !== -1;
        checkboxProps.disabled = checkboxGroup.disabled || props.disabled;
      }
      var classString = (0, _classnames2.default)(className, (0, _defineProperty3.default)({}, prefixCls + '-wrapper', true));
      var checkboxClass = (0, _classnames2.default)((0, _defineProperty3.default)({}, prefixCls + '-indeterminate', indeterminate));
      return _react2.default.createElement(
        'label',
        { className: classString, style: style, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
        _react2.default.createElement(_rcCheckbox2.default, (0, _extends3.default)({}, checkboxProps, { prefixCls: prefixCls, className: checkboxClass, ref: this.saveCheckbox })),
        children !== undefined ? _react2.default.createElement(
          'span',
          null,
          children
        ) : null
      );
    }
  }]);
  return Checkbox;
}(_react2.default.Component);

Checkbox.defaultProps = {
  prefixCls: 'idoll-checkbox',
  indeterminate: false };
Checkbox.contextTypes = {
  checkboxGroup: _propTypes2.default.any
};
exports.default = Checkbox;