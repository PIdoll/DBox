import React from 'react';
import DatePicker from 'components/date-picker/index';
import moment from 'moment';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

export default class RangePickerBasicDemo extends React.Component {
  render() {
    return (
      <div>
        <RangePicker
          defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-09', dateFormat)]}
          defaultPickerValue={[moment('2019-01-12'), moment('2015-01-13')]} />
      </div>
    )
  }
}
