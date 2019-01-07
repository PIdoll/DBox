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

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputElement = function (_React$Component) {
  (0, _inherits3.default)(InputElement, _React$Component);

  function InputElement() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, InputElement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InputElement.__proto__ || (0, _getPrototypeOf2.default)(InputElement)).call.apply(_ref, [this].concat(args))), _this), _this.focus = function () {
      _this.ele.focus ? _this.ele.focus() : ReactDOM.findDOMNode(_this.ele).focus();
    }, _this.blur = function () {
      _this.ele.focus ? _this.ele.focus() : ReactDOM.findDOMNode(_this.ele).blur();
    }, _this.saveRef = function (ele) {
      _this.ele = ele;
      var childRef = _this.props.children.ref;

      if (typeof childRef === 'function') {
        childRef(ele);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(InputElement, [{
    key: 'render',
    value: function render() {
      return React.cloneElement(this.props.children, (0, _extends3.default)({}, this.props, {
        ref: this.saveRef
      }), null);
    }
  }]);
  return InputElement;
}(React.Component);

InputElement.propTypes = {
  children: _propTypes2.default.any
};
exports.default = InputElement;