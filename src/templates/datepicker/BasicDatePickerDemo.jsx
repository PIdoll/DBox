import React from 'react';
import DatePicker from 'components/date-picker/index';

const { RangePicker, MonthPicker } = DatePicker;


export default class BasicDatePickerDemo extends React.Component {
  render() {
    return (
      <div>
        <div style={{ marginBottom: 15 }}>
          <DatePicker allowClear={false} />
        </div>
        <div style={{ marginBottom: 15 }}>
          <MonthPicker placeholder='选择月份' autoFocus />
        </div>
        <div style={{ marginBottom: 15 }}>
          <RangePicker />
        </div>
      </div>
    )
  }
}

