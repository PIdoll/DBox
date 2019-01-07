'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

exports.generateShowHourMinutesSecond = generateShowHourMinutesSecond;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _TimePicker = require('rc-time-picker/lib/TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _LocaleReceiver = require('../locale-provider/LocaleReceiver');

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _interopDefault = require('../_util/interopDefault');

var _interopDefault2 = _interopRequireDefault(_interopDefault);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateShowHourMinutesSecond(format) {
  return {
    showHour: format.indexOf('H') > -1 || format.indexOf('h') > -1 || format.indexOf('k') > -1,
    showMinute: format.indexOf('m') > -1,
    showSecond: format.indexOf('s') > -1
  };
}
// import { polyfill } from 'react-lifecycles-compat';
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-unused-expressions */
/* eslint-disable func-call-spacing */


function handleTimeFormat(timeValue) {
  if (timeValue < 10) {
    timeValue = '0' + timeValue;
  }
  return timeValue;
}

var TimePicker = function (_React$Component) {
  (0, _inherits3.default)(TimePicker, _React$Component);
  (0, _createClass3.default)(TimePicker, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return { value: nextProps.value };
      }
      return null;
    }
  }]);

  function TimePicker(props) {
    (0, _classCallCheck3.default)(this, TimePicker);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TimePicker.__proto__ || (0, _getPrototypeOf2.default)(TimePicker)).call(this, props));

    _initialiseProps.call(_this);

    var value = props.value || props.defaultValue;
    if (value && !(0, _interopDefault2.default)(_moment2.default).isMoment(value)) {
      throw new Error('');
    }
    _this.state = {
      value: value,
      defaultOpenValue: null
    };
    return _this;
  }

  (0, _createClass3.default)(TimePicker, [{
    key: 'focus',
    value: function focus() {
      this.timePickerRef.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.timePickerRef.blur();
    }
  }, {
    key: 'getDefaultFormat',
    value: function getDefaultFormat() {
      var _props = this.props,
          format = _props.format,
          use12Hours = _props.use12Hours;

      if (format) {
        return format;
      } else if (use12Hours) {
        return 'h:mm:ss a';
      }
      return 'HH:mm:ss';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _LocaleReceiver2.default,
        {
          componentName: 'TimePicker',
          defaultLocale: _zh_CN2.default },
        this.renderTimePicker
      );
    }
  }]);
  return TimePicker;
}(_react2.default.Component);
// polyfill(TimePicker);

TimePicker.propTypes = {
  className: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['large', 'default', 'small']),
  open: _propTypes2.default.bool,
  format: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onOpenChange: _propTypes2.default.func,
  disabled: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  prefixCls: _propTypes2.default.string,
  hideDisabledOptions: _propTypes2.default.bool,
  disabledHours: _propTypes2.default.func,
  disabledMinutes: _propTypes2.default.func,
  disabledSeconds: _propTypes2.default.func,
  style: _propTypes2.default.object,
  getPopupContainer: _propTypes2.default.func,
  addon: _propTypes2.default.func,
  use12Hours: _propTypes2.default.bool,
  focusOnOpen: _propTypes2.default.bool,
  hourStep: _propTypes2.default.number,
  minuteStep: _propTypes2.default.number,
  secondStep: _propTypes2.default.number,
  allowEmpty: _propTypes2.default.bool,
  inputReadOnly: _propTypes2.default.bool,
  clearText: _propTypes2.default.string,
  popupClassName: _propTypes2.default.string,
  suffixIcon: _propTypes2.default.element,
  align: _propTypes2.default.object,
  placement: _propTypes2.default.string,
  transitionName: _propTypes2.default.string,
  autoFocus: _propTypes2.default.bool
};
TimePicker.defaultProps = {
  prefixCls: 'idoll-time-picker',
  align: {
    offset: [0, -2]
  },
  disabled: false,
  disabledHours: undefined,
  disabledMinutes: undefined,
  disabledSeconds: undefined,
  hideDisabledOptions: false,
  placement: 'bottomLeft',
  transitionName: 'slide-up',
  focusOnOpen: true
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleChange = function (value) {
    if (!('value' in _this2.props)) {
      _this2.setState({ value: value });
    }
    var _props2 = _this2.props,
        onChange = _props2.onChange,
        _props2$format = _props2.format,
        format = _props2$format === undefined ? 'HH:mm:ss' : _props2$format;

    if (onChange) {
      onChange(value, value && value.format(format) || '');
    }
  };

  this.handleOpenClose = function (open) {
    var date = new Date();
    var timeValue = handleTimeFormat(date.getHours()) + ':' + handleTimeFormat(date.getMinutes()) + ':' + handleTimeFormat(date.getSeconds());
    _this2.setState({
      defaultOpenValue: (0, _moment2.default)(timeValue, 'HH:mm:ss')
    });
    var onOpenChange = _this2.props.onOpenChange;

    if (onOpenChange) {
      onOpenChange(open);
    }
  };

  this.saveTimePicker = function (timePickerRef) {
    _this2.timePickerRef = timePickerRef;
  };

  this.renderTimePicker = function (locale) {
    var _classNames2;

    console.log(_this2.props);
    var props = (0, _extends3.default)({}, _this2.props);
    delete props.defaultValue;

    var format = _this2.getDefaultFormat();
    var className = (0, _classnames2.default)(props.className, (0, _defineProperty3.default)({}, props.prefixCls + '-' + props.size, !!props.size));

    var addon = function addon(panel) {
      return props.addon ? _react2.default.createElement(
        'div',
        { className: props.prefixCls + '-panel-addon' },
        props.addon(panel)
      ) : null;
    };

    var suffixIcon = props.suffixIcon,
        prefixCls = props.prefixCls;

    var clockIcon = suffixIcon && (_react2.default.isValidElement(suffixIcon) ? _react2.default.cloneElement(suffixIcon, {
      className: (0, _classnames2.default)((_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, suffixIcon.props.className, suffixIcon.props.className), (0, _defineProperty3.default)(_classNames2, prefixCls + '-clock-icon', true), _classNames2))
    }) : _react2.default.createElement(
      'span',
      { className: prefixCls + '-clock-icon' },
      suffixIcon
    )) || _react2.default.createElement(_icon2.default, {
      type: 'clock-o',
      className: prefixCls + '-clock-icon',
      theme: 'outlined' });

    var inputIcon = _react2.default.createElement(
      'span',
      { className: prefixCls + '-icon' },
      clockIcon
    );

    var clearIcon = _react2.default.createElement(_icon2.default, {
      type: 'close-circle',
      className: prefixCls + '-panel-clear-btn-icon',
      theme: 'filled' });
    return _react2.default.createElement(_TimePicker2.default, (0, _extends3.default)({}, generateShowHourMinutesSecond(format), props, {
      defaultOpenValue: _this2.state.defaultOpenValue,
      ref: _this2.saveTimePicker,
      format: format,
      className: className,
      value: _this2.state.value,
      placeholder: props.placeholder === undefined ? locale.placeholder : props.placeholder,
      onChange: _this2.handleChange,
      onOpen: _this2.handleOpenClose,
      onClose: _this2.handleOpenClose,
      addon: addon,
      inputIcon: inputIcon,
      clearIcon: clearIcon }));
  };
};

exports.default = TimePicker;