'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormItemProps = exports.ValidationRule = exports.ValidateCallback = exports.FormCreateOption = exports.FormComponentProps = exports.FormProps = undefined;

var _Form = require('./Form');

Object.defineProperty(exports, 'FormProps', {
  enumerable: true,
  get: function get() {
    return _Form.FormProps;
  }
});
Object.defineProperty(exports, 'FormComponentProps', {
  enumerable: true,
  get: function get() {
    return _Form.FormComponentProps;
  }
});
Object.defineProperty(exports, 'FormCreateOption', {
  enumerable: true,
  get: function get() {
    return _Form.FormCreateOption;
  }
});
Object.defineProperty(exports, 'ValidateCallback', {
  enumerable: true,
  get: function get() {
    return _Form.ValidateCallback;
  }
});
Object.defineProperty(exports, 'ValidationRule', {
  enumerable: true,
  get: function get() {
    return _Form.ValidationRule;
  }
});

var _FormItem = require('./FormItem');

Object.defineProperty(exports, 'FormItemProps', {
  enumerable: true,
  get: function get() {
    return _FormItem.FormItemProps;
  }
});

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Form2.default;