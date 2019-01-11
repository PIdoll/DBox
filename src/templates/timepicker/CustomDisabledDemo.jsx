import React from 'react';
import TimePicker from 'components/time-picker/index';

const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

export default class CustomDisabledDemo extends React.Component {
  disabledHours() {
    return range(0, 24).splice(4, 20);
  }
  disabledMinutes() {
    return range(30, 60);
  }
  disabledSeconds() {
    return range(30, 60);
  }
  render() {
    return (
      <TimePicker
        disabledHours={this.disabledHours}
        disabledMinutes={this.disabledMinutes}
        disabledSeconds={this.disabledSeconds} />
    )
  }
}
