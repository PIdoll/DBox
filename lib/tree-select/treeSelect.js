'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _rcTreeSelect = require('rc-tree-select');

var _rcTreeSelect2 = _interopRequireDefault(_rcTreeSelect);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeSelect = function (_React$Component) {
  (0, _inherits3.default)(TreeSelect, _React$Component);

  function TreeSelect() {
    (0, _classCallCheck3.default)(this, TreeSelect);
    return (0, _possibleConstructorReturn3.default)(this, (TreeSelect.__proto__ || (0, _getPrototypeOf2.default)(TreeSelect)).apply(this, arguments));
  }

  (0, _createClass3.default)(TreeSelect, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var props = this.props;
      var _props = this.props,
          size = _props.size,
          className = _props.className,
          combobox = _props.combobox,
          notFoundContent = _props.notFoundContent,
          prefixCls = _props.prefixCls;


      var cls = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3.default)(_classNames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3.default)(_classNames, className, !!className), _classNames));

      var antLocale = this.context.antLocale;

      if (antLocale && antLocale.Select) {
        notFoundContent = notFoundContent || antLocale.Select.notFoundContent;
      }

      if (combobox) {
        notFoundContent = null;
      }

      var checkable = props.treeCheckable;
      if (checkable) {
        checkable = _react2.default.createElement('span', { className: prefixCls + '-tree-checkbox-inner' });
      }
      var clearIcon = _react2.default.createElement(_icon2.default, {
        type: 'close-circle-o',
        className: prefixCls + '-picker-clear'
      });
      var removeIcon = _react2.default.createElement(_icon2.default, { type: 'close', className: prefixCls + '-remove-icon' });

      return _react2.default.createElement(_rcTreeSelect2.default, (0, _extends3.default)({}, this.props, {
        treeCheckable: checkable,
        removeIcon: removeIcon,
        clearIcon: clearIcon,
        className: cls,
        notFoundContent: notFoundContent
      }));
    }
  }]);
  return TreeSelect;
}(_react2.default.Component);

TreeSelect.TreeNode = _rcTreeSelect.TreeNode;
TreeSelect.SHOW_ALL = _rcTreeSelect.SHOW_ALL;
TreeSelect.SHOW_PARENT = _rcTreeSelect.SHOW_PARENT;
TreeSelect.SHOW_CHILD = _rcTreeSelect.SHOW_CHILD;
TreeSelect.defaultProps = {
  prefixCls: 'idoll-select',
  transitionName: 'slide-up',
  choiceTransitionName: 'zoom',
  showSearch: false,
  dropdownClassName: 'idoll-select-tree-dropdown'
};
exports.default = TreeSelect;