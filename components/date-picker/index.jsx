import RcCalendar from 'rc-calendar';
import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import createPicker from './createPicker';
import wrapPicker from './wrapPicker';
import RangePicker from './RangePicker';
import WeekPicker from './WeekPicker';

import './style/index';

const DatePicker = wrapPicker(createPicker(RcCalendar), 'date');
const MonthPicker = wrapPicker(createPicker(MonthCalendar), 'month');

Object.assign(DatePicker, {
  RangePicker: wrapPicker(RangePicker, 'date'),
  MonthPicker,
  WeekPicker: wrapPicker(WeekPicker, 'week'),
});

export default DatePicker;

