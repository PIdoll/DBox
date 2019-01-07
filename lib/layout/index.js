'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = exports.Content = exports.Header = exports.Sider = undefined;

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

var _sider = require('./sider');

var _sider2 = _interopRequireDefault(_sider);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_layout2.default.Sider = _sider2.default;
_layout2.default.Header = _header2.default;
_layout2.default.Content = _content2.default;
_layout2.default.Footer = _footer2.default;

exports.default = _layout2.default;
exports.Sider = _sider2.default;
exports.Header = _header2.default;
exports.Content = _content2.default;
exports.Footer = _footer2.default;