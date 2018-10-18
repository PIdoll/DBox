import React from 'react';
import TimePicker from 'components/time-picker/index';

export default class TimePickerView extends React.Component {
  state = {
    value: null
  }

  // 基本用法
  onChange = (time, timeString) => {
    console.log(time, timeString);
  }

  // 受控组件 value和onChange配合使用
  onControChange = (time) => {
    console.log(time);
    this.setState({ value: time });
  }

  render() {
    return (
      <div id='main-container'>
        <div className='h1'>
          基本时间选择框
        </div>
        <TimePicker onChange={this.onChange} />

        <div className='h1'>
          受控组件
        </div>
        <TimePicker value={this.state.value} onChange={this.onControChange} />
        <div className='h1'>
          不同尺寸的时间选择框
        </div>
        <TimePicker defaultValue='12:08:23' size='large' />&nbsp;&nbsp;&nbsp;
        <TimePicker defaultValue='12:08:23' />&nbsp;&nbsp;&nbsp;
        <TimePicker defaultValue='12:08:23' size='small' />
        <div className='h1'>
          禁用时间选择框
        </div>
        <TimePicker defaultValue={'12:08:23'} disabled />
        <div className='h1'>
          不展示秒
        </div>
        <TimePicker defaultValue='12:08:23' format='HH:mm' />
      </div>
    )
  }
}
