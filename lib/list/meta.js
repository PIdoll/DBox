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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meta = function (_React$Component) {
  (0, _inherits3.default)(Meta, _React$Component);

  function Meta() {
    (0, _classCallCheck3.default)(this, Meta);
    return (0, _possibleConstructorReturn3.default)(this, (Meta.__proto__ || (0, _getPrototypeOf2.default)(Meta)).apply(this, arguments));
  }

  (0, _createClass3.default)(Meta, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$prefixCls = _props.prefixCls,
          prefixCls = _props$prefixCls === undefined ? 'idoll-list' : _props$prefixCls,
          className = _props.className,
          avatar = _props.avatar,
          title = _props.title,
          description = _props.description,
          others = (0, _objectWithoutProperties3.default)(_props, ['prefixCls', 'className', 'avatar', 'title', 'description']);

      var classString = (0, _classnames2.default)(prefixCls + '-item-meta', className);
      var content = React.createElement(
        'div',
        { className: prefixCls + '-item-meta-content' },
        title && React.createElement(
          'h4',
          { className: prefixCls + '-item-meta-title' },
          title
        ),
        description && React.createElement(
          'div',
          { className: prefixCls + '-item-meta-description' },
          description
        )
      );
      return React.createElement(
        'div',
        (0, _extends3.default)({}, others, { className: classString }),
        avatar && React.createElement(
          'div',
          { className: prefixCls + '-item-meta-avatar' },
          avatar
        ),
        (title || description) && content
      );
    }
  }]);
  return Meta;
}(React.Component);

exports.default = Meta;