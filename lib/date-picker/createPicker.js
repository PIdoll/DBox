'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = createPicker;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _MonthCalendar = require('rc-calendar/lib/MonthCalendar');

var _MonthCalendar2 = _interopRequireDefault(_MonthCalendar);

var _Picker = require('rc-calendar/lib/Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _interopDefault = require('../_util/interopDefault');

var _interopDefault2 = _interopRequireDefault(_interopDefault);

var _getDataOrAriaProps = require('../_util/getDataOrAriaProps');

var _getDataOrAriaProps2 = _interopRequireDefault(_getDataOrAriaProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 设置全局时间语言环境

// import warning from '../_util/warning';
_moment2.default.locale('zh_cn');

function createPicker(TheCalendar) {
  var CalendarWrapper = function (_React$Component) {
    (0, _inherits3.default)(CalendarWrapper, _React$Component);
    (0, _createClass3.default)(CalendarWrapper, null, [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var state = null;
        if ('value' in nextProps) {
          state = {
            value: nextProps.value
          };
          if (nextProps.value !== prevState.value) {
            state = (0, _extends3.default)({}, state, {
              showDate: nextProps.value
            });
          }
        }
        return state;
      }
    }]);

    function CalendarWrapper(props) {
      (0, _classCallCheck3.default)(this, CalendarWrapper);

      var _this = (0, _possibleConstructorReturn3.default)(this, (CalendarWrapper.__proto__ || (0, _getPrototypeOf2.default)(CalendarWrapper)).call(this, props));

      _initialiseProps.call(_this);

      var value = props.value || props.defaultValue;
      if (value && !(0, _interopDefault2.default)(_moment2.default).isMoment(value)) {
        throw new Error('');
      }
      _this.state = {
        value: value,
        showDate: value
      };
      return _this;
    }

    (0, _createClass3.default)(CalendarWrapper, [{
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
            _classNames2,
            _this2 = this;

        var _state = this.state,
            value = _state.value,
            showDate = _state.showDate;

        var props = (0, _omit2.default)(this.props, ['onChange']);
        var prefixCls = props.prefixCls,
            locale = props.locale,
            localeCode = props.localeCode,
            suffixIcon = props.suffixIcon;


        var placeholder = 'placeholder' in props ? props.placeholder : locale.lang.placeholder;

        var disabledTime = props.showTime ? props.disabledTime : null;

        var calendarClassName = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-time', props.showTime), (0, _defineProperty3.default)(_classNames, prefixCls + '-month', _MonthCalendar2.default === TheCalendar), _classNames));

        if (value && localeCode) {
          (0, _moment2.default)(value).locale(localeCode);
        }

        var pickerProps = {};
        var calendarProps = {};
        var pickerStyle = {};
        if (props.showTime) {
          calendarProps = {
            onSelect: this.handleChange
          };
          pickerStyle.width = 195;
        } else {
          pickerProps = {
            onChange: this.handleChange
          };
        }
        if ('mode' in props) {
          calendarProps.mode = props.mode;
        }

        // warning(!('onOk' in props), 'It should be `DatePicker[onOk]` or `MonthPicker[onOk]`, instead of `onOK`!')
        var calendar = _react2.default.createElement(TheCalendar, (0, _extends3.default)({}, calendarProps, {
          disabledDate: props.disabledDate,
          disabledTime: disabledTime,
          locale: locale.lang,
          timePicker: props.timePicker,
          defaultValue: props.defaultPickerValue || (0, _interopDefault2.default)(_moment2.default)(),
          dateInputPlaceholder: placeholder,
          prefixCls: prefixCls,
          className: calendarClassName,
          onOk: props.onOk,
          dateRender: props.dateRender,
          format: props.format,
          showToday: props.showToday,
          monthCellContentRender: props.monthCellContentRender,
          renderFooter: this.renderFooter,
          onPanelChange: props.onPanelChange,
          onChange: this.handleCalendarChange,
          value: showDate }));

        var clearIcon = !props.disabled && props.allowClear && value ? _react2.default.createElement(_icon2.default, {
          type: 'close-circle',
          className: prefixCls + '-picker-clear',
          onClick: this.clearSelection,
          theme: 'filled'
        }) : null;

        var inputIcon = suffixIcon && (_react2.default.isValidElement(suffixIcon) ? _react2.default.cloneElement(suffixIcon, {
          className: (0, _classnames2.default)((_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, suffixIcon.props.className, suffixIcon.props.className), (0, _defineProperty3.default)(_classNames2, prefixCls + '-picker-icon', true), _classNames2))
        }) : _react2.default.createElement(
          'span',
          { className: prefixCls + '-picker-icon' },
          suffixIcon
        )) || _react2.default.createElement(_icon2.default, { type: 'calendar', className: prefixCls + '-picker-icon' });

        var dataOrAriaProps = (0, _getDataOrAriaProps2.default)(props);
        var input = function input(_ref) {
          var inputValue = _ref.value;
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', (0, _extends3.default)({
              ref: _this2.saveInput,
              disabled: props.disabled,
              readOnly: true,
              value: inputValue && inputValue.format(props.format) || '',
              placeholder: placeholder,
              className: props.pickerInputClass
            }, dataOrAriaProps)),
            clearIcon,
            inputIcon
          );
        };
        return _react2.default.createElement(
          'span',
          {
            id: props.id,
            className: (0, _classnames2.default)(props.className, props.pickerClass),
            style: (0, _extends3.default)({}, pickerStyle, props.style),
            onFocus: props.onFocus,
            onBlur: props.onBlur,
            onMouseEnter: props.onMouseEnter,
            onMouseLeave: props.onMouseLeave },
          _react2.default.createElement(
            _Picker2.default,
            (0, _extends3.default)({}, props, pickerProps, {
              calendar: calendar,
              value: value,
              prefixCls: prefixCls + '-picker-container',
              style: props.popupStyle }),
            input
          )
        );
      }
    }]);
    return CalendarWrapper;
  }(_react2.default.Component);

  CalendarWrapper.propTypes = {
    prefixCls: _propTypes2.default.string,
    allowClear: _propTypes2.default.bool,
    showToday: _propTypes2.default.bool,
    onFocus: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    locale: _propTypes2.default.object,
    suffixIcon: _propTypes2.default.element,
    style: _propTypes2.default.object
  };
  CalendarWrapper.defaultProps = {
    prefixCls: 'idoll-calendar',
    allowClear: true,
    showToday: false
  };

  var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.renderFooter = function () {
      var _props = _this3.props,
          prefixCls = _props.prefixCls,
          renderExtraFooter = _props.renderExtraFooter;

      return renderExtraFooter ? _react2.default.createElement(
        'div',
        { className: prefixCls + '-footer-extra' },
        renderExtraFooter.apply(undefined, arguments)
      ) : null;
    };

    this.clearSelection = function (e) {
      e.preventDefault();
      e.stopPropagation();
      _this3.handleChange(null);
    };

    this.handleChange = function (value) {
      var props = _this3.props;
      if (!('value' in props)) {
        _this3.setState({
          value: value,
          showDate: value
        });
      }
      props.onChange(value, value && (0, _moment2.default)(value).format(props.format) || '');
      _this3.focus();
    };

    this.handleCalendarChange = function (value) {
      _this3.setState({ showDate: value });
    };

    this.saveInput = function (node) {
      _this3.input = node;
    };
  };

  (0, _reactLifecyclesCompat.polyfill)(CalendarWrapper);
  return CalendarWrapper;
}