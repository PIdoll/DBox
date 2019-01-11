import React from 'react';
import Calendar from 'components/calendar/index';

export default class BackgroundCalendarDemo extends React.Component {
  render() {
    return (
      <div style={{ width: 300, border: '1px solid rgba(226,226,226,1)', borderRadius: 4 }}>
        <Calendar
          mold='backdrop' />
      </div>
    )
  }
}
