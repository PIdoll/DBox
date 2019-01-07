'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _FullCalendar = require('rc-calendar/lib/FullCalendar');

var _FullCalendar2 = _interopRequireDefault(_FullCalendar);

var _LocaleReceiver = require('../locale-provider/LocaleReceiver');

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _Constants = require('./Constants');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _interopDefault = require('../_util/interopDefault');

var _interopDefault2 = _interopRequireDefault(_interopDefault);

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {
  return null;
}

function zerofixed(v) {
  if (v < 10) {
    return '0' + v;
  }
  return '' + v;
}

var Calendar = function (_React$Component) {
  (0, _inherits3.default)(Calendar, _React$Component);

  function Calendar(props) {
    (0, _classCallCheck3.default)(this, Calendar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Calendar.__proto__ || (0, _getPrototypeOf2.default)(Calendar)).call(this, props));

    _initialiseProps.call(_this);

    var value = props.value || props.defaultValue || (0, _interopDefault2.default)(_moment2.default)();
    if (!(0, _interopDefault2.default)(_moment2.default).isMoment(value)) {
      throw new Error('');
    }
    _this.state = {
      value: value,
      mode: props.mode
    };
    return _this;
  }

  (0, _createClass3.default)(Calendar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value
        });
      }
      if ('mode' in nextProps && nextProps.mode !== this.props.mode) {
        this.setState({
          mode: nextProps.mode
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _LocaleReceiver2.default,
        {
          componentName: 'Calendar',
          defaultLocale: this.getDefaultLocale },
        this.renderCalendar
      );
    }
  }]);
  return Calendar;
}(_react2.default.Component);

Calendar.defaultProps = {
  locale: {},
  fullscreen: true,
  prefixCls: _Constants.PREFIX_CLS,
  mode: 'month',
  onSelect: noop,
  onPanelChange: noop,
  onChange: noop,
  mold: ''
};
Calendar.propTypes = {
  prefixCls: _propTypes2.default.string,
  className: _propTypes2.default.string,
  fullscreen: _propTypes2.default.bool,
  dateCellRender: _propTypes2.default.func,
  monthCellRender: _propTypes2.default.func,
  dateFullCellRender: _propTypes2.default.func,
  monthFullCellRender: _propTypes2.default.func,
  locale: _propTypes2.default.object,
  style: _propTypes2.default.object,
  onPanelChange: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.object
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.monthCellRender = function (value) {
    var _props = _this2.props,
        prefixCls = _props.prefixCls,
        _props$monthCellRende = _props.monthCellRender,
        monthCellRender = _props$monthCellRende === undefined ? noop : _props$monthCellRende;

    return _react2.default.createElement(
      'div',
      { className: prefixCls + '-month' },
      _react2.default.createElement(
        'div',
        { className: prefixCls + '-value' },
        (0, _moment2.default)(value).localeDate().monthsShort(value)
      ),
      _react2.default.createElement(
        'div',
        { className: prefixCls + '-content' },
        monthCellRender(value)
      )
    );
  };

  this.dateCellRender = function (value) {
    var _props2 = _this2.props,
        prefixCls = _props2.prefixCls,
        _props2$dateCellRende = _props2.dateCellRender,
        dateCellRender = _props2$dateCellRende === undefined ? noop : _props2$dateCellRende;

    return _react2.default.createElement(
      'div',
      { className: prefixCls + '-date' },
      _react2.default.createElement(
        'div',
        { className: prefixCls + '-value' },
        zerofixed((0, _moment2.default)(value).date())
      ),
      _react2.default.createElement(
        'div',
        { className: prefixCls + '-content' },
        dateCellRender(value)
      )
    );
  };

  this.setValue = function (value, way) {
    if (!('value' in _this2.props)) {
      _this2.setState({ value: value });
    }
    if (way === 'select') {
      if (_this2.props.onSelect) {
        _this2.props.onSelect(value);
      }
    } else if (way === 'changePanel') {
      _this2.onPanelChange(value, _this2.state.mode);
    }
  };

  this.setType = function (type) {
    var mode = type === 'date' ? 'month' : 'year';
    if (_this2.state.mode !== mode) {
      _this2.setState({ mode: mode });
      _this2.onPanelChange(_this2.state.value, mode);
    }
  };

  this.onHeaderValueChange = function (value) {
    _this2.setValue(value, 'changePanel');
  };

  this.onHeaderTypeChange = function (type) {
    _this2.setType(type);
  };

  this.onPanelChange = function (value, mode) {
    var _props3 = _this2.props,
        onPanelChange = _props3.onPanelChange,
        onChange = _props3.onChange;

    if (onPanelChange) {
      onPanelChange(value, mode);
    }
    if (onChange && value !== _this2.state.value) {
      onChange(value);
    }
  };

  this.onSelect = function (value) {
    _this2.setValue(value, 'select');
  };

  this.getDateRange = function (validRange, disabledDate) {
    return function (current) {
      if (!current) {
        return false;
      }

      var _validRange = (0, _slicedToArray3.default)(validRange, 2),
          startDate = _validRange[0],
          endDate = _validRange[1];

      var inRange = !current.isBetween(startDate, endDate, 'days', '[]');
      if (disabledDate) {
        return disabledDate(current) || inRange;
      }
      return inRange;
    };
  };

  this.renderCalendar = function (locale, localeCode) {
    var state = _this2.state,
        props = _this2.props;
    var value = state.value,
        mode = state.mode;

    if (value && localeCode) {
      (0, _moment2.default)(value).locale(localeCode);
    }

    var prefixCls = props.prefixCls,
        style = props.style,
        className = props.className,
        fullscreen = props.fullscreen,
        dateFullCellRender = props.dateFullCellRender,
        monthFullCellRender = props.monthFullCellRender,
        mold = props.mold;

    var type = mode === 'type' ? 'month' : 'date';

    var cls = className || '';
    if (fullscreen) {
      cls += prefixCls + '-fullscreen';
    }

    var monthCellRender = monthFullCellRender || _this2.monthCellRender;
    var dateCellRender = dateFullCellRender || _this2.dateCellRender;

    var disabledDate = props.disabledDate;

    if (props.validRange) {
      disabledDate = _this2.getDateRange(props.validRange, disabledDate);
    }

    return _react2.default.createElement(
      'div',
      { className: cls, style: style },
      _react2.default.createElement(_Header2.default, {
        fullscreen: fullscreen,
        type: type,
        value: value,
        mold: mold,
        locale: locale.lang,
        prefixCls: prefixCls,
        onTypeChange: _this2.onHeaderTypeChange,
        onValueChange: _this2.onHeaderValueChange,
        validRange: props.validRange }),
      _react2.default.createElement(_FullCalendar2.default, (0, _extends3.default)({}, props, {
        disabledDate: disabledDate,
        Select: noop,
        locale: locale.lang,
        type: type,
        prefixCls: prefixCls,
        showHeader: false,
        value: value,
        monthCellRender: monthCellRender,
        dateCellRender: dateCellRender,
        onSelect: _this2.onSelect }))
    );
  };

  this.getDefaultLocale = function () {
    var result = (0, _extends3.default)({}, _zh_CN2.default, _this2.props.locale);
    result.lang = (0, _extends3.default)({}, result.lang, (_this2.props.locale || {}).lang);
    return result;
  };
};

exports.default = Calendar;