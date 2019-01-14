import React from 'react';
import Calendar from 'components/calendar/index';

export default class BackgroundCalendarDemo extends React.Component {
  onChange = (date) => {
    console.log('onChange', date);
  }

  onPanelChange = (value, mode) => {
    console.log('onPanelChange', value, mode);
  }
  render() {
    return (
      <div style={{ width: 300, border: '1px solid rgba(226,226,226,1)', borderRadius: 4 }}>
        <Calendar
          mold='backdrop'
          onChange={this.onChange}
          onPanelChange={this.onPanelChange} />
      </div>
    )
  }
}
