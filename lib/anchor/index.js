'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnchorLinkProps = exports.AnchorProps = undefined;

var _anchor = require('./anchor');

Object.defineProperty(exports, 'AnchorProps', {
  enumerable: true,
  get: function get() {
    return _anchor.AnchorProps;
  }
});

var _anchorLink = require('./anchorLink');

Object.defineProperty(exports, 'AnchorLinkProps', {
  enumerable: true,
  get: function get() {
    return _anchorLink.AnchorLinkProps;
  }
});

var _anchor2 = _interopRequireDefault(_anchor);

var _anchorLink2 = _interopRequireDefault(_anchorLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_anchor2.default.link = _anchorLink2.default;
exports.default = _anchor2.default;