import React from 'react';
import TimePicker from 'components/time-picker/index';

export default class DifferentSizeTimePickerDemo extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: 10 }}>
          <TimePicker size='large' />
        </div>
        <div style={{ marginRight: 10 }}>
          <TimePicker />
        </div>
        <div style={{ marginRight: 10 }}>
          <TimePicker size='small' />
        </div>
      </div>
    )
  }
 }
