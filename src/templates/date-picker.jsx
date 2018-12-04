import React from 'react';
import DatePicker from 'components/date-picker/index';

const { RangePicker, MonthPicker, WeekPicker  } = DatePicker;


export default class DatePickerView extends React.Component {

  onChange = (date, dateString) => {
    console.log(date, dateString);
  }
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>基本使用</h1>
        <DatePicker onChange={this.onChange} />
      </div>
    )
  }
}

