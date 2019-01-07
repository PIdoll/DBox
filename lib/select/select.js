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

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcSelect = require('rc-select');

var _rcSelect2 = _interopRequireDefault(_rcSelect);

var _propTypes = require('prop-types');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function (_React$Component) {
  (0, _inherits3.default)(Select, _React$Component);

  function Select() {
    (0, _classCallCheck3.default)(this, Select);
    return (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).apply(this, arguments));
  }

  (0, _createClass3.default)(Select, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          size = _props.size,
          className = _props.className,
          mode = _props.mode,
          notFoundContent = _props.notFoundContent,
          prefixCls = _props.prefixCls,
          showSearch = _props.showSearch,
          optionLabelProp = _props.optionLabelProp;


      var classs = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3.default)(_classNames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3.default)(_classNames, className, !!className), (0, _defineProperty3.default)(_classNames, prefixCls + '-show-search', showSearch), _classNames));

      var antLocale = this.context.antLocale;

      if (antLocale && antLocale.Select) {
        notFoundContent = notFoundContent || antLocale.Select.notFoundContent;
      }
      var isCombobox = mode === 'combobox';
      if (isCombobox) {
        notFoundContent = null;
        // children 带 dom 结构时，无法填入输入框
        optionLabelProp = optionLabelProp || 'value';
      }

      var modeConfig = {
        multiple: mode === 'multiple',
        tags: mode === 'tags',
        combobox: isCombobox
      };

      var clearIcon = _react2.default.createElement(_icon2.default, {
        type: 'close-circle',
        className: prefixCls + '-picker-clear'
      });

      var removeIcon = _react2.default.createElement(_icon2.default, { type: 'close', className: prefixCls + '-remove-icon' });

      size = size === 'small' ? 'small' : null;
      return _react2.default.createElement(_rcSelect2.default, (0, _extends3.default)({}, this.props, modeConfig, {
        removeIcon: removeIcon,
        clearIcon: clearIcon,
        dropdownClassName: size,
        className: classs,
        optionLabelProp: optionLabelProp || 'children',
        notFoundContent: notFoundContent
      }));
    }
  }]);
  return Select;
}(_react2.default.Component);

Select.Option = _rcSelect.Option;
Select.OptGroup = _rcSelect.OptGroup;
Select.defaultProps = {
  prefixCls: 'idoll-select',
  transitionName: 'slide-up',
  choiceTransitionName: 'zoom',
  showSearch: false
};
Select.contextTypes = {
  antLocale: _propTypes.PropTypes.object
};
exports.default = Select;