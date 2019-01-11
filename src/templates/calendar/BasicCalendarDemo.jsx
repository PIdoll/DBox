import React from 'react';
import Calendar from 'components/calendar/index';
import moment from 'moment';

export default class BasicCalendarDemo extends React.Component {
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
          value={moment('2019-2')}
          onPanelChange={this.onPanelChange}
          onSelect={this.onSelect}
          onChange={this.onChange}
          validRange={[moment('2018-01'), moment('2038-12')]}
          />
      </div>
    )
  }
}
