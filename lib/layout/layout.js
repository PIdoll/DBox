'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @visibleName Layout 布局
 */
function Layout(props) {
  var children = props.children,
      className = props.className;
  // // console.log('LayoutchildrenLength', children.length);

  var sider = [];
  if (children && children.length) {
    sider = children.filter(function (item) {
      return (0, _keys2.default)(item.type.propTypes).indexOf('collapsed') !== -1;
    });
  }
  var classes = (0, _classnames2.default)({
    'idoll-layout': 'idoll-layout',
    'idoll-layout-has-sider': sider.length
  }, className);
  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, props, { className: classes }),
    children
  );
}

Layout.propTypes = {
  children: _propTypes2.default.node
};

exports.default = Layout;