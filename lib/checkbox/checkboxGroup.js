'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkboxGroup = function (_React$Component) {
  (0, _inherits3.default)(checkboxGroup, _React$Component);

  function checkboxGroup(props) {
    (0, _classCallCheck3.default)(this, checkboxGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (checkboxGroup.__proto__ || (0, _getPrototypeOf2.default)(checkboxGroup)).call(this, props));

    _this.toggleOption = function (option) {
      var optionIndex = _this.state.value.indexOf(option.value);
      var value = [].concat((0, _toConsumableArray3.default)(_this.state.value));
      if (optionIndex === -1) {
        value.push(option.value);
      } else {
        value.splice(optionIndex, 1);
      }
      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }
      var onChange = _this.props.onChange;
      if (onChange) {
        onChange(value);
      }
    };

    _this.state = {
      value: props.value || props.defaultValue || []
    };
    return _this;
  }
  // 定义Context需要实现的方法

  // 声明子Context类型


  (0, _createClass3.default)(checkboxGroup, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        checkboxGroup: {
          toggleOption: this.toggleOption,
          value: this.state.value,
          disabled: this.props.disabled
        }
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value || []
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _shallowequal2.default)(this.props, nextProps) || !(0, _shallowequal2.default)(this.state, nextState);
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      var options = this.props.options;

      return options.map(function (option) {
        if (typeof option === 'string') {
          return {
            label: option,
            value: option
          };
        }
        return option;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props,
          state = this.state;
      var prefixCls = props.prefixCls,
          className = props.className,
          style = props.style,
          options = props.options;

      var children = props.children;
      if (options && options.length > 0) {
        children = this.getOptions().map(function (option) {
          return _react2.default.createElement(
            _checkbox2.default,
            { key: option.value, disabled: 'disabled' in option ? option.disabled : props.disabled, value: option.value, checked: state.value.indexOf(option.value) !== -1, onChange: function onChange() {
                return _this2.toggleOption(option);
              }, className: prefixCls + '-item' },
            option.label
          );
        });
      }
      var classString = (0, _classnames2.default)(prefixCls, className);
      return _react2.default.createElement(
        'div',
        { className: classString, style: style },
        children
      );
    }
  }]);
  return checkboxGroup;
}(_react2.default.Component);

checkboxGroup.defaultProps = {
  options: [],
  prefixCls: 'idoll-checkbox-group'
};
checkboxGroup.propTypes = {
  defaultValue: _propTypes2.default.array,
  value: _propTypes2.default.array,
  options: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func };
checkboxGroup.childContextTypes = {
  checkboxGroup: _propTypes2.default.any
};
exports.default = checkboxGroup;