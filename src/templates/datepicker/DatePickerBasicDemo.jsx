import React from 'react';
import DatePicker from 'components/date-picker/index';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';

export default class DatePickerBasicDemo extends React.Component {
  onChange = (date, dateString) => {
    console.log('onChange', date, dateString);
  }
  onPanelChange = (value, mode) => {
    console.log('onPanelChange', value, mode);
  }
  render() {
    return (
      <div>
        <DatePicker
          defaultValue={moment('2015-06-06')}
          defaultPickerValue={moment('2015-06-06')}
          format={dateFormat}
          onChange={this.onChange}
          onPanelChange={this.onPanelChange} />
      </div>
    )
  }
}
