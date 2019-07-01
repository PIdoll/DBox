import React from 'react';
import DatePicker from 'components/date-picker/index';
import Icon from 'components/icon/index';

const { RangePicker, MonthPicker } = DatePicker;
const SmileIcon = <Icon type='smile' />


export default class BasicDatePickerDemo extends React.Component {
  onChange = (date, dateStr) => {
    console.log(date, dateStr);
  }
  render() {
    return (
      <div>
        <div style={{ marginBottom: 15 }}>
          <DatePicker allowClear={false} suffixIcon={SmileIcon} onChange={this.onChange} />
        </div>
        <div style={{ marginBottom: 15 }}>
          <MonthPicker placeholder='选择月份' autoFocus onChange={this.onChange} />
        </div>
        <div style={{ marginBottom: 15 }}>
          <RangePicker onChange={this.onChange} />
        </div>
      </div>
    )
  }
}

