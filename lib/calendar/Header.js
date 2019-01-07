'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Constants = require('./Constants');

var _timeFormat = require('./timeFormat');

var _timeFormat2 = _interopRequireDefault(_timeFormat);

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;
// 设置全局时间语言环境
_moment2.default.locale('zh_cn');

var Header = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

    _this.handleProIncreaseMonth = function () {
      // debugger;
      var month = void 0;
      var year = void 0;
      var _this$state = _this.state,
          monthNumber = _this$state.monthNumber,
          yearValue = _this$state.yearValue;

      month = monthNumber;
      year = yearValue;
      month++;
      if (month >= 12) {
        month = 0;
        // 若将次函数放入setState的第二个函数参数内，次函数的执行结果将会是12月的数据
        _this.onMonthChange(month);
        _this.setState({
          monthValue: (0, _timeFormat2.default)(month),
          monthNumber: month,
          yearValue: year + 1
        }, function () {
          _this.state.yearValue !== year && _this.onYearChange(_this.state.yearValue);
        });
        return false;
      }
      _this.setState({
        monthValue: (0, _timeFormat2.default)(month),
        monthNumber: month,
        yearValue: year
      }, function () {
        _this.onMonthChange(_this.state.monthNumber);
        _this.state.yearValue !== year && _this.onYearChange(_this.state.yearValue);
      });
    };

    _this.handleDecIncreaseMonth = function () {
      var month = void 0;
      var year = void 0;
      var _this$state2 = _this.state,
          monthNumber = _this$state2.monthNumber,
          yearValue = _this$state2.yearValue;

      month = monthNumber;
      year = yearValue;
      month--;
      if (month < 0) {
        month = 11;
        _this.onMonthChange(month);
        _this.setState({
          monthValue: (0, _timeFormat2.default)(month),
          monthNumber: month,
          yearValue: year - 1
        }, function () {
          _this.state.yearValue !== year && _this.onYearChange(_this.state.yearValue);
        });
        return false;
      }
      _this.setState({
        monthValue: (0, _timeFormat2.default)(month),
        monthNumber: month,
        yearValue: year
      }, function () {
        _this.onMonthChange(_this.state.monthNumber);
        _this.state.yearValue !== year && _this.onYearChange(_this.state.yearValue);
      });
    };

    _this.onYearChange = function (year) {
      var _this$props = _this.props,
          value = _this$props.value,
          validRange = _this$props.validRange;

      var newValue = (0, _moment2.default)(value).clone();
      newValue.year(parseInt(year, 10));
      if (validRange) {
        var _validRange = (0, _slicedToArray3.default)(validRange, 2),
            start = _validRange[0],
            end = _validRange[1];

        var newYear = (0, _moment2.default)(newValue).get('year');
        var newMonth = (0, _moment2.default)(newValue).get('month');
        if (newYear === (0, _moment2.default)(end).get('year') && newMonth > (0, _moment2.default)(end).get('month')) {
          newValue.month((0, _moment2.default)(end).get('month'));
        }
        if (newYear === (0, _moment2.default)(start).get('year') && newMonth < (0, _moment2.default)(start).get('month')) {
          newValue.month((0, _moment2.default)(start).get('month'));
        }
      }
      var onValueChange = _this.props.onValueChange;
      if (onValueChange) {
        onValueChange(newValue);
      }
    };

    _this.onMonthChange = function (month) {
      var newValue = (0, _moment2.default)(_this.props.value).clone();
      newValue.month(parseInt(month, 10));
      var onValueChange = _this.props.onValueChange;
      if (onValueChange) {
        onValueChange(newValue);
      }
    };

    _this.onTypeChange = function (e) {
      var onTypeChange = _this.props.onTypeChange;
      if (onTypeChange) {
        onTypeChange(e.target.value);
      }
    };

    _this.getCalendarHeaderNode = function (node) {
      _this.getCalendarHeaderNode = node;
    };

    _this.state = {
      monthValue: null,
      yearValue: null
    };
    return _this;
  }

  (0, _createClass3.default)(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        monthNumber: (0, _moment2.default)().month(),
        monthValue: (0, _timeFormat2.default)((0, _moment2.default)().month()),
        yearValue: (0, _moment2.default)().year()
      });
    }

    // 右边 > 图标


    // 左边 < 图标

  }, {
    key: 'getYearSelectElement',
    value: function getYearSelectElement(year) {
      var _props = this.props,
          yearSelectOffset = _props.yearSelectOffset,
          yearSelectTotal = _props.yearSelectTotal,
          locale = _props.locale,
          prefixCls = _props.prefixCls,
          fullscreen = _props.fullscreen,
          validRange = _props.validRange;

      var start = year - yearSelectOffset;
      var end = start + yearSelectTotal;
      if (validRange) {
        start = (0, _moment2.default)(validRange[0]).get('year');
        end = (0, _moment2.default)(validRange[1]).get('year') + 1;
      }
      var suffix = locale.year === '年' ? '年' : '';
      var options = [];
      for (var index = start; index < end; index++) {
        options.push(_react2.default.createElement(
          Option,
          { key: '' + index },
          index + suffix
        ));
      }
      return _react2.default.createElement(
        _select2.default,
        {
          size: fullscreen ? 'default' : 'small',
          dropdownMatchSelectWidth: false,
          className: prefixCls + '-year-select',
          value: String(year),
          onChange: this.onYearChange,
          style: { width: 75, height: 24 } },
        options
      );
    }
  }, {
    key: 'getMonthsLocale',
    value: function getMonthsLocale(value) {
      var current = (0, _moment2.default)(value).clone();
      var localeData = (0, _moment2.default)(value).localeData();
      var months = [];
      for (var i = 0; i < 12; i++) {
        current.month(i);
        months.push(localeData.monthsShort(current));
      }
      return months;
    }
  }, {
    key: 'getMonthSelectElement',
    value: function getMonthSelectElement(month, months) {
      var props = this.props;
      var prefixCls = props.prefixCls,
          fullscreen = props.fullscreen,
          validRange = props.validRange,
          value = props.value;

      var options = [];
      var start = 0;
      var end = 12;
      if (validRange) {
        var _validRange2 = (0, _slicedToArray3.default)(validRange, 2),
            rangeStart = _validRange2[0],
            rangeEnd = _validRange2[1];

        var currentYear = (0, _moment2.default)(value).get('year');
        if ((0, _moment2.default)(rangeEnd).get('year') === currentYear) {
          end = (0, _moment2.default)(rangeEnd).get('month') + 1;
        } else {
          start = (0, _moment2.default)(rangeStart).get('month');
        }
      }
      for (var index = start; index < end; index++) {
        options.push(_react2.default.createElement(
          Option,
          { key: '' + index },
          months[index]
        ));
      }
      return _react2.default.createElement(
        _select2.default,
        {
          size: fullscreen ? 'default' : 'small',
          dropdownMatchSelectWidth: false,
          className: prefixCls + '-month-select',
          value: String(month),
          onChange: this.onMonthChange,
          style: { width: 58, height: 24 } },
        options
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          type = _props2.type,
          value = _props2.value,
          prefixCls = _props2.prefixCls,
          mold = _props2.mold;
      var _state = this.state,
          monthValue = _state.monthValue,
          yearValue = _state.yearValue;

      var yearSelect = this.getYearSelectElement((0, _moment2.default)(value).year());
      var monthSelect = type === 'date' ? this.getMonthSelectElement((0, _moment2.default)(value).month(), this.getMonthsLocale(value)) : null;
      return mold !== 'backdrop' ? _react2.default.createElement(
        'div',
        {
          className: prefixCls + '-header',
          ref: this.getCalenderHeaderNode },
        _react2.default.createElement(
          'div',
          null,
          yearSelect,
          monthSelect
        )
      ) : _react2.default.createElement(
        'div',
        {
          className: prefixCls + '-backdrop-header',
          ref: this.getCalenderHeaderNode },
        _react2.default.createElement(_icon2.default, { type: 'left', className: prefixCls + '-backdrop-header-left', onClick: this.handleDecIncreaseMonth }),
        _react2.default.createElement(
          'div',
          { className: prefixCls + '-backdrop-header-time' },
          yearValue + '\u5E74',
          '\xA0\xA0',
          monthValue
        ),
        _react2.default.createElement(_icon2.default, { type: 'right', className: prefixCls + '-backdrop-header-right', onClick: this.handleProIncreaseMonth })
      );
    }
  }]);
  return Header;
}(_react2.default.Component);

Header.propTypes = {
  prefixCls: _propTypes2.default.string,
  locale: _propTypes2.default.object,
  yearSelectOffset: _propTypes2.default.number,
  yearSelectTotal: _propTypes2.default.number,
  type: _propTypes2.default.string,
  onValueChange: _propTypes2.default.func,
  onTypeChange: _propTypes2.default.func,
  value: _propTypes2.default.any,
  fullscreen: _propTypes2.default.bool,
  mold: _propTypes2.default.string
};
Header.defaultProps = {
  prefixCls: _Constants.PREFIX_CLS + '-header',
  yearSelectOffset: 10,
  yearSelectTotal: 20
};
exports.default = Header;