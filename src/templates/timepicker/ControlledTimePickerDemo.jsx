import React from 'react';
import TimePicker from 'components/time-picker/index';
import moment from 'moment';

export default class ControlledTimePickerDemo extends React.Component {
  state = {
    value: moment('12:08:23', 'HH:mm:ss'),
  };
  onChange = (time) => {
    // console.log(time);
    this.setState({ value: time });
  }
  onOpenChange(open) {
    // console.log(open);
  }
  render() {
    return (
      <TimePicker
        value={this.state.value}
        onOpenChange={this.onOpenChange}
        onChange={this.onChange} />
    )
  }
}
