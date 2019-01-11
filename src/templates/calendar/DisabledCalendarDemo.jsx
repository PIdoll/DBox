import React from 'react';
import Calendar from 'components/calendar/index';
import moment from 'moment';

export default class DisabledCalendarDemo extends React.Component {
  disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }
  render() {
    return (
      <div style={{ width: 300, border: '1px solid rgba(226,226,226,1)', borderRadius: 4 }}>
        <Calendar
          disabledDate={this.disabledDate} />
      </div>
    )
  }
}
