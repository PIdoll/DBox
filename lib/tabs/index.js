'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactDOM = exports.TabPane = undefined;

var _tabs = require('./tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabPane = _tabs2.default.TabPane;
exports.TabPane = TabPane;
exports.ReactDOM = _reactDom2.default;
exports.default = _tabs2.default;