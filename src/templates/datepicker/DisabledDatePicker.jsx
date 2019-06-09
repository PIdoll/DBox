import React from 'react';
import moment from 'moment';
import DatePicker from 'components/date-picker/index';

const { RangePicker, MonthPicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

export default class DisabledDatePicker extends React.Component {
    render() {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
            </div>
            <div style={{ marginBottom: 15 }}>
              <RangePicker defaultValue={[moment('2015-06-06', dateFormat), moment('2015-07-06', dateFormat)]} disabled />
            </div>
            <div style={{ marginBottom: 15 }}>
              <MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
            </div>
          </div>
        )
    }
}
