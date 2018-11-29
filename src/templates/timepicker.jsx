import React from 'react';
import TimePicker from 'components/time-picker/index';
import moment from 'moment';

export default class TimePickerView extends React.Component {
  onChange = (time, timeString) => {
    console.log(time, timeString);
  }
  render() {
    return (
      <div id='main-container'>
        <h1>基本用法</h1>
        <TimePicker onChange={this.onChange} />
        <h1>三种尺寸</h1>
        <div style={{ display: 'flex' }}>
          <div style={{marginRight: 10}}>
            <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size='large' />
          </div>
          <div style={{marginRight: 10}}>
            <TimePicker />
          </div>
          <div style={{marginRight: 10}}>
            <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size='small' />
          </div>
        </div>
        <h1>禁用</h1>
        <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
      </div>
    )
  }
}
