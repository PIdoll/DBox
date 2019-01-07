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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _index = require('../icon/index');

var _index2 = _interopRequireDefault(_index);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getDataOrAriaProps = require('../_util/getDataOrAriaProps');

var _getDataOrAriaProps2 = _interopRequireDefault(_getDataOrAriaProps);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {};

var Alert = function (_React$Component) {
  (0, _inherits3.default)(Alert, _React$Component);

  function Alert(props) {
    (0, _classCallCheck3.default)(this, Alert);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Alert.__proto__ || (0, _getPrototypeOf2.default)(Alert)).call(this, props));

    _this.handleClose = function (e) {
      e.preventDefault();
      var dom = _reactDom2.default.findDOMNode(_this);
      dom.style.height = dom.offsetHeight + 'px';
      // Magic code
      // 重复设置一次之后才能正确设置 height
      dom.style.height = dom.offsetHeight + 'px';

      _this.setState({
        closing: false
      });
      (_this.props.onClose || noop)(e);
    };

    _this.animationEnd = function () {
      _this.setState({
        closed: true,
        closing: true
      });
      (_this.props.afterClose || noop)();
    };

    _this.state = {
      closing: true,
      closed: false
    };
    return _this;
  }

  (0, _createClass3.default)(Alert, [{
    key: 'render',
    value: function render() {
      var _classNames, _classNames2;

      var _props = this.props,
          closable = _props.closable,
          description = _props.description,
          type = _props.type,
          _props$prefixCls = _props.prefixCls,
          prefixCls = _props$prefixCls === undefined ? 'idoll-alert' : _props$prefixCls,
          message = _props.message,
          closeText = _props.closeText,
          showIcon = _props.showIcon,
          banner = _props.banner,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className,
          style = _props.style,
          iconType = _props.iconType,
          icon = _props.icon;

      // banner 模式默认有Icon

      showIcon = banner && showIcon === undefined ? true : showIcon;

      // banner 模式默认为警告
      type = banner && type === undefined ? 'warning' : type || 'info';

      if (!iconType) {
        switch (type) {
          case 'success':
            iconType = 'check';
            break;
          case 'info':
            iconType = 'info-circle'; // info-circle
            break;
          case 'error':
            iconType = 'error-circle'; // cross-circle
            break;
          case 'warning':
            iconType = 'warning';
            break;
          default:
            iconType = 'default';
        }
      }

      var alertCls = (0, _classnames2.default)(prefixCls, prefixCls + '-' + type, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-close', !this.state.closing), (0, _defineProperty3.default)(_classNames, prefixCls + '-with-description', !!description), (0, _defineProperty3.default)(_classNames, prefixCls + '-no-description', !description), (0, _defineProperty3.default)(_classNames, prefixCls + '-no-icon', !showIcon), (0, _defineProperty3.default)(_classNames, prefixCls + '-banner', !!banner), _classNames), className);

      if (closeText) {
        closable = true;
      }

      var closeIcon = closable ? _react2.default.createElement(
        'a',
        { onClick: this.handleClose, className: prefixCls + '-close-icon' },
        closeText || _react2.default.createElement(_index2.default, { type: 'close' })
      ) : null;

      var dataOrAriaProps = (0, _getDataOrAriaProps2.default)(this.props);

      var iconNode = icon && (_react2.default.isValidElement(icon) ? _react2.default.cloneElement(icon, {
        className: (0, _classnames2.default)((_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, icon.props.className, icon.props.className), (0, _defineProperty3.default)(_classNames2, prefixCls + '-icon', true), _classNames2))
      }) : _react2.default.createElement(
        'span',
        { className: prefixCls + '-icon' },
        icon
      )) || _react2.default.createElement(_index2.default, { className: prefixCls + '-icon', type: iconType });
      return this.state.closed ? null : _react2.default.createElement(
        _rcAnimate2.default,
        {
          component: '',
          showProp: 'data-show',
          transitionName: prefixCls + '-slide-up',
          onEnd: this.animationEnd },
        _react2.default.createElement(
          'div',
          (0, _extends3.default)({ 'data-show': this.state.closing, className: alertCls, style: style }, dataOrAriaProps),
          showIcon ? iconNode : null,
          _react2.default.createElement(
            'span',
            { className: prefixCls + '-message' },
            message
          ),
          _react2.default.createElement(
            'span',
            { className: prefixCls + '-description' },
            description
          ),
          closeIcon
        )
      );
    }
  }]);
  return Alert;
}(_react2.default.Component);

Alert.propTypes = {
  closable: _propTypes2.default.bool,
  description: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
  type: _propTypes2.default.oneOf(['success', 'info', 'warning', 'error']),
  message: _propTypes2.default.node,
  closeText: _propTypes2.default.node,
  showIcon: _propTypes2.default.bool,
  banner: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  prefixCls: _propTypes2.default.string,
  className: _propTypes2.default.string,
  onClose: _propTypes2.default.func,
  afterClose: _propTypes2.default.func,
  icon: _propTypes2.default.node,
  iconType: _propTypes2.default.string
};
exports.default = Alert;