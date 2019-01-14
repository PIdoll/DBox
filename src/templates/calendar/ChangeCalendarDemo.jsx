import React from 'react';
import Calendar from 'components/calendar/index';

export default class ChangeCalendarDemo extends React.Component {
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
      <div style={{ width: 300, border: '1px solid rgba(226,226,226,1)', borderRadius: 4 }}>
        <Calendar
          onPanelChange={this.onPanelChange}
          onSelect={this.onSelect}
          onChange={this.onChange} />
      </div>
    )
  }
}
