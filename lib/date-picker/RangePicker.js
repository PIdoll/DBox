'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _RangeCalendar = require('rc-calendar/lib/RangeCalendar');

var _RangeCalendar2 = _interopRequireDefault(_RangeCalendar);

var _Picker = require('rc-calendar/lib/Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _tag = require('../tag');

var _tag2 = _interopRequireDefault(_tag);

var _interopDefault = require('../_util/interopDefault');

var _interopDefault2 = _interopRequireDefault(_interopDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getShowDateFromValue(value) {
  var _value = (0, _slicedToArray3.default)(value, 2),
      start = _value[0],
      end = _value[1];
  // value could be an empty array, then we should not reset showDate


  if (!start && !end) {
    return;
  }
  var newEnd = end && (0, _moment2.default)(end).isSame(start, 'month') ? (0, _moment2.default)(end).clone().add(1, 'month') : end;
  return [start, newEnd];
}
// import warning from '../_util/warning';


function formatValue(value, format) {
  return value && (0, _moment2.default)(value).format(format) || '';
}

function pickerValueAdapter(value) {
  if (!value) {
    return;
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [value, (0, _moment2.default)(value).clone().add(1, 'month')];
}

function isEmptyArray(arr) {
  if (Array.isArray(arr)) {
    return arr.length === 0 || arr.every(function (i) {
      return !i;
    });
  }
  return false;
}

function fixLocale(value, localeCode) {
  if (!localeCode) {
    return;
  }
  if (!value || value.length === 0) {
    return;
  }
  if (value[0]) {
    (0, _moment2.default)(value[0]).locale(localeCode);
  }
  if (value[1]) {
    (0, _moment2.default)(value[1]).locale(localeCode);
  }
}

var RangePicker = function (_React$Component) {
  (0, _inherits3.default)(RangePicker, _React$Component);
  (0, _createClass3.default)(RangePicker, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var state = null;
      if ('value' in nextProps) {
        var value = nextProps.value || [];
        state = {
          value: value
        };
        if (!(0, _shallowequal2.default)(nextProps.value, prevState.value)) {
          state = (0, _extends3.default)({}, state, {
            showDate: getShowDateFromValue(value) || prevState.showDate
          });
        }
      }
      if ('open' in nextProps && prevState.open !== nextProps.open) {
        state = (0, _extends3.default)({}, state, {
          open: nextProps.open
        });
      }
      return state;
    }
  }]);

  function RangePicker(props) {
    (0, _classCallCheck3.default)(this, RangePicker);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RangePicker.__proto__ || (0, _getPrototypeOf2.default)(RangePicker)).call(this, props));

    _initialiseProps.call(_this);

    var value = props.value || props.defaultValue || [];
    if (value[0] && !(0, _interopDefault2.default)(_moment2.default).isMoment(value[0]) || value[1] && !(0, _interopDefault2.default)(_moment2.default).isMoment(value[1])) {
      throw new Error('');
    }
    var pickerValue = !value || isEmptyArray(value) ? props.defaultPickerValue : value;
    _this.state = {
      value: value,
      showDate: pickerValueAdapter(pickerValue || (0, _interopDefault2.default)(_moment2.default)()),
      open: props.open,
      hoverValue: []
    };
    return _this;
  }

  (0, _createClass3.default)(RangePicker, [{
    key: 'setValue',
    value: function setValue(value, hidePanel) {
      this.handleChange(value);
      if ((hidePanel || !this.props.showTime) && !('open' in this.props)) {
        this.setState({ open: false });
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
      var _classNames,
          _this2 = this,
          _classNames2;

      var state = this.state,
          props = this.props;
      var value = state.value,
          showDate = state.showDate,
          hoverValue = state.hoverValue,
          open = state.open;
      var prefixCls = props.prefixCls,
          popupStyle = props.popupStyle,
          style = props.style,
          disabledDate = props.disabledDate,
          disabledTime = props.disabledTime,
          showTime = props.showTime,
          showToday = props.showToday,
          ranges = props.ranges,
          onOk = props.onOk,
          locale = props.locale,
          localeCode = props.localeCode,
          format = props.format,
          dateRender = props.dateRender,
          onCalendarChange = props.onCalendarChange,
          suffixIcon = props.suffixIcon;


      fixLocale(value, localeCode);
      fixLocale(showDate, localeCode);

      // warning(!('onOK' in props), 'It should be `RangePicker[onOk]`, instead of `onOK`!');

      var calendarClassName = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-time', showTime), (0, _defineProperty3.default)(_classNames, prefixCls + '-range-with-ranges', ranges), _classNames));

      // 需要选择时间时，点击 ok 时才触发 onChange
      var pickerChangeHandler = {
        onChange: this.handleChange
      };
      var calendarProps = {
        onOk: this.handleChange
      };
      if (props.timePicker) {
        pickerChangeHandler.onChange = function (changedValue) {
          return _this2.handleChange(changedValue);
        };
      } else {
        calendarProps = {};
      }
      if ('mode' in props) {
        calendarProps.mode = props.mode;
      }

      var startPlaceholder = 'placeholder' in props ? props.placeholder[0] : locale.lang.rangePlaceholder[0];
      var endPlaceholder = 'placeholder' in props ? props.placeholder[1] : locale.lang.rangePlaceholder[1];

      var calendar = _react2.default.createElement(_RangeCalendar2.default, (0, _extends3.default)({}, calendarProps, {
        onChange: onCalendarChange,
        format: format,
        prefixCls: prefixCls,
        className: calendarClassName,
        renderFooter: this.renderFooter,
        timePicker: props.timePicker,
        disabledDate: disabledDate,
        disabledTime: disabledTime,
        dateInputPlaceholder: [startPlaceholder, endPlaceholder],
        locale: locale.lang,
        onOk: onOk,
        dateRender: dateRender,
        value: showDate,
        onValueChange: this.handleShowDateChange,
        hoverValue: hoverValue,
        onHoverChange: this.handleHoverChange,
        onPanelChange: props.onPanelChange,
        showToday: showToday,
        onInputSelect: this.handleCalendarInputSelect
      }));

      // default width for showTime
      var pickerStyle = {};
      if (props.showTime) {
        pickerStyle.width = style && style.width || 350;
      }

      var clearIcon = !props.disabled && props.allowClear && value && (value[0] || value[1]) ? _react2.default.createElement(_icon2.default, {
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

      var input = function input(_ref) {
        var inputValue = _ref.value;

        var start = inputValue[0];
        var end = inputValue[1];
        return _react2.default.createElement(
          'span',
          { className: props.pickerInputClass },
          _react2.default.createElement('input', {
            disabled: props.disabled,
            readOnly: true,
            value: start && (0, _moment2.default)(start).format(props.format) || '',
            placeholder: startPlaceholder,
            className: prefixCls + '-range-picker-input',
            tabIndex: -1
          }),
          _react2.default.createElement(
            'span',
            { className: prefixCls + '-range-picker-separator' },
            ' ~ '
          ),
          _react2.default.createElement('input', {
            disabled: props.disabled,
            readOnly: true,
            value: end && (0, _moment2.default)(end).format(props.format) || '',
            placeholder: endPlaceholder,
            className: prefixCls + '-range-picker-input',
            tabIndex: -1
          }),
          clearIcon,
          inputIcon
        );
      };

      return _react2.default.createElement(
        'span',
        {
          ref: this.savePicker,
          id: props.id,
          className: (0, _classnames2.default)(props.className, props.pickerClass),
          style: (0, _extends3.default)({}, style, pickerStyle),
          tabIndex: props.disabled ? -1 : 0,
          onFocus: props.onFocus,
          onBlur: props.onBlur,
          onMouseEnter: props.onMouseEnter,
          onMouseLeave: props.onMouseLeave
        },
        _react2.default.createElement(
          _Picker2.default,
          (0, _extends3.default)({}, props, pickerChangeHandler, {
            calendar: calendar,
            value: value,
            open: open,
            onOpenChange: this.handleOpenChange,
            prefixCls: prefixCls + '-picker-container',
            style: popupStyle
          }),
          input
        )
      );
    }
  }]);
  return RangePicker;
}(_react2.default.Component);

RangePicker.propTypes = {
  prefixCls: _propTypes2.default.string,
  tagPrefixCls: _propTypes2.default.string,
  allowClear: _propTypes2.default.bool,
  showToday: _propTypes2.default.bool,
  open: _propTypes2.default.bool,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  popupStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  disabledDate: _propTypes2.default.func,
  disabledTime: _propTypes2.default.func,
  showTime: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
  onOk: _propTypes2.default.func,
  locale: _propTypes2.default.object,
  format: _propTypes2.default.string,
  onCalendarChange: _propTypes2.default.func,
  suffixIcon: _propTypes2.default.element
};
RangePicker.defaultProps = {
  prefixCls: 'idoll-calendar',
  tagPrefixCls: 'idoll-tag',
  allowClear: true,
  showToday: false
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.clearSelection = function (e) {
    e.preventDefault();
    e.stopPropagation();
    _this3.setState({ value: [] });
    _this3.handleChange([]);
  };

  this.clearHoverValue = function () {
    return _this3.setState({ hoverValue: [] });
  };

  this.handleChange = function (value) {
    var props = _this3.props;
    if (!('value' in props)) {
      _this3.setState(function (_ref2) {
        var showDate = _ref2.showDate;
        return {
          value: value,
          showDate: getShowDateFromValue(value) || showDate
        };
      });
    }
    props.onChange(value, [formatValue(value[0], props.format), formatValue(value[1], props.format)]);
    _this3.focus();
  };

  this.handleOpenChange = function (open) {
    if (!('open' in _this3.props)) {
      _this3.setState({ open: open });
    }

    if (open === false) {
      _this3.clearHoverValue();
    }

    var onOpenChange = _this3.props.onOpenChange;

    if (onOpenChange) {
      onOpenChange(open);
    }
  };

  this.handleShowDateChange = function (showDate) {
    return _this3.setState({ showDate: showDate });
  };

  this.handleHoverChange = function (hoverValue) {
    return _this3.setState({ hoverValue: hoverValue });
  };

  this.handleRangeMouseLeave = function () {
    if (_this3.state.open) {
      _this3.clearHoverValue();
    }
  };

  this.handleCalendarInputSelect = function (value) {
    if (!value[0]) {
      return;
    }
    _this3.setState(function (_ref3) {
      var showDate = _ref3.showDate;
      return {
        value: value,
        showDate: getShowDateFromValue(value) || showDate
      };
    });
  };

  this.handleRangeClick = function (value) {
    if (typeof value === 'function') {
      value = value();
    }

    _this3.setValue(value, true);

    var _props = _this3.props,
        onOk = _props.onOk,
        onOpenChange = _props.onOpenChange;

    if (onOk) {
      onOk(value);
    }

    if (onOpenChange) {
      onOpenChange(false);
    }
  };

  this.savePicker = function (node) {
    _this3.picker = node;
  };

  this.renderFooter = function () {
    var _props2 = _this3.props,
        prefixCls = _props2.prefixCls,
        ranges = _props2.ranges,
        renderExtraFooter = _props2.renderExtraFooter,
        tagPrefixCls = _props2.tagPrefixCls;

    if (!ranges && !renderExtraFooter) {
      return null;
    }
    var customFooter = renderExtraFooter ? _react2.default.createElement(
      'div',
      { className: prefixCls + '-footer-extra', key: 'extra' },
      renderExtraFooter.apply(undefined, arguments)
    ) : null;
    var operations = (0, _keys2.default)(ranges || {}).map(function (range) {
      var value = ranges[range];
      return _react2.default.createElement(
        _tag2.default,
        {
          key: range,
          prefixCls: tagPrefixCls,
          color: 'rgba(0, 191, 255, 0.3)',
          onClick: function onClick() {
            return _this3.handleRangeClick(value);
          },
          onMouseEnter: function onMouseEnter() {
            return _this3.setState({ hoverValue: value });
          },
          onMouseLeave: _this3.handleRangeMouseLeave
        },
        range
      );
    });
    var rangeNode = operations && operations.length > 0 ? _react2.default.createElement(
      'div',
      { className: prefixCls + '-footer-extra ' + prefixCls + '-range-quick-selector', key: 'range' },
      operations
    ) : null;
    return [rangeNode, customFooter];
  };
};

(0, _reactLifecyclesCompat.polyfill)(RangePicker);

exports.default = RangePicker;