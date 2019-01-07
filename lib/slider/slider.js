'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

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

var _Slider = require('rc-slider/lib/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _Range = require('rc-slider/lib/Range');

var _Range2 = _interopRequireDefault(_Range);

var _Handle = require('rc-slider/lib/Handle');

var _Handle2 = _interopRequireDefault(_Handle);

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slider = function (_React$Component) {
  (0, _inherits3.default)(Slider, _React$Component);

  function Slider(props) {
    (0, _classCallCheck3.default)(this, Slider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Slider.__proto__ || (0, _getPrototypeOf2.default)(Slider)).call(this, props));

    _this.toggleTooltipVisible = function (index, visible) {
      _this.setState(function (_ref) {
        var visibles = _ref.visibles;
        return {
          visibles: (0, _extends4.default)({}, visibles, (0, _defineProperty3.default)({}, index, visible))
        };
      });
    };

    _this.handleWithTooltip = function (_ref2) {
      var value = _ref2.value,
          dragging = _ref2.dragging,
          index = _ref2.index,
          restProps = (0, _objectWithoutProperties3.default)(_ref2, ['value', 'dragging', 'index']);
      var _this$props = _this.props,
          tooltipPrefixCls = _this$props.tooltipPrefixCls,
          tipFormatter = _this$props.tipFormatter;
      var visibles = _this.state.visibles;

      var visible = tipFormatter ? visibles[index] || dragging : false;
      return _react2.default.createElement(
        _tooltip2.default,
        {
          prefixCls: tooltipPrefixCls,
          title: tipFormatter ? tipFormatter(value) : '',
          visible: visible,
          placement: 'top',
          key: index
        },
        _react2.default.createElement(_Handle2.default, (0, _extends4.default)({}, restProps, {
          value: value,
          onMouseEnter: function onMouseEnter() {
            return _this.toggleTooltipVisible(index, true);
          },
          onMouseLeave: function onMouseLeave() {
            return _this.toggleTooltipVisible(index, false);
          }
        }))
      );
    };

    _this.saveSlider = function (node) {
      _this.rcSlider = node;
    };

    _this.state = {
      visibles: {}
    };
    return _this;
  }

  (0, _createClass3.default)(Slider, [{
    key: 'focus',
    value: function focus() {
      this.rcSlider.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.rcSlider.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          range = _props.range,
          restProps = (0, _objectWithoutProperties3.default)(_props, ['range']);

      if (range) {
        return _react2.default.createElement(_Range2.default, (0, _extends4.default)({}, restProps, { ref: this.saveSlider, handle: this.handleWithTooltip }));
      }
      return _react2.default.createElement(_Slider2.default, (0, _extends4.default)({}, restProps, { ref: this.saveSlider, handle: this.handleWithTooltip }));
    }
  }]);
  return Slider;
}(_react2.default.Component);

Slider.propTypes = {
  /** 最小值 */
  min: _propTypes2.default.number,
  /** 最大值 */
  max: _propTypes2.default.number,
  /** 刻度标记 */
  marks: _propTypes2.default.object
};
Slider.defaultProps = {
  prefixCls: 'idoll-slider',
  tooltipPrefixCls: 'idoll-tooltip',
  tipFormatter: function tipFormatter(value) {
    return value.toString();
  }
};
exports.default = Slider;