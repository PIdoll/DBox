'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _object = require('object.omit');

var _object2 = _interopRequireDefault(_object);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sider = function (_Component) {
  (0, _inherits3.default)(Sider, _Component);

  function Sider(props) {
    (0, _classCallCheck3.default)(this, Sider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Sider.__proto__ || (0, _getPrototypeOf2.default)(Sider)).call(this, props));

    var collapsed = void 0;
    if ('collapsed' in props) {
      collapsed = props.collapsed;
    } else {
      collapsed = false;
    }
    _this.state = {
      collapsed: collapsed
    };
    return _this;
  }

  (0, _createClass3.default)(Sider, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('collapsed' in nextProps) {
        this.setState({
          collapsed: nextProps.collapsed
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          span = _props.span,
          children = _props.children,
          collapsed = _props.collapsed,
          onCollapse = _props.onCollapse;


      var currentSpan = void 0;
      if (typeof span === 'number') {
        currentSpan = span;
      } else if ((typeof span === 'undefined' ? 'undefined' : (0, _typeof3.default)(span)) === 'object') {
        currentSpan = collapsed ? span.fold : span.unfold;
      }

      if (onCollapse) {
        onCollapse(collapsed);
      }

      var classes = (0, _classnames2.default)((0, _defineProperty3.default)({
        'idoll-layout-sider': 'doll-layout-sider'
      }, 'idoll-layout-sider-' + currentSpan, currentSpan));

      var otherProps = (0, _object2.default)(this.props, ['span', 'collapsed', 'onCollapse']);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, otherProps, { className: classes }),
        children
      );
    }
  }]);
  return Sider;
}(_react.Component);

Sider.propTypes = {
  span: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  collapsed: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  onCollapse: _propTypes2.default.func
};

exports.default = Sider;