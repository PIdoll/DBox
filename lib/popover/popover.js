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

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = require('../_util/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popover = function (_React$Component) {
  (0, _inherits3.default)(Popover, _React$Component);

  function Popover() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Popover);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Popover.__proto__ || (0, _getPrototypeOf2.default)(Popover)).call.apply(_ref, [this].concat(args))), _this), _this.saveTooltip = function (node) {
      _this.tooltip = node;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Popover, [{
    key: 'getOverlay',
    value: function getOverlay() {
      var _props = this.props,
          title = _props.title,
          prefixCls = _props.prefixCls,
          content = _props.content,
          className = _props.className,
          overlayClassName = _props.overlayClassName;

      var menuClassName = (0, _classnames2.default)(className, prefixCls + '-inner-content', (0, _defineProperty3.default)({}, prefixCls + '-inline-popover', overlayClassName));
      (0, _warning2.default)(!('overlay' in this.props), 'Popover[overlay]\u5DF2\u88AB\u79FB\u9664\uFF0C\u8BF7\u7528Popover[content]\u66FF\u4EE3');
      return _react2.default.createElement(
        'div',
        null,
        title && _react2.default.createElement(
          'div',
          { className: prefixCls + '-title' },
          title
        ),
        _react2.default.createElement(
          'div',
          { className: menuClassName },
          content
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_tooltip2.default, (0, _extends3.default)({}, this.props, {
        ref: this.saveTooltip,
        overlay: this.getOverlay()
      }));
    }
  }]);
  return Popover;
}(_react2.default.Component);

Popover.defaultProps = {
  prefixCls: 'idoll-popover',
  placement: 'topLeft',
  trigger: 'hover',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  overlayStyle: {}
};
exports.default = Popover;