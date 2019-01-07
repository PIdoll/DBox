'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function (_Component) {
  (0, _inherits3.default)(Search, _Component);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call.apply(_ref, [this].concat(args))), _this), _this.onSearch = function () {
      var onSearch = _this.props.onSearch;

      if (onSearch) {
        onSearch(_this.input.input.value);
      }
      _this.input.focus();
    }, _this.saveInput = function (node) {
      _this.input = node;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Search, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          className = _props.className,
          prefixCls = _props.prefixCls,
          inputPrefixCls = _props.inputPrefixCls,
          size = _props.size,
          enterButton = _props.enterButton,
          suffix = _props.suffix,
          others = (0, _objectWithoutProperties3.default)(_props, ['className', 'prefixCls', 'inputPrefixCls', 'size', 'enterButton', 'suffix']);

      delete others.onSearch;
      var node = enterButton ? _react2.default.createElement(
        _button2.default,
        {
          className: prefixCls + '-button',
          type: 'primary',
          size: size,
          key: 'enterButton'
        },
        enterButton === true ? _react2.default.createElement(_icon2.default, { type: 'search' }) : enterButton
      ) : _react2.default.createElement(_icon2.default, { className: prefixCls + '-icon', type: 'search', key: 'searchIcon' });
      var buttonOrIcon = _react2.default.cloneElement(node, {
        onClick: this.onSearch,
        className: 'icon-hover'
      });
      var searchSuffix = suffix ? [suffix, buttonOrIcon] : buttonOrIcon;
      var inputClassName = (0, _classnames2.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-enter-button', !!enterButton), (0, _defineProperty3.default)(_classNames, prefixCls + '-' + size, !!size), _classNames));
      return _react2.default.createElement(_input2.default, (0, _extends3.default)({
        onPressEnter: this.onSearch
      }, others, {
        size: size,
        className: inputClassName,
        prefixCls: inputPrefixCls,
        suffix: searchSuffix,
        ref: this.saveInput
      }));
    }
  }]);
  return Search;
}(_react.Component);

Search.defaultProps = {
  inputPrefixCls: 'idoll-input',
  prefixCls: 'idoll-input-search',
  enterButton: false
};
Search.propTypes = {
  onSearch: _propTypes.PropTypes.func
};
exports.default = Search;