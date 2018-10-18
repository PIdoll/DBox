import React from 'react';
import DatePicker from 'components/date-picker/index';
const RangePicker = DatePicker.RangePicker;
const MonthPicker = DatePicker.MonthPicker;

function disabledDate(current) {
  // Can not select days before today and today
  return current && current.getTime() < Date.now();
}

export default class DatePickerView extends React.Component {
  onChange = (value, dateString) => {
    console.log(value, dateString);
  }

  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>
         月份选择日期框
        </h1>
        <MonthPicker onChange={this.onChange} />
        <h1 className='h1'>
         日期范围选择框
        </h1>
        <RangePicker style={{ width: 230 }} />
        <h1 className='h1'>
         日期选择禁用框
        </h1>
        <DatePicker defaultValue='2015-06-06' disabled />
        <h1 className='h1'>
         带有时间的日期选择
        </h1>
        <DatePicker showTime format='yyyy-MM-dd HH:mm:ss' placeholder='请选择时间' />
        <h1 className='h1'>
          不可选择日期
        </h1>
        <RangePicker
          disabledDate={disabledDate}
          showTime={{
        hideDisabledOptions: true,
      }}
          format='YYYY-MM-DD HH:mm:ss'
    />
      </div>
    )
  }
}

