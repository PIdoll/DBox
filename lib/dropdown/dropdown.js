'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _rcDropdown = require('rc-dropdown');

var _rcDropdown2 = _interopRequireDefault(_rcDropdown);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = function (_React$Component) {
  (0, _inherits3.default)(Dropdown, _React$Component);

  function Dropdown() {
    (0, _classCallCheck3.default)(this, Dropdown);
    return (0, _possibleConstructorReturn3.default)(this, (Dropdown.__proto__ || (0, _getPrototypeOf2.default)(Dropdown)).apply(this, arguments));
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_rcDropdown2.default, this.props);
    }
  }]);
  return Dropdown;
}(_react2.default.Component);

Dropdown.defaultProps = {
  transitionName: 'slide-up',
  prefixCls: 'idoll-dropdown',
  mouseEnterDelay: 0.15,
  mouseLeaveDelay: 0.1
};
Dropdown.propTypes = {
  placement: _propTypes.PropTypes.string,
  trigger: _propTypes.PropTypes.array,
  overlay: _propTypes.PropTypes.any,
  disabled: _propTypes.PropTypes.bool,
  visible: _propTypes.PropTypes.bool,
  onVisibleChange: _propTypes.PropTypes.func,
  icon: _propTypes.PropTypes.string,
  block: _propTypes.PropTypes.bool
};
exports.default = Dropdown;