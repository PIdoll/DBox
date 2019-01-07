'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _rcDialog = require('rc-dialog');

var _rcDialog2 = _interopRequireDefault(_rcDialog);

var _addEventListener = require('rc-util/lib/Dom/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

require('./style/index');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://www.npmjs.com/package/rc-util
function noop() {}
// https://www.npmjs.com/package/rc-dialog


var mousePosition = void 0;
var mousePositionEventBinded = void 0;

var Modal = function (_React$Component) {
  (0, _inherits3.default)(Modal, _React$Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      confirmLoading: false
    }, _this.handleCancel = function (e) {
      _this.props.onCancel(e);
    }, _this.handleOk = function () {
      _this.props.onOk();
      _this.setState({
        confirmLoading: true
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(mousePositionEventBinded);
      if (mousePositionEventBinded) {
        return;
      }
      // 只有点击事件支持从鼠标位置动画展开
      (0, _addEventListener2.default)(document.documentElement, 'click', function (e) {
        mousePosition = {
          x: e.pageX,
          y: e.pageY
        };
        // 20ms内发生过点击事件，则从点击位置动画展示
        // 否则直接zoom展示
        // 这样可以兼容非点击方式展开
        setTimeout(function () {
          return mousePosition = null;
        }, 20);
      });
      mousePositionEventBinded = true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          okText = _props.okText,
          confirmLoading = _props.confirmLoading,
          cancelText = _props.cancelText,
          footer = _props.footer,
          visible = _props.visible;


      if (this.context.idollLocale && this.context.idollLocale.Modal) {
        okText = okText || this.context.idollLocale.Modal.okText;
        cancelText = cancelText || this.context.idollLocale.Modal.cancelText;
      }

      var defaultFooter = [_react2.default.createElement(
        _button2.default,
        {
          key: 'cancel',
          type: 'ghost',
          onClick: this.handleCancel
        },
        cancelText || '取消'
      ), _react2.default.createElement(
        _button2.default,
        {
          key: 'confirm',
          type: 'primary',
          className: confirmLoading ? 'loading' : '',
          loading: confirmLoading,
          onClick: this.handleOk
        },
        okText || '确定'
      )];
      return _react2.default.createElement(_rcDialog2.default, (0, _extends3.default)({
        onClose: this.handleCancel,
        footer: footer || defaultFooter
      }, this.props, {
        visible: visible,
        mousePosition: mousePosition
      }));
    }
  }]);
  return Modal;
}(_react2.default.Component);

Modal.defaultProps = {
  prefixCls: 'idoll-modal',
  onOk: noop,
  onCancel: noop,
  width: 560,
  transitionName: 'zoom',
  maskTransitionName: 'fade',
  visible: false
};
Modal.propTypes = {
  prefixCls: _propTypes2.default.string,
  onOk: _propTypes2.default.func,
  onCancel: _propTypes2.default.func,
  okText: _propTypes2.default.node,
  cancelText: _propTypes2.default.node,
  width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  confirmLoading: _propTypes2.default.bool,
  visible: _propTypes2.default.bool,
  align: _propTypes2.default.object,
  footer: _propTypes2.default.node,
  title: _propTypes2.default.node,
  closable: _propTypes2.default.bool
};
Modal.contextTypes = {
  idollLocale: _propTypes2.default.object
};
exports.default = Modal;