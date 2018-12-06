import React from 'react';
import Calendar from 'components/calendar/index';
import moment from 'moment';

export default class CalendarView extends React.Component {
  disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }

  onPanelChange = (value, mode) => {
    console.log('onPanelChange', value, mode);
  }

  onSelect = (date) => {
    console.log('onSelect', date);
  }

  onChange = (date) => {
    console.log('onChange', date);
  }
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>基本用法</h1>
        <div style={{ width: 300, border: '1px solid rgba(226,226,226,1)', borderRadius: 4 }}>
          <Calendar
            fullscreen={false}
            disabledDate={this.disabledDate}
            onPanelChange={this.onPanelChange}
            onSelect={this.onSelect}
            onChange={this.onChange} />
        </div>
        <h1 className='h1'>基本用法</h1>
        <div style={{ width: 300, border: '1px solid rgba(226,226,226,1)', borderRadius: 4 }}>
          <Calendar fullscreen={false} mold='backdrop' />
        </div>
      </div>
    )
  }
}
