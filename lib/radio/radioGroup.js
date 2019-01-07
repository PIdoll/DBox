'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCheckedValue(children) {
  var value = null;
  var matched = false;
  _react2.default.Children.forEach(children, function (radio) {
    if (radio && radio.props && radio.props.checked) {
      value = radio.propos.value;
      matched = true;
    }
  });
  return matched ? { value: value } : undefined;
}

var RadioGroup = function (_React$Component) {
  (0, _inherits3.default)(RadioGroup, _React$Component);

  function RadioGroup(props) {
    (0, _classCallCheck3.default)(this, RadioGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RadioGroup.__proto__ || (0, _getPrototypeOf2.default)(RadioGroup)).call(this, props));

    _initialiseProps.call(_this);

    var value = void 0;
    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    } else {
      var checkedValue = getCheckedValue(props.children);
      value = checkedValue && checkedValue.value;
    }
    _this.state = {
      value: value
    };
    return _this;
  }
  // 定义Context需要实现的方法

  // 声明子Context类型


  (0, _createClass3.default)(RadioGroup, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        radioGroup: {
          onChange: this.onRadioChange,
          value: this.state.value,
          disabled: this.props.disabled,
          name: this.props.name
        }
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value
        });
      } else {
        var checkedValue = getCheckedValue(nextProps.children);
        if (checkedValue) {
          this.setState({
            value: checkedValue.value
          });
        }
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _shallowequal2.default)(this.props, nextProps) || !(0, _shallowequal2.default)(this.state, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var props = this.props;
      var _props$prefixCls = props.prefixCls,
          prefixCls = _props$prefixCls === undefined ? props.buttonStyle === 'solid' ? 'idoll-radio-group-solid' : 'idoll-radio-group' : _props$prefixCls,
          _props$className = props.className,
          className = _props$className === undefined ? '' : _props$className,
          options = props.options;

      var classString = (0, _classnames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-' + props.size, props.size), (0, _defineProperty3.default)(_classNames, prefixCls + '-vertical', props.direction), _classNames), className);
      var children = props.children;
      if (options && options.length > 0) {
        children = options.map(function (option, index) {
          if (typeof option === 'string') {
            return _react2.default.createElement(
              _radio2.default,
              { key: index, disabled: _this2.props.disabled, value: option, onChange: _this2.onRadioChange, checked: _this2.state.value === option },
              option
            );
          } else {
            return _react2.default.createElement(
              _radio2.default,
              { key: index, disabled: option.disabled || _this2.props.disabled, value: option.value, onChange: _this2.onRadioChange, checked: _this2.state.value === option.value },
              option.label
            );
          }
        });
      }
      return _react2.default.createElement(
        'div',
        { className: classString, style: props.style, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave, id: props.id },
        children
      );
    }
  }]);
  return RadioGroup;
}(_react2.default.Component);

RadioGroup.defaultProps = {
  disabled: false };
RadioGroup.childContextTypes = {
  radioGroup: _propTypes2.default.any
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onRadioChange = function (ev) {
    var lastValue = _this3.state.value;
    var value = ev.target.value;

    if (!('value' in _this3.props)) {
      _this3.setState({
        value: value
      });
    }
    var onChange = _this3.props.onChange;
    if (onChange && value !== lastValue) {
      onChange(ev);
    }
  };
};

exports.default = RadioGroup;