import React from 'react';
import DatePicker from 'components/date-picker/index';
import moment from 'moment';

export default class DatePickerShowTimeDemo extends React.Component {
  state = {
    time: moment('2015-06-06', 'YYYY-MM-DD HH:mm:ss'),
  }
  onChange = (date, dateString) => {
    if (!dateString) {
      this.setState({
        time: null,
      });
      return;
    }
    this.setState({
      time: moment(date, 'YYYY-MM-DD HH:mm:ss'),
    })
    console.log('onChange', date, dateString);
  }
  render() {
    return (
      <div>
        <DatePicker
          format='YYYY-MM-DD HH:mm:ss'
          showTime={{
            defaultValue: moment('00:00:00', 'HH:mm:ss'),
          }}
          showToday
          value={this.state.time}
          onChange={this.onChange} />
      </div>
    )
  }
}
