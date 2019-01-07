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

var _rcTooltip = require('rc-tooltip');

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _placements = require('./placements');

var _placements2 = _interopRequireDefault(_placements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tooltip = function (_React$Component) {
  (0, _inherits3.default)(Tooltip, _React$Component);

  function Tooltip(props) {
    (0, _classCallCheck3.default)(this, Tooltip);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call(this, props));

    _this.onVisibleChange = function (visible) {
      var onVisibleChange = _this.props.onVisibleChange;

      if (!('visible' in _this.props)) {
        _this.setState({ visible: visible });
      }
      if (onVisibleChange && !_this.isNoTitle()) {
        onVisibleChange(visible);
      }
    };

    _this.saveTooltip = function (node) {
      _this.tooltip = node;
    };

    _this.state = {
      visible: !!props.visible || !!props.defaultVisible
    };
    return _this;
  }

  (0, _createClass3.default)(Tooltip, [{
    key: 'isNoTitle',
    value: function isNoTitle() {
      // overlay是为了兼容老版本
      var _props = this.props,
          title = _props.title,
          overlay = _props.overlay;

      return !title && !overlay;
    }
  }, {
    key: 'getPopupDomNode',
    value: function getPopupDomNode() {
      console.log(this.tooltip);
      return this.tooltip.getPopupDomNode();
    }
    // Tooltip在不可使用的button中无法隐藏的问题
    // Chrome中不可用button不会触发鼠标事件

  }, {
    key: 'getDisabledCompatibleChildren',
    value: function getDisabledCompatibleChildren(element) {
      if (element.type === 'button' && element.props.disabled && this.isHoverTrigger()) {
        var spanStyle = {
          // ！！重要：默认设置为inline-block
          display: 'inline-block',
          cursor: 'not-allowed'
        };
        var buttonStyle = {
          pointerEvents: 'none'
        };
        var child = (0, _react.cloneElement)(element, {
          style: buttonStyle,
          className: null
        });
        return _react2.default.createElement(
          'span',
          { style: spanStyle, className: element.props.className },
          child
        );
      }
      return element;
    }
    // 判断tooltip是否是hover触发的

  }, {
    key: 'isHoverTrigger',
    value: function isHoverTrigger() {
      var trigger = this.props.trigger;

      if (!trigger || trigger === 'hover') {
        return true;
      }
      if (Array.isArray(trigger)) {
        return trigger.indexOf('hover') >= 0;
      }
      return false;
    }
  }, {
    key: 'getPlacements',
    value: function getPlacements() {
      var _props2 = this.props,
          builtinPlacements = _props2.builtinPlacements,
          arrowPointAtCenter = _props2.arrowPointAtCenter,
          autoAdjustOverflow = _props2.autoAdjustOverflow;

      return builtinPlacements || (0, _placements2.default)({
        arrowPointAtCenter: arrowPointAtCenter,
        verticalArrowShift: 8,
        autoAdjustOverflow: autoAdjustOverflow
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // getTooltipContainer已经被重命名为getPopupContainer
      var _props3 = this.props,
          prefixCls = _props3.prefixCls,
          overlay = _props3.overlay,
          title = _props3.title,
          children = _props3.children,
          openClassName = _props3.openClassName,
          getPopupContainer = _props3.getPopupContainer,
          getTooltipContainer = _props3.getTooltipContainer;

      var visible = this.state.visible;
      // 当没有传入“title”属性时，隐藏tooltip
      if (!('visible' in this.props) && this.isNoTitle()) {
        visible = false;
      }
      var child = this.getDisabledCompatibleChildren(_react2.default.isValidElement(children) ? children : _react2.default.createElement(
        'span',
        null,
        children
      ));
      var childProps = child.props;
      var childCls = (0, _classnames2.default)(childProps.className, (0, _defineProperty3.default)({}, openClassName || prefixCls + '-open', true));
      return _react2.default.createElement(
        _rcTooltip2.default,
        (0, _extends3.default)({
          ref: this.saveTooltip,
          overlay: overlay || title || '',
          visible: visible,
          onVisibleChange: this.onVisibleChange,
          getTooltipContainer: getPopupContainer || getTooltipContainer,
          builtinPlacements: this.getPlacements()
        }, this.props),
        visible ? (0, _react.cloneElement)(child, { className: childCls }) : child
      );
    }
  }]);
  return Tooltip;
}(_react2.default.Component);

Tooltip.defaultProps = {
  prefixCls: 'idoll-tooltip',
  placement: 'top',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true
};
exports.default = Tooltip;