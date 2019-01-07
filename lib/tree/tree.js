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

var _rcTree = require('rc-tree');

var _rcTree2 = _interopRequireDefault(_rcTree);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tree = function (_React$Component) {
  (0, _inherits3.default)(Tree, _React$Component);

  function Tree() {
    (0, _classCallCheck3.default)(this, Tree);
    return (0, _possibleConstructorReturn3.default)(this, (Tree.__proto__ || (0, _getPrototypeOf2.default)(Tree)).apply(this, arguments));
  }

  (0, _createClass3.default)(Tree, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          className = _props.className,
          children = _props.children;

      var checkable = this.props.checkable;
      return _react2.default.createElement(
        _rcTree2.default,
        (0, _extends3.default)({}, this.props, {
          className: className,
          checkable: checkable ? _react2.default.createElement('span', { className: prefixCls + '-checkbox-inner' }) : checkable
        }),
        children
      );
    }
  }]);
  return Tree;
}(_react2.default.Component);
// import animation from '../_util/openAnimation';


Tree.TreeNode = _rcTree.TreeNode;
Tree.defaultProps = {
  prefixCls: 'idoll-tree',
  checkable: false,
  showIcon: false
  // loadedKeys: [],
  // onLoaded: (loadedKeys: string[], info: { event: 'load', node: AntTreeNode; }) => void;
  // openAnimation: animation,
};
exports.default = Tree;