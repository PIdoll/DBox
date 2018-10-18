import GregorianCalendarLocale from 'gregorian-calendar/lib/locale/zh_CN';
import calendarLocale from 'rc-calendar/lib/locale/zh_CN';
import TimePickerLocale from '../../time-picker/locale/zh_CN';

// 统一合并为完整的Locale
const locale = { ...GregorianCalendarLocale };
locale.lang = {
  placeholder: '请选择日期',
  rangePlaceholder: ['开始日期', '结束日期'],
  ...calendarLocale
};

locale.timePickerLocale = { ...TimePickerLocale };

// 应该在字符之间添加空格
locale.lang.ok = '确 定';

export default locale;
