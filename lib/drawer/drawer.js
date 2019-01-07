'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcDrawer = require('rc-drawer');

var _rcDrawer2 = _interopRequireDefault(_rcDrawer);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Drawer = function (_React$Component) {
  (0, _inherits3.default)(Drawer, _React$Component);

  function Drawer(props) {
    (0, _classCallCheck3.default)(this, Drawer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Drawer.__proto__ || (0, _getPrototypeOf2.default)(Drawer)).call(this, props));

    _this.close = function (e) {
      if (_this.props.visible !== undefined) {
        if (_this.props.onClose) {
          _this.props.onClose(e);
        }
        return false;
      }
    };

    _this.maskClick = function (e) {
      if (!_this.props.maskClosable) {
        return;
      }
      _this.close(e);
    };

    _this.push = function () {
      _this.setState({
        push: true
      });
    };

    _this.pull = function () {
      _this.setState({
        push: false
      });
    };

    _this.onDestoryTransitionEnd = function () {
      var isDestroyOnClose = _this.getDestoryOnClose();
      if (!isDestroyOnClose) {
        return;
      }
      if (!_this.props.visible) {
        _this.destoryClose = true;
        _this.forceUpdate();
      }
    };

    _this.getDestoryOnClose = function () {
      return _this.props.destroyOnClose && !_this.props.visible;
    };

    _this.getPushTransform = function (placement) {
      if (placement === 'left' || placement === 'right') {
        return 'translateX(' + (placement === 'left' ? 180 : -180) + 'px)';
      }
      if (placement === 'top' || placement === 'bottom') {
        return 'translateY(' + (placement === 'top' ? 180 : -180) + 'px)';
      }
    };

    _this.renderBody = function () {
      if (_this.destoryClose && !_this.props.visible) {
        return null;
      }
      _this.destoryClose = false;
      var placement = _this.props.placement;


      var containerStyle = placement === 'left' || placement === 'right' ? {
        overflow: 'auto',
        height: '100%'
      } : {};

      var isDestroyOnClose = _this.getDestoryOnClose();

      if (isDestroyOnClose) {
        // Increase the opacity transition, delete children after closing.
        containerStyle.opacity = 0;
        containerStyle.transition = 'opacity .3s';
      }
      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          title = _this$props.title,
          closable = _this$props.closable;

      // is have header dom

      var header = void 0;
      if (title) {
        header = _react2.default.createElement(
          'div',
          { className: prefixCls + '-header' },
          _react2.default.createElement(
            'div',
            { className: prefixCls + '-title' },
            title
          )
        );
      }
      // is have closer button
      var closer = void 0;
      if (closable) {
        closer = _react2.default.createElement(
          'button',
          {
            onClick: _this.close,
            'aria-label': 'Close',
            className: prefixCls + '-close'
          },
          _react2.default.createElement(
            'span',
            { className: prefixCls + '-close-x' },
            _react2.default.createElement(_icon2.default, { type: 'close' })
          )
        );
      }

      return _react2.default.createElement(
        'div',
        {
          className: prefixCls + '-wrapper-body',
          style: containerStyle,
          onTransitionEnd: _this.onDestoryTransitionEnd
        },
        header,
        closer,
        _react2.default.createElement(
          'div',
          { className: prefixCls + '-body', style: _this.props.style },
          _this.props.children
        )
      );
    };

    _this.getRcDrawerStyle = function () {
      var _this$props2 = _this.props,
          zIndex = _this$props2.zIndex,
          placement = _this$props2.placement,
          maskStyle = _this$props2.maskStyle;

      return _this.state.push ? (0, _extends3.default)({}, maskStyle, {
        zIndex: zIndex,
        transform: _this.getPushTransform(placement)
      }) : (0, _extends3.default)({}, maskStyle, {
        zIndex: zIndex
      });
    };

    _this.state = {
      push: false
    };
    return _this;
  }

  (0, _createClass3.default)(Drawer, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(preProps) {
      if (preProps.visible !== this.props.visible && this.parentDrawer) {
        if (this.props.visible) {
          this.parentDrawer.push();
        } else {
          this.parentDrawer.pull();
        }
      }
    }

    // get drawar push width or height

    // render drawer body dom

  }, {
    key: 'render',


    // render Provider for Multi-level drawe

    value: function render() {
      var _props = this.props,
          placement = _props.placement,
          className = _props.className,
          wrapClassName = _props.wrapClassName,
          width = _props.width,
          height = _props.height,
          rest = (0, _objectWithoutProperties3.default)(_props, ['placement', 'className', 'wrapClassName', 'width', 'height']);

      (0, _warning2.default)(wrapClassName === undefined, 'wrapClassName is deprecated, please use className instead.');
      var haveMask = rest.mask ? '' : 'no-mask';
      var offsetStyle = {};
      if (placement === 'left' || placement === 'right') {
        offsetStyle.width = width;
      } else {
        offsetStyle.height = height;
      }
      return _react2.default.createElement(
        _rcDrawer2.default,
        (0, _extends3.default)({
          handler: false
        }, rest, offsetStyle, {
          open: this.props.visible,
          onMaskClick: this.maskClick,
          showMask: this.props.mask,
          placement: placement,
          style: this.getRcDrawerStyle(),
          className: (0, _classnames2.default)(wrapClassName, className, haveMask)
        }),
        this.renderBody()
      );
    }
  }]);
  return Drawer;
}(_react2.default.Component);

Drawer.propTypes = {
  closable: _propTypes2.default.bool,
  destroyOnClose: _propTypes2.default.bool,
  getContainer: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.func, _propTypes2.default.bool]),
  maskClosable: _propTypes2.default.bool,
  mask: _propTypes2.default.bool,
  maskStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  title: _propTypes2.default.node,
  visible: _propTypes2.default.bool,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  zIndex: _propTypes2.default.number,
  prefixCls: _propTypes2.default.string,
  placement: _propTypes2.default.string,
  onClose: _propTypes2.default.func,
  className: _propTypes2.default.string
};
Drawer.defaultProps = {
  prefixCls: 'idoll-drawer',
  width: 256,
  height: 256,
  closable: true,
  placement: 'right',
  maskClosable: true,
  mask: true,
  level: null
};
exports.default = Drawer;