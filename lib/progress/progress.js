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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _rcProgress = require('rc-progress');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var statusColorMap = {
  normal: '#13B886',
  exception: '#F44336',
  success: '#3CCB69'
};

var validProgress = function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  } else if (progress > 100) {
    return 100;
  }
  return progress;
};

var Progress = function (_React$Component) {
  (0, _inherits3.default)(Progress, _React$Component);

  function Progress() {
    (0, _classCallCheck3.default)(this, Progress);
    return (0, _possibleConstructorReturn3.default)(this, (Progress.__proto__ || (0, _getPrototypeOf2.default)(Progress)).apply(this, arguments));
  }

  (0, _createClass3.default)(Progress, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var props = this.props;
      var prefixCls = props.prefixCls,
          className = props.className,
          _props$percent = props.percent,
          percent = _props$percent === undefined ? 0 : _props$percent,
          status = props.status,
          format = props.format,
          trailColor = props.trailColor,
          size = props.size,
          successPercent = props.successPercent,
          type = props.type,
          strokeWidth = props.strokeWidth,
          width = props.width,
          showInfo = props.showInfo,
          strokeColor = props.strokeColor,
          _props$strokeLinecap = props.strokeLinecap,
          strokeLinecap = _props$strokeLinecap === undefined ? 'round' : _props$strokeLinecap,
          restProps = (0, _objectWithoutProperties3.default)(props, ['prefixCls', 'className', 'percent', 'status', 'format', 'trailColor', 'size', 'successPercent', 'type', 'strokeWidth', 'width', 'showInfo', 'strokeColor', 'strokeLinecap']);

      var progressStatus = parseInt(successPercent ? successPercent.toString() : percent.toString(), 10) >= 100 && !('status' in props) ? 'success' : status || 'normal';
      var progressInfo = void 0;
      var progress = void 0;
      var textFormatter = format || function (percentNumber) {
        return percentNumber + '%';
      };

      if (showInfo) {
        var text = void 0;
        var iconType = type === 'circle' ? '' : '-circle';
        if (format || progressStatus !== 'exception' && progressStatus !== 'success') {
          text = textFormatter(validProgress(percent), validProgress(successPercent));
        } else if (progressStatus === 'exception') {
          text = _react2.default.createElement(_icon2.default, { type: 'close' + iconType, theme: type === 'line' ? 'filled' : 'outlined' });
        } else if (progressStatus === 'success') {
          text = _react2.default.createElement(_icon2.default, { type: 'check' + iconType, theme: type === 'line' ? 'filled' : 'outlined' });
        }
        progressInfo = _react2.default.createElement(
          'span',
          {
            className: prefixCls + '-text',
            title: typeof text === 'string' ? text : undefined
          },
          text
        );
      }

      if (type === 'line') {
        var percentStyle = {
          width: validProgress(percent) + '%',
          height: strokeWidth || (size === 'small' ? 4 : 8),
          background: strokeColor,
          borderRadius: strokeLinecap === 'square' ? 0 : '100px'
        };
        var successPercentStyle = {
          width: validProgress(successPercent) + '%',
          height: strokeWidth || (size === 'small' ? 4 : 8),
          borderRadius: strokeLinecap === 'square' ? 0 : '100px'
        };
        var successSegment = successPercent !== undefined ? _react2.default.createElement('div', { className: '$(prefixCls)-success-bg', style: successPercentStyle }) : null;
        progress = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: prefixCls + '-outer' },
            _react2.default.createElement(
              'div',
              { className: prefixCls + '-inner' },
              _react2.default.createElement('div', { className: prefixCls + '-bg', style: percentStyle }),
              successSegment
            )
          ),
          progressInfo
        );
      } else if (type === 'circle') {
        var circleSize = width || 120;
        var circleStyle = {
          width: circleSize,
          height: circleSize,
          fontSize: circleSize * 0.15 + 6
        };
        var circleWidth = strokeWidth || 6;
        progress = _react2.default.createElement(
          'div',
          { className: prefixCls + '-inner', style: circleStyle },
          _react2.default.createElement(_rcProgress.Circle, {
            percent: validProgress(percent),
            strokeWidth: circleWidth,
            trailWidth: circleWidth,
            strokeColor: strokeColor || statusColorMap[progressStatus],
            strokeLinecap: strokeLinecap,
            trailColor: trailColor,
            prefixCls: prefixCls
          }),
          progressInfo
        );
      }

      var classString = (0, _classnames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-' + (type === 'dashboard' && 'circle' || type), true), (0, _defineProperty3.default)(_classNames, prefixCls + '-status-' + progressStatus, true), (0, _defineProperty3.default)(_classNames, prefixCls + '-show-info', showInfo), (0, _defineProperty3.default)(_classNames, prefixCls + '-' + size, size), _classNames), className);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, restProps, { className: classString }),
        progress
      );
    }
  }]);
  return Progress;
}(_react2.default.Component);

Progress.defaultProps = {
  type: 'line',
  percent: 0,
  showInfo: true,
  trailColor: '#f5f5f5',
  prefixCls: 'idoll-progress',
  size: 'default'
};
Progress.propTypes = {
  /** 状态，可选：normal、success、exception、active */
  status: _propTypes2.default.oneOf(['normal', 'exception', 'active', 'success']),
  /** 类型 可选：line circle */
  type: _propTypes2.default.oneOf(['line', 'circle']),
  /** 是否展示进度信息 */
  showInfo: _propTypes2.default.bool,
  /** 百分比展示 */
  percent: _propTypes2.default.number,
  /** 圆形进度条画布宽度，单位 px */
  width: _propTypes2.default.number,
  /** 圆形进度条的宽度，单位是进度条画布宽度的百分比 */
  strokeWidth: _propTypes2.default.number,
  /** 内容的模版函数 */
  strokeLinecap: _propTypes2.default.oneOf(['round', 'square']),
  /** 自定义内容的模版函数 */
  format: _propTypes2.default.func,
  /** 进度条的大小 */
  default: _propTypes2.default.oneOf(['default', 'small'])
};
exports.default = Progress;