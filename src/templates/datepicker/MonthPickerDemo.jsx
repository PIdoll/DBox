import React from 'react';
import DatePicker from 'components/date-picker/index';
import moment from 'moment';

const { MonthPicker } = DatePicker;

export default class MonthPickerDemo extends React.Component {
  render() {
    return (
      <div>
        <MonthPicker
          defaultValue={moment('2019-08')}
          format='YYYY-MM'
          defaultPickerValue={moment('2020-10')} />
      </div>
    )
  }
}
