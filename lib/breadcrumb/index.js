'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbItem = exports.BreadcrumbItemProps = exports.BreadcrumbProps = undefined;

var _breadcrumb = require('./breadcrumb');

Object.defineProperty(exports, 'BreadcrumbProps', {
  enumerable: true,
  get: function get() {
    return _breadcrumb.BreadcrumbProps;
  }
});

var _breadcrumbItem = require('./breadcrumbItem');

Object.defineProperty(exports, 'BreadcrumbItemProps', {
  enumerable: true,
  get: function get() {
    return _breadcrumbItem.BreadcrumbItemProps;
  }
});

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _breadcrumbItem2 = _interopRequireDefault(_breadcrumbItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_breadcrumb2.default.Item = _breadcrumbItem2.default;
exports.default = _breadcrumb2.default;
exports.BreadcrumbItem = _breadcrumbItem2.default;