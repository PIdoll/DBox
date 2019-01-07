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

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = wrapPicker;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Panel = require('rc-time-picker/lib/Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _LocaleReceiver = require('../locale-provider/LocaleReceiver');

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _timePicker = require('../time-picker/timePicker');

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getColumns(_ref) {
  var showHour = _ref.showHour,
      showMinute = _ref.showMinute,
      showSecond = _ref.showSecond,
      use12Hours = _ref.use12Hours;

  var column = 0;
  if (showHour) {
    column += 1;
  }
  if (showMinute) {
    column += 1;
  }
  if (showSecond) {
    column += 1;
  }
  if (use12Hours) {
    column += 1;
  }
  return column;
}

function wrapPicker(Picker, defaultFormat) {
  var _class, _temp2;

  return _temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(PickerWrapper, _React$Component);

    function PickerWrapper() {
      var _ref2;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, PickerWrapper);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = PickerWrapper.__proto__ || (0, _getPrototypeOf2.default)(PickerWrapper)).call.apply(_ref2, [this].concat(args))), _this), _this.handleOpenChange = function (open) {
        var onOpenChange = _this.props.onOpenChange;

        onOpenChange(open);
      }, _this.handleFocus = function (e) {
        var onFocus = _this.props.onFocus;

        if (onFocus) {
          onFocus(e);
        }
      }, _this.hanldeBlur = function (e) {
        var onBlur = _this.props.onBlur;

        if (onBlur) {
          onBlur(e);
        }
      }, _this.handleMouseEnter = function (e) {
        var onMouseEnter = _this.props.onMouseEnter;

        if (onMouseEnter) {
          onMouseEnter(e);
        }
      }, _this.handleMouseLeave = function (e) {
        var onMouseLeave = _this.props.onMouseLeave;

        if (onMouseLeave) {
          onMouseLeave(e);
        }
      }, _this.savePicker = function (node) {
        _this.picker = node;
      }, _this.getDefaultLocale = function () {
        var result = (0, _extends3.default)({}, _zh_CN2.default, _this.props.locale);
        result.lang = (0, _extends3.default)({}, result.lang, (_this.props.locale || {}).lang);
        return result;
      }, _this.renderPicker = function (locale, localeCode) {
        var _classNames2;

        var props = _this.props;
        var prefixCls = props.prefixCls,
            inputPrefixCls = props.inputPrefixCls;

        var pickerClass = (0, _classnames2.default)(prefixCls + '-picker', (0, _defineProperty3.default)({}, prefixCls + '-picker-' + props.size, !!props.size));
        var pickerInputClass = (0, _classnames2.default)(prefixCls + '-picker-input', inputPrefixCls, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, inputPrefixCls + '-lg', props.size === 'large'), (0, _defineProperty3.default)(_classNames2, inputPrefixCls + '-sm', props.size === 'small'), (0, _defineProperty3.default)(_classNames2, inputPrefixCls + '-disabled', props.disabled), _classNames2));

        var timeFormat = props.showTime && props.showTime.format || 'HH:mm:ss';
        var rcTimePickerProps = (0, _extends3.default)({}, (0, _timePicker.generateShowHourMinutesSecond)(timeFormat), {
          format: timeFormat,
          use12Hours: props.showTime && props.showTime.use12Hours
        });
        var columns = getColumns(rcTimePickerProps);
        var timePickerCls = prefixCls + '-time-picker-column-' + columns;
        var timePicker = props.showTime ? _react2.default.createElement(_Panel2.default, (0, _extends3.default)({}, rcTimePickerProps, props.showTime, {
          prefixCls: prefixCls + '-time-picker',
          className: timePickerCls,
          placeholder: locale.timePickerLocale.placeholder,
          transitionName: 'slide-up' })) : null;
        return _react2.default.createElement(Picker, (0, _extends3.default)({}, props, {
          ref: _this.savePicker,
          pickerClass: pickerClass,
          pickerInputClass: pickerInputClass,
          locale: locale,
          localeCode: localeCode,
          timePicker: timePicker,
          onOpenChange: _this.handleOpenChange,
          onFocus: _this.handleFocus,
          onBlur: _this.handleBlur,
          onMouseEnter: _this.handleMouseEnter,
          onMouseLeave: _this.handleMouseLeave }));
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(PickerWrapper, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _props = this.props,
            autoFocus = _props.autoFocus,
            disabled = _props.disabled;

        if (autoFocus && !disabled) {
          this.focus();
        }
      }
    }, {
      key: 'focus',
      value: function focus() {
        this.picker.focus();
      }
    }, {
      key: 'blur',
      value: function blur() {
        this.picker.blur();
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _LocaleReceiver2.default,
          {
            ComponentName: 'DatePicker',
            defaultLocale: this.getDefaultLocale },
          this.renderPicker
        );
      }
    }]);
    return PickerWrapper;
  }(_react2.default.Component), _class.propTypes = {
    format: _propTypes2.default.string,
    transitionName: _propTypes2.default.string,
    popupStyle: _propTypes2.default.object,
    locale: _propTypes2.default.object,
    prefixCls: _propTypes2.default.string,
    inputPrefixCls: _propTypes2.default.string
  }, _class.defaultProps = {
    format: defaultFormat || 'YYYY-MM-DD',
    transitionName: 'slide-up',
    popupStyle: {},
    onChange: function onChange() {},
    onOpenChange: function onOpenChange() {},

    locale: {},
    prefixCls: 'idoll-calendar',
    inputPrefixCls: 'idoll-input'
  }, _temp2;
}