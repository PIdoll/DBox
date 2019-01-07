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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcSteps = require('rc-steps');

var _rcSteps2 = _interopRequireDefault(_rcSteps);

require('./style/index');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Steps = function (_React$Component) {
  (0, _inherits3.default)(Steps, _React$Component);

  function Steps() {
    (0, _classCallCheck3.default)(this, Steps);
    return (0, _possibleConstructorReturn3.default)(this, (Steps.__proto__ || (0, _getPrototypeOf2.default)(Steps)).apply(this, arguments));
  }

  (0, _createClass3.default)(Steps, [{
    key: 'render',
    value: function render() {
      var prefixCls = this.props.prefixCls;

      var iconType = {
        finish: _react2.default.createElement(_icon2.default, { type: 'done', className: prefixCls + '-finish-icon' }),
        error: _react2.default.createElement(_icon2.default, { type: 'close', className: prefixCls + '-error-icon' })
      };
      return _react2.default.createElement(_rcSteps2.default, (0, _extends3.default)({ icons: iconType }, this.props));
    }
  }]);
  return Steps;
}(_react2.default.Component);

Steps.Step = _rcSteps2.default.Step;
Steps.defaultProps = {
  prefixCls: 'idoll-steps',
  iconPrefix: 'idoll',
  current: 0
};
Steps.propTypes = {
  prefixCls: _propTypes2.default.string,
  iconPrefix: _propTypes2.default.string,
  current: _propTypes2.default.number
};
exports.default = Steps;