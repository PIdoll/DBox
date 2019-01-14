import React from 'react';
import DatePicker from 'components/date-picker/index';
import moment from 'moment';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD HH:mm:ss';

export default class ControlledRangePickerDemo extends React.Component {
  state = {
    time: [moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)],
  }
  range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  disabledRangeTime = (_, type) => {
    if (type === 'start') {
      return {
        disabledHours: () => this.range(0, 60).splice(4, 20),
        disabledMinutes: () => this.range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    }
    return {
      disabledHours: () => this.range(0, 60).splice(20, 4),
      disabledMinutes: () => this.range(0, 31),
      disabledSeconds: () => [55, 56],
    };
  }

  onCalendarChange = (dates, dateStrings) => {
    console.log('onCalendarChange', dates, dateStrings)
  }

  onChange = (dates, dateStrings) => {
    if (!dateStrings[0] && !dateStrings[1]) {
      this.setState({
        time: null,
      });
      return;
    }
    this.setState({
      time: [moment(dateStrings[0], dateFormat), moment(dateStrings[1], dateFormat)],
    })
  }
  render() {
    return (
      <div>
        <RangePicker
          value={this.state.time}
          format={dateFormat}
          showTime={{
            defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
          }}
          disabledTime={this.disabledRangeTime}
          onCalendarChange={this.onCalendarChange}
          onChange={this.onChange} />
      </div>
    )
  }
}
