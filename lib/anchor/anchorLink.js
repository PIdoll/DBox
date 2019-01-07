'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnchorLink = function (_React$Component) {
  (0, _inherits3.default)(AnchorLink, _React$Component);

  function AnchorLink() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AnchorLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AnchorLink.__proto__ || (0, _getPrototypeOf2.default)(AnchorLink)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      type: 'vertical'
    }, _this.componentDidMount = function () {
      _this.context.idollAnchor.registerLink(_this.props.href);
      if (_this.context.idollAnchor.type || _this.context.idollAnchor.type !== 'vertical') {
        _this.setState({
          type: _this.context.idollAnchor.type
        });
      }
    }, _this.componentWillUnmount = function () {
      _this.context.idollAnchor.unregisterLink(_this.props.href);
    }, _this.handleClick = function (e) {
      var _this$context$idollAn = _this.context.idollAnchor,
          scrollTo = _this$context$idollAn.scrollTo,
          onClick = _this$context$idollAn.onClick;
      var _this$props = _this.props,
          href = _this$props.href,
          title = _this$props.title;

      if (onClick) {
        onClick(e, { title: title, href: href });
      }
      scrollTo(href);
      // this.context.idollAnchor.scrollTo(this.props.href)
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AnchorLink, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var href = nextProps.href;
      var type = this.state.type;

      if (this.props.href !== href) {
        this.context.idollAnchor.unregisterLink(this.props.href);
        this.context.idollAnchor.registerLink(href);
      }
      if (type !== this.context.idollAnchor.type) {
        this.setState({
          type: this.context.idollAnchor.type
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          href = _props.href,
          title = _props.title,
          children = _props.children;
      var type = this.state.type;

      var active = this.context.idollAnchor.activeLink === href;
      var wrapperClassName = (0, _classnames2.default)(prefixCls + '-link', (0, _defineProperty3.default)({}, prefixCls + '-link-active', active));
      var inlineClassName = (0, _classnames2.default)(prefixCls + '-line-link', (0, _defineProperty3.default)({}, prefixCls + '-link-active', active));
      var titleClassName = (0, _classnames2.default)(prefixCls + '-link-title', (0, _defineProperty3.default)({}, prefixCls + '-link-title-active', active));
      // 书签类型样式
      var bookmarkAnchorClassName = (0, _classnames2.default)(prefixCls + '-bookmark', (0, _defineProperty3.default)({}, prefixCls + '-bookmark-active', active));
      var bookmarkTitleClassName = (0, _classnames2.default)(prefixCls + '-bookmark-title', (0, _defineProperty3.default)({}, prefixCls + '-bookmark-title-active', active));
      return _react2.default.createElement(
        'div',
        { className: type === 'vertical' || !type ? wrapperClassName : type === 'bookmark' ? bookmarkAnchorClassName : inlineClassName },
        _react2.default.createElement(
          'a',
          { className: type !== 'bookmark' ? titleClassName : bookmarkTitleClassName, href: href, title: typeof title === 'string' ? title : '', onClick: this.handleClick },
          title
        ),
        children
      );
    }
  }]);
  return AnchorLink;
}(_react2.default.Component);

AnchorLink.propTypes = {
  prefixCls: _propTypes2.default.string,
  href: _propTypes2.default.string,
  title: _propTypes2.default.string,
  children: _propTypes2.default.node
};
AnchorLink.defaultProps = {
  prefixCls: 'idoll-anchor',
  href: '#'
};
AnchorLink.contextTypes = {
  idollAnchor: _propTypes2.default.object
};
exports.default = AnchorLink;