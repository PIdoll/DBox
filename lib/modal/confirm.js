'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = confirm;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _locale = require('./locale');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function confirm(config) {
  var _classNames;

  var props = (0, _extends3.default)({}, config);
  var div = document.createElement('div');
  document.body.appendChild(div);

  props.iconType = props.iconType || 'question-circle';

  var width = props.width || 408;
  var style = props.style || {};

  // 默认为true，保持向下兼容
  if (!('okCancel' in props)) {
    props.okCancel = true;
  }

  var runtimeLocale = (0, _locale.getConfirmLocale)();

  props.okText = props.okText || (props.okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
  props.cancelText = props.cancelText || runtimeLocale.cancelText;

  function close() {
    var unmountResult = _reactDom2.default.unmountComponentAtNode(div);
    if (unmountResult) {
      div.parentNode.removeChild(div);
    }
  }

  function onCancel() {
    var cancelFn = props.onCancel;
    if (cancelFn) {
      var ret = void 0;
      if (cancelFn.length) {
        ret = cancelFn(close);
      } else {
        ret = cancelFn();
        if (!ret) {
          if (!ret) {
            close();
          }
        }
      }
      if (ret && ret.then) {
        ret.then(close);
      }
    } else {
      close();
    }
  }

  function onOk() {
    var okFn = props.onOk;
    if (okFn) {
      var ret = void 0;
      if (okFn.length) {
        ret = okFn(close);
      } else {
        ret = okFn();
        if (!ret) {
          close();
        }
      }
      if (ret && ret.then) {
        ret.then(close);
      }
    } else {
      close();
    }
  }

  var body = _react2.default.createElement(
    'div',
    { className: 'idoll-confirm-body' },
    _react2.default.createElement(_icon2.default, { type: props.iconType }),
    _react2.default.createElement(
      'span',
      { className: 'idoll-confirm-title' },
      props.title
    ),
    _react2.default.createElement(
      'div',
      { className: 'idoll-confirm-content' },
      props.content
    )
  );

  var footer = null;
  if (props.okCancel) {
    footer = _react2.default.createElement(
      'div',
      { className: 'idoll-confirm-btns' },
      _react2.default.createElement(
        _button2.default,
        { type: 'ghost', onClick: onCancel },
        props.cancelText
      ),
      _react2.default.createElement(
        _button2.default,
        { type: 'primary', onClick: onOk },
        props.okText
      )
    );
  } else {
    footer = _react2.default.createElement(
      'div',
      { className: 'idoll-confirm-btns' },
      _react2.default.createElement(
        _button2.default,
        { type: 'primary', onClick: onOk },
        props.okText
      )
    );
  }

  var classString = (0, _classnames2.default)((_classNames = {
    'idoll-confirm': true
  }, (0, _defineProperty3.default)(_classNames, 'idoll-confirm-' + props.type, true), (0, _defineProperty3.default)(_classNames, props.className, !!props.className), _classNames));

  _reactDom2.default.render(_react2.default.createElement(
    _Modal2.default,
    {
      className: classString,
      visible: true,
      closable: false,
      title: '',
      transitionName: 'zoom',
      footer: '',
      maskTransitionName: 'fade',
      style: style,
      width: width
    },
    _react2.default.createElement(
      'div',
      { style: { zoom: 1, overflow: 'hidden' } },
      body,
      ' ',
      footer
    )
  ), div);

  return {
    destroy: close
  };
}