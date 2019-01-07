'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = Meta;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Meta(props) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === undefined ? 'dbox-card' : _props$prefixCls,
      avatar = props.avatar,
      title = props.title,
      description = props.description,
      others = (0, _objectWithoutProperties3.default)(props, ['prefixCls', 'avatar', 'title', 'description']);

  var MetaClassName = (0, _classnames2.default)(prefixCls + '-meta', _classnames2.default);
  var avatarDOM = avatar ? _react2.default.createElement(
    'div',
    { className: prefixCls + '-meta-avatar' },
    avatar
  ) : null;
  var titleDOM = title ? _react2.default.createElement(
    'div',
    { className: prefixCls + '-meta-title' },
    title
  ) : null;
  var descriptionDOM = description ? _react2.default.createElement(
    'div',
    { className: prefixCls + '-meta-description' },
    description
  ) : null;
  var MetaDetail = title || description ? _react2.default.createElement(
    'div',
    { className: prefixCls + '-meta-detail' },
    titleDOM,
    descriptionDOM
  ) : null;

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, others, { className: MetaClassName }),
    avatarDOM,
    MetaDetail
  );
}

Meta.PropTypes = {
  classNames: _propTypes2.default.string,
  prefixCls: _propTypes2.default.string,
  avatar: _propTypes2.default.node,
  title: _propTypes2.default.node,
  description: _propTypes2.default.node
};