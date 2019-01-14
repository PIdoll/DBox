import React from 'react';
import DatePicker from 'components/date-picker/index';
import moment from 'moment';

const { MonthPicker } = DatePicker;

export default class ControlledMonthPickerDemo extends React.Component {
  state = {
    time: moment('2019-08'),
  }
  onChange = (date, dateString) => {
    if (!dateString) {
      this.setState({
        time: null,
      });
      return;
    }
    this.setState({
      time: moment(date),
    })
  }
  render() {
    return (
      <div>
        <MonthPicker
          value={this.state.time}
          onChange={this.onChange} />
      </div>
    )
  }
}
