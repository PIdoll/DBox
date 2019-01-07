'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = exports.Col = undefined;

var _col = require('./col');

var _col2 = _interopRequireDefault(_col);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = {
  Col: _col2.default,
  Row: _row2.default
};
exports.Col = _col2.default;
exports.Row = _row2.default;
exports.default = Grid;