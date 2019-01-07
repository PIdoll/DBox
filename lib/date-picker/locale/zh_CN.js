'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _zh_CN = require('rc-calendar/lib/locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _zh_CN3 = require('../../time-picker/locale/zh_CN');

var _zh_CN4 = _interopRequireDefault(_zh_CN3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 统一合并为完整的Locale
// const locale = { ...GregorianCalendarLocale };
// locale.lang = {
//   placeholder: '请选择日期',
//   rangePlaceholder: ['开始日期', '结束日期'],
//   ...calendarLocale
// };

// locale.timePickerLocale = { ...TimePickerLocale };

// // 应该在字符之间添加空格
// locale.lang.ok = '确 定';

// export default locale;
// import GregorianCalendarLocale from 'gregorian-calendar/lib/locale/zh_CN';
var locale = {
  lang: (0, _extends3.default)({
    placeholder: '请选择日期',
    rangePlaceholder: ['开始日期', '结束日期']
  }, _zh_CN2.default),
  timePickerLocale: (0, _extends3.default)({}, _zh_CN4.default)
};

locale.lang.ok = '确定';

exports.default = locale;