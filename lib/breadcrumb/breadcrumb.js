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

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _breadcrumbItem = require('./breadcrumbItem');

var _breadcrumbItem2 = _interopRequireDefault(_breadcrumbItem);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBreadcrumbName(route, params) {
  if (!route.breadcrumbName) {
    return null;
  }
  var paramsKeys = (0, _keys2.default)(params).join('|');
  var name = route.breadcrumbName.replace(new RegExp(':(' + paramsKeys + ')', 'g'), function (replacement, key) {
    return params[key] || replacement;
  });
  return name;
}

function defaultItemRender(route, params, routes, paths) {
  var isLastItem = routes.indexOf(route) === routes.length - 1;
  var name = getBreadcrumbName(route, params);
  return isLastItem ? _react2.default.createElement(
    'span',
    null,
    name
  ) : _react2.default.createElement(
    'a',
    { href: '#/' + paths.join('/') },
    name
  );
}

var Breadcrumb = function (_React$Component) {
  (0, _inherits3.default)(Breadcrumb, _React$Component);

  function Breadcrumb() {
    (0, _classCallCheck3.default)(this, Breadcrumb);
    return (0, _possibleConstructorReturn3.default)(this, (Breadcrumb.__proto__ || (0, _getPrototypeOf2.default)(Breadcrumb)).apply(this, arguments));
  }

  (0, _createClass3.default)(Breadcrumb, [{
    key: 'render',
    value: function render() {
      var crumbs = void 0;
      var _props = this.props,
          separator = _props.separator,
          prefixCls = _props.prefixCls,
          style = _props.style,
          className = _props.className,
          routes = _props.routes,
          _props$params = _props.params,
          params = _props$params === undefined ? {} : _props$params,
          children = _props.children,
          _props$itemRender = _props.itemRender,
          itemRender = _props$itemRender === undefined ? defaultItemRender : _props$itemRender;

      if (routes && routes.length > 0) {
        var paths = [];
        crumbs = routes.map(function (route) {
          route.path = route.path || '';
          var path = route.path.replace(/^\//, '');
          (0, _keys2.default)(params).forEach(function (key) {
            path = path.replace(':' + key, params[key]);
          });
          if (path) {
            paths.push(path);
          }
          return _react2.default.createElement(
            _breadcrumbItem2.default,
            { separator: separator, key: route.breadcrumbName || path },
            itemRender(route, params, routes, paths)
          );
        });
      } else if (children) {
        crumbs = _react2.default.Children.map(children, function (element, index) {
          if (!element) {
            return element;
          }
          return (0, _react.cloneElement)(element, {
            separator: separator,
            key: index
          });
        });
      }
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(className, prefixCls), style: style },
        crumbs
      );
    }
  }]);
  return Breadcrumb;
}(_react2.default.Component);

Breadcrumb.defaultProps = {
  prefixCls: 'idoll-breadcrumb',
  separator: '/'
};
Breadcrumb.propTypes = {
  /** 前缀别名 */
  prefixCls: _propTypes2.default.string,
  separator: _propTypes2.default.node,
  routes: _propTypes2.default.array,
  params: _propTypes2.default.object
};
exports.default = Breadcrumb;