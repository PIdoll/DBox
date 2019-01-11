import React from 'react';
import TimePicker from 'components/time-picker/index';

export default class DisabledTimePickerDemo extends React.Component {
  render() {
    return (
      <div>
        <TimePicker disabled />
      </div>
    )
  }
}
