'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var React = _interopRequireWildcard(_react);

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import LocaleReceiver from '../locale-provider/LocaleReceiver';
// import defaultLocale from '../locale-provider/default';

var Popconfirm = function (_React$Component) {
  (0, _inherits3.default)(Popconfirm, _React$Component);

  function Popconfirm(props) {
    (0, _classCallCheck3.default)(this, Popconfirm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Popconfirm.__proto__ || (0, _getPrototypeOf2.default)(Popconfirm)).call(this, props));

    _this.onConfirm = function (e) {
      _this.setVisible(false);
      var onConfirm = _this.props.onConfirm;

      if (onConfirm) {
        onConfirm.call(_this, e);
      }
    };

    _this.onCancel = function (e) {
      _this.setVisible(false);

      var onCancel = _this.props.onCancel;

      if (onCancel) {
        onCancel.call(_this, e);
      }
    };

    _this.onVisibleChange = function (visible) {
      _this.setVisible(visible);
    };

    _this.saveTooltip = function (node) {
      _this.tooltip = node;
    };

    _this.state = {
      visible: props.visible
    };
    return _this;
  }

  (0, _createClass3.default)(Popconfirm, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('visible' in nextProps) {
        this.setState({ visible: nextProps.visible });
      }
    }
  }, {
    key: 'getPopupDomNode',
    value: function getPopupDomNode() {
      return this.tooltip.getPopupDomNode();
    }
  }, {
    key: 'setVisible',
    value: function setVisible(visible) {
      var props = this.props;
      if (!('visible' in props)) {
        this.setState({ visible: visible });
      }

      var onVisibleChange = props.onVisibleChange;

      if (onVisibleChange) {
        onVisibleChange(visible);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          placement = _props.placement,
          title = _props.title,
          okText = _props.okText,
          cancelText = _props.cancelText,
          restProps = (0, _objectWithoutProperties3.default)(_props, ['prefixCls', 'placement', 'title', 'okText', 'cancelText']);
      // const overlay = (
      //   <LocaleReceiver
      //     componentName='Popconfirm'
      //     defaultLocale={defaultLocale.Popconfirm}>
      //     {this.renderOverlay}
      //   </LocaleReceiver>
      // );

      var overlay = React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: prefixCls + '-inner-content' },
          React.createElement(
            'div',
            { className: prefixCls + '-message' },
            React.createElement(_icon2.default, { type: 'warning-circle' }),
            React.createElement(
              'div',
              { className: prefixCls + '-message-title' },
              title
            )
          ),
          React.createElement(
            'div',
            { className: prefixCls + '-buttons' },
            React.createElement(
              _button2.default,
              { onClick: this.onConfirm, type: 'danger', size: 'small' },
              okText || '确定'
            ),
            React.createElement(
              _button2.default,
              { onClick: this.onCancel, type: 'ghost', size: 'small' },
              cancelText || '取消'
            )
          )
        )
      );
      return React.createElement(_tooltip2.default, (0, _extends3.default)({}, restProps, {
        prefixCls: prefixCls,
        placement: placement,
        onVisibleChange: this.onVisibleChange,
        visible: this.state.visible,
        overlay: overlay,
        ref: this.saveTooltip }));
    }
  }]);
  return Popconfirm;
}(React.Component);

Popconfirm.defaultProps = {
  prefixCls: 'idoll-popover',
  transitionName: 'zoom-big',
  placement: 'topRight',
  trigger: 'click',
  okType: 'primary'
};
exports.default = Popconfirm;