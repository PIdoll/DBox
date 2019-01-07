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

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _rcCalendar = require('rc-calendar');

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _Picker = require('rc-calendar/lib/Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _interopDefault = require('../_util/interopDefault');

var _interopDefault2 = _interopRequireDefault(_interopDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatValue(value, format) {
  return value && (0, _moment2.default)(value).format(format) || '';
}

var WeekPicker = function (_React$Component) {
  (0, _inherits3.default)(WeekPicker, _React$Component);
  (0, _createClass3.default)(WeekPicker, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return { value: nextProps.value };
      }
      return null;
    }
  }]);

  function WeekPicker(props) {
    (0, _classCallCheck3.default)(this, WeekPicker);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WeekPicker.__proto__ || (0, _getPrototypeOf2.default)(WeekPicker)).call(this, props));

    _initialiseProps.call(_this);

    var value = props.value || props.defaultValue;
    if (value && !(0, _interopDefault2.default)(_moment2.default).isMoment(value)) {
      throw new Error();
    }
    _this.state = {
      value: value
    };
    return _this;
  }

  (0, _createClass3.default)(WeekPicker, [{
    key: 'focus',
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          className = _props.className,
          disabled = _props.disabled,
          pickerClass = _props.pickerClass,
          popupStyle = _props.popupStyle,
          pickerInputClass = _props.pickerInputClass,
          format = _props.format,
          allowClear = _props.allowClear,
          locale = _props.locale,
          localeCode = _props.localeCode,
          disabledDate = _props.disabledDate,
          style = _props.style,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          id = _props.id,
          suffixIcon = _props.suffixIcon;


      var pickerValue = this.state.value;
      if (pickerValue && localeCode) {
        (0, _moment2.default)(pickerValue).locale(localeCode);
      }

      var placeholder = 'placeholder' in this.props ? this.props.placeholder : locale.lang.placeholder;

      var calendar = _react2.default.createElement(_rcCalendar2.default, {
        showWeekNumber: true,
        dateRender: this.weekDateRender,
        prefixCls: prefixCls,
        format: format,
        locale: locale.lang,
        showDateInput: false,
        showToday: false,
        disabledDate: disabledDate });

      var clearIcon = !disabled && allowClear && this.state.value ? _react2.default.createElement(_icon2.default, {
        type: 'close-circle',
        className: prefixCls + '-picker-clear',
        onClick: this.clearSelection,
        theme: 'filled' }) : null;

      var inputIcon = suffixIcon && (_react2.default.isValidElement(suffixIcon) ? _react2.default.cloneElement(suffixIcon, {
        className: (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, suffixIcon.props.className, suffixIcon.props.className), (0, _defineProperty3.default)(_classNames, prefixCls + '-picker-icon', true), _classNames))
      }) : _react2.default.createElement(
        'span',
        { className: prefixCls + '-picker-icon' },
        suffixIcon
      )) || _react2.default.createElement(_icon2.default, { type: 'calendar', className: prefixCls + '-picker-icon' });

      var input = function input(_ref) {
        var value = _ref.value;

        return _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement('input', {
            ref: _this2.saveInput,
            disabled: disabled,
            readOnly: true,
            value: value && (0, _moment2.default)(value).format(format) || '',
            placeholder: placeholder,
            className: pickerInputClass,
            onFocus: onFocus,
            onBlur: onBlur }),
          clearIcon,
          inputIcon
        );
      };
      return _react2.default.createElement(
        'span',
        {
          className: (0, _classnames2.default)(className, pickerClass),
          style: style,
          id: id },
        _react2.default.createElement(
          _Picker2.default,
          (0, _extends3.default)({}, this.props, {
            calendar: calendar,
            prefixCls: prefixCls + '-picker-container',
            value: pickerValue,
            onChange: this.handleChange,
            style: popupStyle }),
          input
        )
      );
    }
  }]);
  return WeekPicker;
}(_react2.default.Component);

WeekPicker.propTypes = {
  format: _propTypes2.default.string,
  allowClear: _propTypes2.default.bool,
  prefixCls: _propTypes2.default.string,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  pickerClass: _propTypes2.default.string,
  popupStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  suffixIcon: _propTypes2.default.element,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  disabledDate: _propTypes2.default.func,
  locale: _propTypes2.default.object,
  localeCode: _propTypes2.default.object
};
WeekPicker.defaultProps = {
  format: 'gggg-wo',
  allowClear: true
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.weekDateRender = function (current) {
    var selectedValue = _this3.state.value;
    var prefixCls = _this3.props.prefixCls;

    if (selectedValue && (0, _moment2.default)(current).year() === (0, _moment2.default)(selectedValue).year() && (0, _moment2.default)(current).week() === (0, _moment2.default)(selectedValue).week()) {
      return _react2.default.createElement(
        'div',
        { className: prefixCls + '-selected-day' },
        _react2.default.createElement(
          'div',
          { className: prefixCls + '-date' },
          (0, _moment2.default)(current).date()
        )
      );
    }
    return _react2.default.createElement(
      'div',
      { className: prefixCls + '-date' },
      (0, _moment2.default)(current).date()
    );
  };

  this.handleChange = function (value) {
    if (!('value' in _this3.props)) {
      _this3.setState({ value: value });
    }
    _this3.props.onChange(value, formatValue(value, _this3.props.format));
    _this3.focus();
  };

  this.clearSelection = function (e) {
    e.preventDefault();
    e.stopPropagation();
    _this3.handleChange(null);
  };

  this.saveInput = function (node) {
    _this3.input = node;
  };
};

(0, _reactLifecyclesCompat.polyfill)(WeekPicker);

exports.default = WeekPicker;